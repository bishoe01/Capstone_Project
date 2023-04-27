/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/html/utils/withMT');

const sizeList = (arrayLength = 20, multiple = 5, unit = '%') => {
  let object = {};
  const multipleArray = {
    ...Array.from(Array(arrayLength)).map((_, i) => `${Number(i) * multiple}${unit}`),
  };

  for (const j in multipleArray) {
    const key = multipleArray[j];
    object = { ...object, ...{ [key]: multipleArray[j] } };
  }

  return object;
};

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
        warning: '#ef5350',
      },
      width: {
        ...sizeList(20, 5),
      },
      gridTemplateColumns: {
        30: 'repeat(30, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
});
