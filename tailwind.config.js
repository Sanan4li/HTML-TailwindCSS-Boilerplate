
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        bree: "Bree Serif",
        primary: "Asap",
      },
      colors: {
        secondary: "#373737",
        primary: "#F3F3F3",
        header: "#2D2C2C",
        button: "#464646",
      },
      fontSize: {
        heading: "22px",
        subheading: "18px",
      },
    },
  },
  plugins: [],
};