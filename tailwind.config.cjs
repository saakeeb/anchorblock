/** @type {import('tailwindcss').Config} */

let plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'link-text': '#A7AFBC',
        'link-active': '#A7AFBC',
        'link-bg': '#F0F5FA',
      },
    }
  },
  // plugins: [],
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('third', '&:nth-child(3)')
    })
  ]
}
