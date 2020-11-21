const colors = require('tailwindcss/colors')

module.exports = {
    purge: {
      content: ['./src/**/*.js', './pages/**/*.js'],
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms')
    ],
    theme: {
      extend: {
        colors: {
          orange: colors.orange,
          lightblue: colors.lightBlue,
          cyan: colors.cyan,
        },
        height: {
          '14': '3.5rem'
        },
        screens: {
          'dark': {'raw': '(prefers-color-scheme: dark)'},
        },
        fontFamily: {
          sans: [
            'Inter',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            '"Noto Sans"',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"',
          ],
        },
      },
    },
    variants: {
      backgroundColor: ['active', 'responsive', 'hover'],
      backgroundOpacity: ['active', 'hover'],
      cursor: ['responsive', 'hover'],
    },
}