/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00C6FF',
        'primary-dark': '#0099CC',
        'dark-bg': '#0A0E1A',
        'dark-card': '#131827',
        'dark-border': '#1F2937',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'spin-slow': 'spin 1.5s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 198, 255, 0.5), 0 0 40px rgba(0, 198, 255, 0.3)',
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(0, 198, 255, 0.8), 0 0 60px rgba(0, 198, 255, 0.5)',
          },
        },
        'slide-up': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
