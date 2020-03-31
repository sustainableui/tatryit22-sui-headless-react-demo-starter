const { variants } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    variants: {
      ...variants,
      fill: ['responsive', 'hover'],
    },
    screens: {
      'xs': { 'min': '1px', 'max': '639px' },
      'sm': { 'min': '640px', 'max': '767px' },
      'md': { 'min': '768px', 'max': '1023px' },
      'lg': { 'min': '1024px', 'max': '1279px' },
      'xl': { 'min': '1280px' },
    },
    colors: {
      transparent: 'rgba(0, 0, 0, 0)',
      black: '#000',
      white: '#fff',
      blue: '#2e66ff',
      'blue-hover': '#002AB9',
      green: '#2cebad',
      'green-hover': '#0AB97B',
      gray: '#e6e6e6',
      'gray-hover': '#969696',
    },
    fill: theme => ({
      'black': theme('colors.black'),
      'white': theme('colors.white'),
      'blue': theme('colors.blue'),
      'blue-hover': theme('colors.blue-hover'),
      'green': theme('colors.green'),
      'green-hover': theme('colors.green-hover'),
      'gray': theme('colors.gray'),
      'gray-hover': theme('colors.gray-hover'),
    }),
    extend: {
      boxShadow: {
        'default-sheer': '0 0 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
        'md-sheer': ' 0 0 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
        'lg-sheer': ' 0 0 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
        'xl-sheer': ' 0 0 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
        '2xl-sheer': '0 0 50px -12px rgba(0, 0, 0, .25)',
      },
      backgroundPosition: {
        'bottom-xl-ul': 'center bottom 1.5rem',
        'bottom-lg-ul': 'center bottom 1rem',
        'bottom-md-ul': 'center bottom 0.8rem',
        'bottom-sm-ul': 'center bottom 0.6rem',
        'bottom-xs-ul': 'center bottom 0.5rem',
        'top-screen': 'top 100vh',
      },
      backgroundSize: {
        'fit-xl-ul': '19rem',
        'fit-lg-ul': '15rem',
        'fit-md-ul': '11.5rem',
        'fit-sm-ul': '8.5rem',
        'fit-xs-ul': '7.2rem',
      },
      lineHeight: {
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '14': '3.5rem',
      },
      spacing: {
        '7': '1.75rem',
        '14': '3.5rem',
        '26': '6.5rem',
        '36': '9rem',
        '44': '11rem',
        '53': '13.3rem',
        '72': '18rem',
      },
      minWidth: {
        'sidebar': '512px',
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '7/12': '58.333333%',
        '3/4': '75%',
        'paragraph': '700px',
        'sm-paragraph': '460px',
        'xs-paragraph': '340px',
        'divider': '100px',
      },
      minHeight: {
        '20': '5rem',
      },
      maxHeight: {
        '24': '6rem',
      },
      fontFamily: {
        'rustico-regular': ['Rustico V2 Regular'],
        'futura-medium': ['Futura Medium'],
        'futura-bold': ['Futura Bold'],
      },
      zIndex: {
        '41': '41',
        '42': '42',
      },
      inset: {
        '1/2': '50%',
      },
    },
  }
}
