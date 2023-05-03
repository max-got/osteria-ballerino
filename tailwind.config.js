import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons"



/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,astro,svelte}'],
  theme: {
    extend: {
      colors: {
        'primary': '#792523',
        'secondary': '#1e683d',
        'tertiary': '#ebb973',
        'base': '#f2e7dd',
        'dark': '#1a1a1a',
        'light': '#f2f2f2',
      },
      maxWidth: {
        '8xl': '1440px',
      },
      fontFamily: {
        display: ["Playball", "cursive", "sans-serif"],
        sans: ["PT Sans", "sans-serif" ],
      },
    },
  },
  plugins: [
       iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(["ph"]),
    }),
   /** @type {import('tailwindcss/types/config').PluginCreator} */
    ({ addUtilities, theme, addBase }) => {
      addUtilities({
        '.sec-lg': {
         '@apply max-w-8xl mx-auto py-8 px-4': {},
        },
        '.sec-base': {
         '@apply max-w-8xl mx-auto py-4 px-4': {},
        },
        '.sec-sm': {
         '@apply max-w-8xl mx-auto py-2 px-4': {},
        },
        '.sec-xs': {
         '@apply max-w-8xl mx-auto py-1 px-4': {},
        }
      });
    }
  ],
}

