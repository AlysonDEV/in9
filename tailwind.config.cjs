/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'woman-pointing': "url('src/assets/mulher-apontando.webp')"
      }
    },
  },
  plugins: [],
}
