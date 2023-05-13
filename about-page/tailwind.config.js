/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...other configuration options
  content: ["./src/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'jeff-bg': "url('about-page/img/jeff.jpg')",
      },
    },
  },
  plugins: [],
}