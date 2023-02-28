/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0098DA",
        secondary: "#FFBB38",
        blueBg: "#F6F9FC",
        grey: "#606163",
      },
      opacity: {
        7: ".07",
        34: ".34",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
