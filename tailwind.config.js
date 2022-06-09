const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        egypt: ['egypt'],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      amber: colors.amber,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      orange: colors.orange,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
  },
}
