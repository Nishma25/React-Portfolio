/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'quiz-up': "url('./assets/quizUp.png')", // Path to your image
        'sdbms': "url('./assets/sdbms.png')",
        'oops': "url('./assets/oops.png')"
      },
      colors: {
        // Light theme
        background: {
          DEFAULT: '#f3f4f6', // very light gray
          dark: '#0a192f',   // deep navy blue for dark mode
        },
        card: {
          DEFAULT: '#f8fafc',
          dark: '#1e293b', // slate blue-gray
        },
        text: {
          DEFAULT: '#1a202c', // dark gray
          dark: '#f1f5f9',    // almost white
        },
        'text-secondary': {
          DEFAULT: '#475569', // muted gray
          dark: '#94a3b8',   // muted blue-gray
        },
        accent: {
          DEFAULT: '#00b4d8', // blue
          green: '#00ff9d',   // green
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'Segoe UI', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}