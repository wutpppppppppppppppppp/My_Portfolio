/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Averia Sans Libre', 'sans-serif'], // Example custom font
        serif: ['Averia Serif Libre', 'serif'], // Example custom font
      },
    },
    colors: {
      transparent:'transparent',
      black:'black',
      white: 'white',
      dark: '#272829',
      gray: '#61677A',
      ash: '#D8D9DA',
      offwhite: '#FFF6E0',
    },
  },
  plugins: [],
}

