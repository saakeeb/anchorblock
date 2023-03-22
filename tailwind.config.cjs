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
        'header-text': '#323B4B',
        'paragraph-text': '#8A94A6',
        'warning-text': '#FF5630',
        'blue-badge': "#377DFF"
      },
    }
  },
  // plugins: [],
  plugins: [
    // plugin(function ({ addVariant }) {
    //   // addVariant('third', '&:nth-child(3)')
    // })
  ]
}
