/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens:{
        'max-w-600px':{'max':'600px'},
        'min-w-600px':{'min':'600px'},
      },
      fontFamily: {
        'fonts': ['"Post No Bills Colombo ExtraBold"','sans-serif'],
        'fam':['"Post No Bills Jaffna ExtraBold"','sans-serif'],
      }
    },
  },
  plugins: [],
};
