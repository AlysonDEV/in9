/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'woman-pointing': "url('./assets/mulher-apontando.webp')"
      },
      colors: {
        primary: '#3c2946',
        secondary: {
          '100': '#f38385',
          '500': '#eb4347',
          '800': '#ef343a'
        }
      }
    },
  },
  plugins: [],
}
