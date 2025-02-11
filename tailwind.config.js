/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f8f9f3',
          100: '#e8ecd7',
          200: '#d4dcb9',
          300: '#b8c791',
          400: '#9baf6e',
          500: '#839656',
          600: '#697943',
          700: '#8DC63F', // Primary green from logo
          800: '#3c461f',
          900: '#2a310f',
        },
      },
    },
  },
  plugins: [],
};