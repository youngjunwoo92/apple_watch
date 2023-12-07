const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens
    },
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 }
        }
      }
    }
  },
  plugins: [],
  darkMode: 'class'
};
