/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "flappybird-desk": "url('./assets/homePage_desktopBg.png')",
        "flappybird-mob": "url('./assets/homePage_mobileBg.png')",
      },
    },
  },
  plugins: [],
};
