/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        goldDeep: "#8A6A0A", // dorado oscuro: para TEXTO sobre fondo claro (el gold normal casi no se lee)
        cream: "#F6F1E7",
        cafeBlack: "#0a0a0a",
        cafeBrown: "#14100c", // el "negro café" que antes estaba escrito a mano como #14100c
        afiA: "#F2B705",
        afiF: "#4C7A3D",
        afiI: "#6B4226",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
