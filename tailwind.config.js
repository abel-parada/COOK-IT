<<<<<<< HEAD
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
      }
    },
=======
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
>>>>>>> 2931f52b8f23c91920ca362471bdb0224f9d9fd2
  },
  variants: {
    extend: {},
  },
  plugins: [],
<<<<<<< HEAD
}
=======
};
>>>>>>> 2931f52b8f23c91920ca362471bdb0224f9d9fd2
