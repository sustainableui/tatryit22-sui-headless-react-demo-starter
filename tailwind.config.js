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
      'gray-hover': '#b7b7b7',
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
        '44': '11rem',
        '53': '13.3rem',
      },
      minWidth: {
        'sidebar': '512px',
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '7/12': '58.333333%',
        '3/4': '75%',
        'paragraph': '910px',
        'sm-paragraph': '460px',
        'xs-paragraph': '340px',
        'divider': '100px',
      },
      minHeight: {
        '20': '5rem',
      },
      fontFamily: {
        'rustico-regular': ['Rustico V2 Regular'],
        'futura-medium': ['Futura Medium'],
        'futura-bold': ['Futura Bold'],
      },
      borderRadius: {
        'gradient-box': '30px',
      },
      zIndex: {
        '41': '41',
      },
    },
  }
}
