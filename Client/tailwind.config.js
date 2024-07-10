/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        "deskview": "url('./assets/certificate_gamebg.png')",
        "phoneview": "url('./assets/certificate_phonebgg.png')",
      },
      screens: {
        '927px': '927px',
        '741px':'741px',
      },
    },
  },
  plugins: [],
};
