/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors:{
        'kuning': '#FFC928',
        'biru': '#364773',
        'biru-muda': '#E6F5FF',
      }
    },
  },
  plugins: [],
}

