/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specifies the files Tailwind should scan for class names
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      // Custom font families for the project
      fontFamily: {
        fonts: ['"Post No Bills Colombo ExtraBold"', 'sans-serif'], // Custom font for "fonts" key
        fam: ['"Post No Bills Jaffna ExtraBold"', 'sans-serif'],   // Custom font for "fam" key
      },

      // Custom background images
      backgroundImage: {
        playbg: 'url(./src/assets/playBackground.png)',
        'signin-bg': "url('./src/assets/homePage_desktopBg.png')",
        'flappybird-playbg': "url('./src/assets/playscreen_bg.jpg')",
        'flappybird-mobbg': "url('./src/assets/playscreen_mobile-bg.png')",
        pipe: "url('./src/assets/playscreen_obstacle.png')",
        flappybird: "url('./src/assets/playscreen_bird.png')",
        flappybirdbigeye: "url('./src/assets/playscreen_bird_big_eye.png')",
        'flappybird-desk': "url('./src/assets/homePage_desktopBg.png')",
        'flappybird-mob': "url('./src/assets/homePage_mobileBg.png')",
        "background-stuff" : "url('./src/assets/playBackground.png')",
      },

      // Custom screen sizes for responsive design
      screens: {
        'max-w-600px': { max: '600px' }, // Maximum width of 600px
        'min-w-600px': { min: '600px' }, // Minimum width of 600px
        '927px': '927px', // Custom screen size at 927px
        '741px': '741px', // Custom screen size at 741px
        'custom-xs': '400px', // Custom screen size at 400px
      },

      // Custom border-radius values
      borderRadius: {
        custom: '50px', // Custom border-radius of 50px
        'custom-tl': '15px', // Custom border-radius for top-left corner
        'custom-br-tr': '50px', // Custom border-radius for bottom-right and top-right corners
        'custom-bl': '50px', // Custom border-radius for bottom-left corner
      },

      // Custom font sizes
      fontSize: {
        'custom-large': '57px', // Custom large font size
        'custom-30px': '30px', // Custom font size of 30px
        'custom-27px': '27px', // Custom font size of 27px
        'custom-20px': '20px', // Custom font size of 20px
        'custom-22px': '22px', // Custom font size of 22px
        'custom-25px': '25px', // Custom font size of 25px
      },

      // Custom spacing values
      spacing: {
        16: '65px', // Custom spacing of 65px
        'custom-width': '230px', // Custom width of 230px
        'custom-margin-top': '100px', // Custom margin-top of 100px
        '-45px': '-45px', // Custom negative spacing of -45px
        '-110px': '-110px', // Custom negative spacing of -110px
        '50px': '50px', // Custom spacing of 50px
        '200px': '200px', // Custom spacing of 200px
        '150px': '150px', // Custom spacing of 150px
        '110px': '110px', // Custom spacing of 110px
        '80px': '80px', // Custom spacing of 80px
        '-90px': '-90px', // Custom negative spacing of -90px
        '180px': '180px', // Custom spacing of 180px
        '130px': '130px', // Custom spacing of 130px
        '30px': '30px', // Custom spacing of 30px
        '25px': '25px', // Custom spacing of 25px
        '40px': '40px', // Custom spacing of 40px
        '90px': '90px', // Custom spacing of 90px
        '100px': '100px', // Custom spacing of 100px
      },

      // Custom letter spacing
      letterSpacing: {
        'custom-spacing': '1px', // Custom letter spacing of 1px
      },

      // Custom height values
      height: {
        '95px': '95px', // Custom height of 95px
      },
    },

    // No additional plugins used
    plugins: [],
  },
};
