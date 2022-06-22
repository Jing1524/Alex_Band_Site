const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxs: "512px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        // sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
        metropolis: ["Metropolis", "sans-serif"],
        jost: ["Jost", "sans-serif"],
        Cinzel: ["Cinzel Decorative", "cursive"],
        Aleo: ["Aleo", "serif"],
        vadodara: ["Hind Vadodara", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      screens: {
        "3xl": "1792px",
        "4xl": "2048px",
        "5xl": "2304px",
        "6xl": "2560px",
        "7xl": "2816px",
        "8xl": "3072px",
        "9xl": "3328px",
        "10xl": "3584px",
        "11xl": "3840px",
      },
    },
  },
  plugins: [],
};
