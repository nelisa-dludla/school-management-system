/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'customBlue': '#3E6680',
        'customSky' : '#4BB3FD'
      }
    },
  },
  plugins: [],
}