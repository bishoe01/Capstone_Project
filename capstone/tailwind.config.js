/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/html/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.jsx', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#004C86',
        sub: '#B3CFE9',
        emphasize: '#FFA500',
        text: '#FFFFFF',
        border: '#BBBBBB',
        textgray: '#9D9D9D',
        accent: '#F07B3F',
      },
    },
  },
  plugins: [],
});
