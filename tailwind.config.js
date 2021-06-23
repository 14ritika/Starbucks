module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#d4e9e2', //light green
      'secondary': '#008248', //med green
      'dark': '#1e3932', // dark green
      'cool':'#f1f8f6', //cool green
      'cream':'#f3f1e7', // cream
     }),
     colors: {
      primary: '#d4e9e2', //light green
      'secondary': '#008248', //med green
      'dark': '#1e3932', // dark green
      'cool':'#f1f8f6', //cool green
      'cream':'#f3f1e7', // cream
    },
      backgroundImage: theme => ({
        'hero-back': "url('https://www.starbucks.com/weblx/images/rewards/hero/xl-hero-desktop_2021.png')",
        'hero-mobile':"url('https://www.starbucks.com/weblx/images/rewards/hero/hero-mobile_2021.jpg')"
       })
    },
  },
  variants: {
    extend: {
      
    }
  },
  plugins: [],
}
