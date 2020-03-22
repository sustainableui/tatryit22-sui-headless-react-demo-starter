const { screens, colors, fontFamily, backgroundPosition, backgroundSize, fontSize } = require('tailwindcss/defaultTheme');

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
    },
    backgroundPosition: {
      ...backgroundPosition,
      'bottom-xl-ul': 'center bottom 1.5rem',
      'bottom-lg-ul': 'center bottom 1rem',
      'bottom-md-ul': 'center bottom 0.8rem',
      'bottom-sm-ul': 'center bottom 0.6rem',
      'bottom-xs-ul': 'center bottom 0.5rem',
    },
    backgroundSize: {
      ...backgroundSize,
      'fit-xl-ul': '28rem',
      'fit-lg-ul': '23rem',
      'fit-md-ul': '17rem',
      'fit-sm-ul': '13rem',
      'fit-xs-ul': '11rem',
    },
    fontFamily: {
      ...fontFamily,
      'rustico': ['Rustico V2 Regular'],
      'futura': ['Futura Medium'],
    },
    fontSize: {
      ...fontSize,
      '7xl': '5rem',
    },
  }
}
