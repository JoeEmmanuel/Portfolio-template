/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      fontFamily: {
        CeraCY: ['CeraCY', 'sans-serif'],
      },

    colors: {
       primary: '#FAFBFF',
       secondary: '#000000',
       black_99: '#00000099',
       black_cc: '#000000cc',
    },
    },
  },
  plugins: [],
}