import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,astro,svelte}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#792523',
					50: '#F7E4E3',
					100: '#EFC8C8',
					200: '#DF9290',
					300: '#CF5B59',
					400: '#AE3432',
					500: '#792523',
					600: '#5F1D1B',
					700: '#471515',
					800: '#2F0E0E',
					900: '#180707',
					950: '#0C0403',
				},
				secondary: {
					DEFAULT: '#1E683D',
					50: '#E3F7EC',
					100: '#C4EED5',
					200: '#8CDEAE',
					300: '#51CD84',
					400: '#2FA25F',
					500: '#1E683D',
					600: '#185331',
					700: '#123F25',
					800: '#0D2C19',
					900: '#06140C',
					950: '#030C07',
				},
				tertiary: {
					DEFAULT: '#EBB973',
					50: '#FDF8F2',
					100: '#FCF4E9',
					200: '#F8E6CE',
					300: '#F4D9B3',
					400: '#F0C994',
					500: '#EBB973',
					600: '#E4A144',
					700: '#D68A1F',
					800: '#AE7019',
					900: '#815312',
					950: '#59390D',
				},
				bg: '#f2e7dd',
				dark: '#1a1a1a',
				light: '#f2f2f2',
			},
			maxWidth: {
				'8xl': '1440px',
			},
			fontFamily: {
				display: ['Playball', 'cursive', 'sans-serif'],
				sans: ['PT Sans', 'sans-serif'],
			},
		},
	},
	plugins: [
		iconsPlugin({
			// Select the icon collections you want to use
			collections: getIconCollections(['ph']),
		}),
		/** @type {import('tailwindcss/types/config').PluginCreator} */
		({ addUtilities, theme, addBase }) => {
			addUtilities({
				'.sec-lg': {
					'@apply mx-auto py-8 px-4': {},
				},
				'.sec-base': {
					'@apply mx-auto py-4 px-4': {},
				},
				'.sec-sm': {
					'@apply mx-auto py-2 px-4': {},
				},
				'.sec-xs': {
					'@apply mx-auto py-1 px-4': {},
				},
			});
		},
	],
};
