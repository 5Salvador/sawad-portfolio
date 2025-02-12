/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0070f3',
        'dark': '#172a45',
        'light': '#f8f9fa',
        'gray': {
          '100': '#f8f9fa',
          '200': '#e9ecef',
          '300': '#dee2e6',
          '400': '#ced4da',
          '500': '#adb5bd',
          '600': '#868e96',
          '700': '#565a62',
          '800': '#343a40',
          '900': '#212121',
        },
        'mine': '#b6b4bd',
        'darkLight': '#998f8f',
      },
    },
  },
  plugins: [],
}