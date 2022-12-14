/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mont': ['Montserrat', 'Raleway', 'sans-serif']
      },
      animation: {
        opacity: 'opacity 500ms ease-in-out 5s'
      },
      keyframes: {
        opacity: {
          'from': { opacity: '0' },
          'to': { opacity: '100' },
        }
      },
      colors: {
        'green-app': '#13b453'
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'base', // only generate global styles
    })
  ],
}