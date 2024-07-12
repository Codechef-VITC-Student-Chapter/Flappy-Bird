/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        "flappybird-playbg": "url('./src/assets/playscreen_bg.jpg')",
        "flappybird-mobbg": "url('./src/assets/playscreen_mobile-bg.png')",
        pipe: "url('./src/assets/playscreen_obstacle.png')",
        flappybird: "url('./src/assets/playscreen_bird.png')",
        flappybirdbigeye: "url('./src/assets/playscreen_bird_big_eye.png')",
      },
    },
  },
  plugins: [],
};
