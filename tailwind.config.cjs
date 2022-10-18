/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'foodImg3' : "url('/image3.png')",
        'foodImg1' : "url('image1.jpg')",
      },
      colors: {
        'beige': '#E0B289',
      },
    },
  },
  plugins: [],
}
