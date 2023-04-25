const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "dots-dark": `radial-gradient(#444444 1px,transparent 0)`,
        "dots-light": `radial-gradient(#CCCCCC 1px,transparent 0)`,
      },
      backgroundSize: {
        "20/20": "20px 20px",
      },
      fontFamily: {
        sans: ["var(--font-quicksand)", ...fontFamily.sans],
      },
      colors: {
        gray: {
          100: "#999999",
          200: "#888888",
          800: "#222222",
          900: "#111111",
        },
        orange: colors.orange,
        sky: colors.sky,
        cyan: colors.cyan,
        blueGray: colors.slate,
        amber: colors.amber,
      },
    },
  },
};
