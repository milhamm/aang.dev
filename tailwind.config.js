const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
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
        sans: ["Quicksand"],
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
        blueGray: colors.blueGray,
        amber: colors.amber,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
