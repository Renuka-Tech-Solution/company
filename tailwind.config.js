/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "Open-Sans": ['Open Sans', 'sans-serif'],
        "Glory":['Glory', 'sans-serif']
      },
      backgroundImage: {
        'companyBg': "url('~@/assets/video/Iconic Online Marketing Background.mp4')",
        'serviceBg': "url('~@/assets/image/serviceBg.jpg')",
        'interviewBg': "url('~@/assets/image/job-interview.jpg')",
        'webDevelopment': "url('~@/assets/image/web-programming.png')",
        'apiDevelopment': "url('~@/assets/image/api.png')",
        'laravelUpgrades': "url('~@/assets/image/upgrade.png')",
        'codeOptimization': "url('~@/assets/image/source-code.png')",
        'verifyImg': "url('~@/assets/image/verify.png')",
        'supportImg': "url('~@/assets/image/customer-service.png')",
        'skillImg': "url('~@/assets/image/skill.png')",
        'choiceImg': "url('~@/assets/image/choice.png')",
        'facebook': "url('~@/assets/image/facebook.png')",
        'instagram': "url('~@/assets/image/instagram.png')",
        'twitter': "url('~@/assets/image/twitter.png')",
        'linkedin': "url('~@/assets/image/linkedin.png')",
        'user1': "url('~@/assets/image/user-1.jpg')",
        'user2': "url('~@/assets/image/user-2.jpg')",
        'user3': "url('~@/assets/image/user-3.jpg')",
        'ratingStar': "url('~@/assets/image/star.png')",
        'vision': "url('~@/assets/image/Vision.png')",
        'mission': "url('~@/assets/image/Mission.png')",
        'values': "url('~@/assets/image/Values.png')",

        // Tution Mate
        'tution01': "url('~@/assets/portfolio/tutionmate/01.jpeg')",
        'tution02': "url('~@/assets/portfolio/tutionmate/02.jpeg')",
        'tution03': "url('~@/assets/portfolio/tutionmate/03.jpeg')",
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out', // Define the animation
        'txtfade-in': 'fadeIn 2s ease-in-out',
      },
     
    },
    // safelist: ['animate-fade-in_1s_ease-in-out'], // Add the animation class to the safelist
  },
  plugins: [
    // require('@tailwindcss/animation'), // Include the animation plugin to handle the animation classes.
  ],
}

