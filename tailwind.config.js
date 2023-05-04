/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './src/components/**/*.tsx',
    './src/pages/**/*.tsx',
    './src/layouts/**/*.tsx',
  ],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    colors: {
      baseColor: '#fffd7f',
      dark_1: '#111111',
      dark_2: '#222222',
      dark_3: '#333333',
      gray_B9: '#b9b9b9',
      gray_D9: '#d9d9d9',
      gray_F1: '#f1f1f1',
      gray_C1: '#c1c1c1',
      gray_E1: '#e1e1e1',
      error: '#ff3b3b',
      black: '#000000',
      white: '#ffffff',
      red: '#ff0000',
      transparent: 'transparent',
      yellow_E3: '#e3a008',
      blue_00: '#0091ff',
      green: '#38c172',
    },

    extend: {},
    screens: {
      ...defaultTheme.screens,
      'max-1440px': { max: '1440px' },
      'max-1280': { max: '1280px' },
      'max-928': { max: '928px' },
      'max-768': { max: '768px' },
      'max-512': { max: '512px' },

      '2xl': { min: '1440px' },
    },
  },
  corePlugins: {
    container: false,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
