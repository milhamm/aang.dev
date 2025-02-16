/* eslint-disable @typescript-eslint/no-require-imports */

const plugin = require('tailwindcss/plugin')
const flattenColorPalleteImport = require('tailwindcss/lib/util/flattenColorPalette')

/**
 * Gets the underlying default import of a module.
 *
 * This is used to handle internal imoprts from Tailwind, since Tailwind Play
 * handles these imports differently.
 *
 * @template T
 * @param {T | { __esModule: unknown, default: T }} mod The module
 * @returns {T} The bare export
 */
// eslint-disable-next-line no-underscore-dangle
const importDefault = (mod) => (mod && mod.__esModule ? mod.default : mod)

/**
 * Converts a color value or function to a color value
 *
 * @param {string | Function} maybeFunction - The color value or function
 * @returns {string} - The color value
 */
const toColorValue = (maybeFunction) =>
  typeof maybeFunction === 'function' ? maybeFunction({}) : maybeFunction

const flattenColorPallete = importDefault(flattenColorPalleteImport)

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
