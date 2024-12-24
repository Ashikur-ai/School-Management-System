/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeBlue: '#002147', // Add the custom primary color
      },
    },
  },
  plugins: [require('daisyui'),],
}