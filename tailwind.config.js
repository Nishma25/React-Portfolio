/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'quiz-up': "url('./assets/quizUp.png')", // Path to your image
        'sdbms': "url('./assets/sdbms.png')",
        'oops': "url('./assets/oops.png')"
      },
    },
  },
  plugins: [],
}