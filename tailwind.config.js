const colors = require('tailwindcss/colors')

module.exports = {
    purge: {
      content: ['./src/**/*.js', './pages/**/*.js'],
    },
    plugins: [
      require('@tailwindcss/typography')({
        modifiers: [],
      }),
      require('@tailwindcss/forms')
    ],
    darkMode: 'class',
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
        typography: (theme) => ({  
          dark: {
            css: {
              color: theme('colors.gray.300'),
              '[class~="lead"]': {
                color: theme('colors.gray.400'),
              },
              blockquote: {
                color: theme('colors.gray.300'),
                borderLeftColor: theme('colors.gray.700'),
              },
              hr: {
                borderTopColor: theme('colors.gray.800'),
              },
              strong: {
                color: theme('colors.white'),
              },
              'figure figcaption': {
                color: theme('colors.gray.500'),
              },
              a: {
                color: theme('colors.blue.400'),
              },
              th: {
                color: theme('colors.white'),
              },
              'h1, h2, h3, h4': {
                color: theme('colors.white'),
              },
              code: {
                color: theme('colors.gray.300'),
              },
              'code:before': {
                color: theme('colors.gray.300'),
              },
              'code:after': {
                color: theme('colors.gray.300'),
              },
              'ol > li:before': {
                color: theme('colors.gray.400'),
              },
              'ul > li:before': {
                backgroundColor: theme('colors.gray.600'),
              },
            },    
          },
        }),
      },
    },

    variants: {
      backgroundColor: ['active', 'responsive', 'hover', 'dark'],
      backgroundOpacity: ['active', 'hover', 'responsive', 'dark'],
      borderColor: ['hover', 'focus', 'responsive', 'dark'],
      cursor: ['responsive', 'hover'],
      ringColor: ['hover', 'focus', 'responsive', 'dark'],
      typography: ['responsive', 'dark'],
      extend: {
        textOpacity: ['dark'],
      }
    },
}