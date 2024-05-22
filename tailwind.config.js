/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        basis: "#c49f64",
        kedua: "#f0d6ad",
        ketiga: "#f5e9d5",
        keempat: "#f2ede6",
      },
      screens: {
        "2xl": "1320px",
      },
      backgroundImage: {
        hero: "url('/src/img/bm.JPG')",
      },
    },
  },
  plugins: [],
};
