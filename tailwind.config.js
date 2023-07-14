/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'white1': '#eeeefd',
      'primary': '#5352ed',
      'primary1': '#6463ef',
      'black': '#000000',
    },
  },
  plugins: [],
}

