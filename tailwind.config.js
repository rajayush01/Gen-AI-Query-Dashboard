/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        darkBg: '#0a0a0a', // Deep black background
        darkCard: '#1a1a1a', // Slightly lighter black for cards
        darkText: '#e5e7eb', // Light gray text
        accent: '#22c55e', // Neon green accent
        chartLine: '#6366f1', // Indigo for line charts
        chartBar: '#14b8a6', // Teal for bar charts
        glowGreen: '#16a34a', // Glow effect
        hoverDark: '#27272a', // Slightly lighter hover
      },
      boxShadow: {
        neon: '0 0 10px rgba(34, 197, 94, 0.9)', // Neon glow for buttons
      },
      animation: {
        bounceSlow: 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};