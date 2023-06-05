/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        titillium :['Titillium Web', 'sans-serif'],
        sourceSans: ['Source Sans Pro',' sans-serif']
      },
      colors:{
        conduit: {
          green: '#5cb85c'
        }
      }
    },
  },
  plugins: [],
};
