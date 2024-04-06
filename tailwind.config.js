/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },

    extend: {
      colors:{
        primary: '#a21caf',
        secondary:'#be185d',
      },
      screens:{
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

