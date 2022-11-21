/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          light: '#201e25',
          dark: '#000',
          DEFAULT: '#33313b'
        },
        white: {
          DEFAULT: '#fff',
          light: '#ffffffb3'
        },
        grey: {
          dark: '#ffffff0d',
          light: '#ffffff80',
          DEFAULT: '#f9fafb'
        },
        warning: {
          DEFAULT: '#f9ab30'
        }
      }
    },
  },
  plugins: [],
}
