/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      brand: {
        primary: '#111827',  // very dark gray
        accent: '#22D3EE',   // cyan
        highlight: '#9333EA',// violet
        background: '#0F172A',
        text: '#F9FAFB',
        bodyBg:'#ded6d1',
      }
    }
  },
},
  plugins: [],
}
