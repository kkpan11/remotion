import {loadFonts} from './base';

export const getInfo = () => ({
	fontFamily: 'Inria Sans',
	importName: 'InriaSans',
	version: 'v14',
	url: 'https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700',
	unicodeRanges: {
		'latin-ext':
			'U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF',
		latin:
			'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
	},
	fonts: {
		italic: {
			'300': {
				'latin-ext':
					'https://fonts.gstatic.com/s/inriasans/v14/ptRRTiqXYfZMCOiVj9kQ1OzAgQl_pM4zXX4.woff2',
				latin:
					'https://fonts.gstatic.com/s/inriasans/v14/ptRRTiqXYfZMCOiVj9kQ1OzAgQl_qs4z.woff2',
			},
			'400': {
				'latin-ext':
					'https://fonts.gstatic.com/s/inriasans/v14/ptROTiqXYfZMCOiVj9kQ1OzIJCtqle8.woff2',
				latin:
					'https://fonts.gstatic.com/s/inriasans/v14/ptROTiqXYfZMCOiVj9kQ1OzIKitq.woff2',
			},
			'700': {
				'latin-ext':
					'https://fonts.gstatic.com/s/inriasans/v14/ptRRTiqXYfZMCOiVj9kQ1OzAkQ5_pM4zXX4.woff2',
				latin:
					'https://fonts.gstatic.com/s/inriasans/v14/ptRRTiqXYfZMCOiVj9kQ1OzAkQ5_qs4z.woff2',
			},
		},
		normal: {
			'300': {
				'latin-ext':
					'https://fonts.gstatic.com/s/inriasans/v14/ptRPTiqXYfZMCOiVj9kQ3ELaPQJPqNY3.woff2',
				latin:
					'https://fonts.gstatic.com/s/inriasans/v14/ptRPTiqXYfZMCOiVj9kQ3ELaPQxPqA.woff2',
			},
			'400': {
				'latin-ext':
					'https://fonts.gstatic.com/s/inriasans/v14/ptRMTiqXYfZMCOiVj9kQ1Of4KDNu.woff2',
				latin:
					'https://fonts.gstatic.com/s/inriasans/v14/ptRMTiqXYfZMCOiVj9kQ1On4KA.woff2',
			},
			'700': {
				'latin-ext':
					'https://fonts.gstatic.com/s/inriasans/v14/ptRPTiqXYfZMCOiVj9kQ3FLdPQJPqNY3.woff2',
				latin:
					'https://fonts.gstatic.com/s/inriasans/v14/ptRPTiqXYfZMCOiVj9kQ3FLdPQxPqA.woff2',
			},
		},
	},
	subsets: ['latin', 'latin-ext'],
});

export const fontFamily = 'Inria Sans' as const;

type Variants = {
	italic: {
		weights: '300' | '400' | '700';
		subsets: 'latin' | 'latin-ext';
	};
	normal: {
		weights: '300' | '400' | '700';
		subsets: 'latin' | 'latin-ext';
	};
};

export const loadFont = <T extends keyof Variants>(
	style?: T,
	options?: {
		weights?: Variants[T]['weights'][];
		subsets?: Variants[T]['subsets'][];
		document?: Document;
		ignoreTooManyRequestsWarning?: boolean;
	},
) => {
	return loadFonts(getInfo(), style, options);
};
