import type {Structure} from './parse-result';

export const isAudioStructure = (structure: Structure) => {
	if (structure.type === 'mp3') {
		return true;
	}

	if (structure.type === 'wav') {
		return true;
	}

	if (structure.type === 'aac') {
		return true;
	}

	if (structure.type === 'flac') {
		return true;
	}

	if (structure.type === 'iso-base-media') {
		return false;
	}

	if (structure.type === 'matroska') {
		return false;
	}

	if (structure.type === 'transport-stream') {
		return false;
	}

	if (structure.type === 'riff') {
		return false;
	}

	throw new Error(`Unhandled structure type: ${structure satisfies never}`);
};
