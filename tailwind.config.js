const { fill, maxWidth, screens, colors, fontFamily, backgroundPosition, backgroundSize, fontSize } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    screens: {
      ...screens,
      'xs': { 'min': '1px', 'max': '639px' },
      'sm': { 'min': '640px', 'max': '767px' },
      'md': { 'min': '768px', 'max': '1023px' },
      'lg': { 'min': '1024px', 'max': '1279px' },
      'xl': { 'min': '1280px' },
    },
    colors: {
      ...colors,
      black: '#000',
      white: '#fff',
      blue: '#2e66ff',
      'blue-hover': '#002AB9',
      green: '#2cebad',
      'green-hover': '#0AB97B',
      gray: '#e6e6e6',
      'gray-hover': '#b7b7b7',
    },
    fontFamily: {
      ...fontFamily,
      'rustico': ['Rustico V2 Regular'],
      'futura': ['Futura Medium'],
    },
    maxWidth: (theme, { breakpoints }) => ({
      ...maxWidth,
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      ...breakpoints(theme('screens')),
    }),
    extend: {
      lineHeight: {
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
      }
    },
    fill: theme => ({
      ...fill,
      'black': theme('colors.black'),
      'white': theme('colors.white'),
      'blue': theme('colors.blue'),
      'blue-hover': theme('colors.blue-hover'),
      'green': theme('colors.green'),
      'green-hover': theme('colors.green-hover'),
      'gray': theme('colors.gray'),
      'gray-hover': theme('colors.gray-hover'),
    })
  }
}
