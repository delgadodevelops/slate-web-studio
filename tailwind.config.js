export default {
  darkMode: false, // <-- disable dark mode entirely
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',         // blue-600
        'primary-hover': '#1d4ed8', // blue-700
        accent: '#60a5fa',          // blue-400
        'soft-bg': '#f0f9ff',       // blue-50
      },
      keyframes: {
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-down': 'fade-down 0.6s ease-out',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
