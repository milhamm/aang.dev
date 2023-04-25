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
      animation: {
        kenBurns: "kenBurns 1s ease-in",
        notSoBoring: "notSoBoring 1.2s ease-out",
      },
      keyframes: {
        notSoBoring: {
          "0%": { opacity: 0, filter: "brightness(1) blur(20px)" },
          "10%": { opacity: 1, filter: "brightness(2) blur(10px)" },
          "100%": { opacity: 1, filter: "brightness(1) blur(0)" },
        },
        kenBurns: {
          "0%": {
            opacity: 0,
            clipPath: "inset(5%)",
            transform: "scale(111.11%)",
          },
          "100%": { opacity: 1, clipPath: "inset(0)", transform: "scale(1)" },
        },
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
