module.exports = {
    purge: ['./components/**/*.js', './pages/**/*.js'],
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms')
    ],
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
    },
    variants: {
      backgroundColor: ['active', 'responsive'],
      cursor: ['responsive', 'hover'],
    },
  }