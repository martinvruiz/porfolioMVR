/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./index.html`,
            `./**/*.js`,],
  theme: {
    extend: {
      fontFamily:{
        poppins: "Poppins, serif"
      },
    },
  },
  plugins: [],
}

