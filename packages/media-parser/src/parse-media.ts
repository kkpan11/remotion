import type {BufferIterator} from './buffer-iterator';
import {getArrayBufferIterator} from './buffer-iterator';
import {webReader} from './from-web';
import {getAudioCodec} from './get-audio-codec';
import {getDimensions} from './get-dimensions';
import {getDuration} from './get-duration';
import {getFps} from './get-fps';
import {getVideoCodec} from './get-video-codec';
import {hasAllInfo} from './has-all-info';
import type {Metadata, ParseMedia} from './options';
import type {ParseResult} from './parse-result';
import {parseVideo} from './parse-video';

export const parseMedia: ParseMedia = async (
	src,
	options,
	readerInterface = webReader,
) => {
	const {reader, contentLength} = await readerInterface.read(src, null);
	let currentReader = reader;

	const returnValue = {} as Metadata<true, true, true, true, true, true>;

	let iterator: BufferIterator | null = null;
	let parseResult: ParseResult | null = null;

	while (parseResult === null || parseResult.status === 'incomplete') {
		const result = await currentReader.read();
		if (result.done) {
			break;
		}

		if (iterator) {
			iterator.addData(result.value);
		} else {
			iterator = getArrayBufferIterator(
				result.value,
				contentLength ?? undefined,
			);
		}

		if (parseResult) {
			parseResult = parseResult.continueParsing();
		} else {
			parseResult = parseVideo(iterator);
		}

		if (hasAllInfo(options, parseResult)) {
			if (!currentReader.closed) {
				currentReader.cancel(new Error('has all information'));
			}

			break;
		}

		if (
			parseResult &&
			parseResult.status === 'incomplete' &&
			parseResult.skipTo !== null
		) {
			if (!currentReader.closed) {
				currentReader.cancel(new Error('skipped ahead'));
			}

			const {reader: newReader} = await readerInterface.read(
				src,
				parseResult.skipTo,
			);
			currentReader = newReader;
			iterator.skipTo(parseResult.skipTo);
		}
	}

	if (!parseResult) {
		throw new Error('Could not parse video');
	}

	if (options.dimensions) {
		returnValue.dimensions = getDimensions(parseResult.segments);
	}

	if (options.durationInSeconds) {
		returnValue.durationInSeconds = getDuration(parseResult.segments);
	}

	if (options.fps) {
		returnValue.fps = getFps(parseResult.segments);
	}

	if (options.videoCodec) {
		returnValue.videoCodec = getVideoCodec(parseResult.segments);
	}

	if (options.audioCodec) {
		returnValue.audioCodec = getAudioCodec(parseResult.segments);
	}

	if (options.boxes) {
		returnValue.boxes = parseResult.segments;
	}

	return returnValue;
};
