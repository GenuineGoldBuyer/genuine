module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  colors:{
    'black': '#010203'
  },
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      's':'320px',
      'xs':'384px',
      '2xs':'512px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  variants: {},
  plugins: [],
};