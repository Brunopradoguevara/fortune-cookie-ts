/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
     'roboto':['Roboto'],
     'caveat': ['Caveat', 'cursive'],
    },
    extend: {
      textShadow: {
        'custom': '2px 2px 4px red'
      },
    },
  },
  plugins: [],
}