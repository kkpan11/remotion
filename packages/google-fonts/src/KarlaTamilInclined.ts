import {loadFonts} from './base';

export const getInfo = () => ({
	fontFamily: 'Karla Tamil Inclined',
	importName: 'KarlaTamilInclined',
	version: 'v2',
	url: 'https://fonts.googleapis.com/css2?family=Karla+Tamil+Inclined:ital,wght@0,400;0,700',
	unicodeRanges: {
		tamil:
			'U+0964-0965, U+0B82-0BFA, U+200C-200D, U+20B9, U+25CC, U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
	},
	fonts: {
		normal: {
			'400': {
				tamil:
					'https://fonts.gstatic.com/s/karlatamilinclined/v2/vm8pdQ3vXFXZ1aPd8dNzR82AFh2TibkaVocKt5I.woff2',
			},
			'700': {
				tamil:
					'https://fonts.gstatic.com/s/karlatamilinclined/v2/vm8mdQ3vXFXZ1aPd8dNzR82AFh2TibkaVo-nkofoKS8.woff2',
			},
		},
	},
	subsets: ['tamil'],
});

export const fontFamily = 'Karla Tamil Inclined' as const;

type Variants = {
	normal: {
		weights: '400' | '700';
		subsets: 'tamil';
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
