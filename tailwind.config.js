module.exports = {
    theme: {
      extend: {
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
          serif: [
            'Georgia',
            'Cambria',
            '"Times New Roman"',
            'Times',
            'serif',
          ],
          mono: [
            "Fira Code",
            'Menlo',
            'Monaco',
            'Consolas',
            '"Liberation Mono"',
            '"Courier New"',
            'monospace',
          ],
        },
        colors: {
          cyan: '#9cdbff',
        }
      },
      customForms: theme => ({
        default: {
          checkbox: {
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6 36 36" fill="none" stroke="#f8fff8" stroke-width="3.5" stroke-linecap="butt" stroke-linejoin="arcs"><polyline points="20 6 9 17 4 12"></polyline></svg>',
            '&:focus': {
              boxShadow: '0 0 0 3px rgba(48, 195, 38, 0.41)',
              borderColor: theme('colors.green.300'),
            }
          },
        },
      })
    },
    variants: {
      backgroundColor: ['active', 'responsive'],
      cursor: ['responsive', 'hover'],
    },
    plugins: [
      require('@tailwindcss/custom-forms'),
    ]
  }