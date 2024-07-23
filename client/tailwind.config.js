/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        yellow: "#ffc107",
        red: "#df1d23",
        hoverColor: "#ffffffbf",
      },
      backgroundColor: {
        chocolate: "#310505",
        footerBg: "#F2EADE",
        productItemBg: "#f2eade",
        redBg: "#931518",
      },
    },
  },
  plugins: [],
};
