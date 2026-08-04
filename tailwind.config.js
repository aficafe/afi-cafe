/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        cafeBlack: "#0a0a0a",
        cream: "#F6F1E7",
        afiA: "#DAA520",
        afiF: "#6B8E23",
        afiI: "#9E4235",
      },
      fontFamily: {
        display: ["'Poppins'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
