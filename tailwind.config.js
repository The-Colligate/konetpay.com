/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0098DA",
        secondary: "#FFBB38",
        blueBg: "#F6F9FC",
        grey: "#606163",
        dark: "#252525",
      },
      opacity: {
        7: ".07",
        34: ".34",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      screens: {
        smallLaptop: { max: "1200px" },
        // => @media (max-width: 1200px) { ... }

        largeTablet: { max: "1024px" },
        // => @media (max-width: 1024px) { ... }

        tablet: { max: "780px" },
        // => @media (max-width: 780px) { ... }

        smallTablet: { max: "600px" },
        // => @media (max-width: 600px) { ... }

        phone: { max: "500px" },
        // => @media (max-width: 500px) { ... }

        smallPhone: { max: "375px" },
        // => @media (max-width: 350px) { ... }
      },
    },
  },
  plugins: [],
};
