const plugin = require('tailwindcss/plugin')
const flattenColorPallete = require('tailwindcss/lib/util/flattenColorPalette').default
const toColorValue = require('tailwindcss/lib/util/toColorValue').default

const dots = plugin(
  function ({ addUtilities, matchUtilities, theme }) {
    addUtilities({
      '.dots': {
        backgroundImage: `radial-gradient(var(--tw-dots-color) 1px, transparent 0)`,
        backgroundSize: `var(--tw-dots-size)`,
      },
    })

    matchUtilities(
      {
        dots(value) {
          return {
            '--tw-dots-color': toColorValue(value),
          }
        },
      },
      {
        values: flattenColorPallete(theme('colors')),
        type: ['color'],
      }
    )

    matchUtilities(
      {
        dots(value) {
          return {
            '--tw-dots-size': value,
          }
        },
      },
      {
        values: theme('dotsSize'),
      }
    )
  },
  {
    theme: {
      dotsSize: {
        DEFAULT: '20px 20px',
        base: '20px 20px',
        lg: '40px 40px',
      },
    },
  }
)

module.exports = dots
