/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/daisyui/dist/**/*.js'],
  theme: {
    screens: {
      xs: '504px',
      ...defaultTheme.screens,
    },
    extend: {
      animation: {
        wiggle: 'wiggle 0.3s ease-in-out 1',
        fadein: 'fadein 0.2s ease-in 1',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'translateX(0)',
          },
          '30%, 70%': {
            transform: 'translateX(-3%)',
          },
          '10%, 50%, 90%': {
            transform: 'translateX(3%)',
          },
        },
        fadein: {
          '0%': {
            transform: 'scale(1.5)',
            opacity: 0,
          },
          '100%': {
            transform: 'scale(1.0)',
            opacity: 1,
          },
        },
      },
    },
    fontFamily: {
      mono: ['Fira Code', 'monospace'],
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    darkTheme: "dracula",
    themes: [
      {
        acid: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          'base-100': '#e1e4e8',
        },
      },
      'dracula',
    ],
  },
};
