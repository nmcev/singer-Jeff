/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...other configuration options
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'jeff-bg': "url('about-page/img/jeff.jpg')",
      },
    },
  },
  plugins: [],
}