/** @type {import('tailwindcss').Config} */
// const colors = require(`./src/themes/colors`);
import colors from './src/themes/colors';

module.exports = {
  content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
  theme: {
    fontFamily: {
      header: ['Source Sans Pro', 'sans-serif'],
      text: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        ...colors,
      },
      borderRadius: {
        lg: '1rem',
      },
      spacing: {
        14: '3.5rem',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(fill|text|border)-skill-(1|2|3)/,
    },
  ],
};
