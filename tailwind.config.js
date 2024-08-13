/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      xs: "420px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    extend: {
      fontFamily: {
        // primaryFont: ["Inter", "sans-serif"],
        // secondaryFont: ["Jost", "sans-serif"],
      },
      colors: {
        // primary: "#16666A",
        // secondary: "#015ABD",
        // heading: "#14133b",
        // text: "#77838F",
        // white: "#fff",
        // borderC: "#ddd",
        // myAddedC: "#262f4e",
      },
    },
  },
  plugins: [],
};