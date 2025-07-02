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
        primary: '#2563EB',  // use as bg-brand-primary
        secondary: '#64748B',
        accent: '#10B981',
        background: '#F9FAFB',
        dark: '#1F2937',
      }
    }
  },
},
  plugins: [],
}
