import type {VolumeProp} from '../volume-prop.js';
import type {LoopVolumeCurveBehavior} from './use-audio-frame.js';

export type RemotionMainAudioProps = {
	startFrom?: number;
	endAt?: number;
};

export type RemotionAudioProps = Omit<
	React.DetailedHTMLProps<
		React.AudioHTMLAttributes<HTMLAudioElement>,
		HTMLAudioElement
	>,
	'autoPlay' | 'controls' | 'onEnded' | 'nonce' | 'onResize' | 'onResizeCapture'
> & {
	name?: string;
	volume?: VolumeProp;
	playbackRate?: number;
	acceptableTimeShiftInSeconds?: number;
	/**
	 * @deprecated Amplification is now always enabled. To prevent amplification, set `volume` to a value less than 1.
	 */
	allowAmplificationDuringRender?: boolean;
	_remotionInternalNeedsDurationCalculation?: boolean;
	_remotionInternalNativeLoopPassed?: boolean;
	toneFrequency?: number;
	pauseWhenBuffering?: boolean;
	showInTimeline?: boolean;
	delayRenderTimeoutInMilliseconds?: number;
	delayRenderRetries?: number;
	loopVolumeCurveBehavior?: LoopVolumeCurveBehavior;
};
