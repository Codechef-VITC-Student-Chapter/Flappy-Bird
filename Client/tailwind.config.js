/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        flappybird: "url('../src/assets/playscreen_bird.png')",
        flappybirdbigeye: "url('../src/assets/playscreen_bird_big_eye.png')",
        'flappybird-desk': "url('./assets/homePage_desktopBg.png')",
        'flappybird-mob': "url('./assets/homePage_mobileBg.png')",
        deskview: "url('./assets/certificate_gamebg.png')",
        phoneview: "url('./assets/certificate_phonebgg.png')",
      },
      screens: {
        '927px': '927px',
        '741px': '741px',
      },
      borderRadius: {
        custom: '50px',
        'custom-tl': '15px',
        'custom-br-tr': '50px',
        'custom-bl': '50px',
      },

      fontSize: {
        'custom-large': '57px',
        'custom-30px': '30px',
        'custom-27px': '27px',
        'custom-20px': '20px',
        'custom-22px': '22px',
        'custom-25px': '25px',
      },

      spacing: {
        16: '65px',
        'custom-width': '230px',
        'custom-margin-top': '100px',
        '-45px': '-45px',
        '-110px': '-110px',
        '50px': '50px',
        '200px': '200px',
        '150px': '150px',
        '110px': '110px',
        '80px': '80px',
        '-90px': '-90px',
        '180px': '180px',
        '130px': '130px',
        '30px': '30px',
        '25px': '25px',
        '40px': '40px',
        '90px': '90px',
        '100px': '100px',
      },

      letterSpacing: {
        'custom-spacing': '1px',
      },
      height: {
        '95px': '95px',
      },
    },
    plugins: [],
  },
};
