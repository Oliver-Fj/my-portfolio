// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5865F2',
          dark: '#4752C4',
        },
        background: {
          dark: '#0B0B2B',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(to bottom right, #0B0B2B, #1A1A4B)',
      },
      boxShadow: {
        'neon-green': '0 0 15px rgba(77, 255, 181, 0.5)',
        'neon-blue': '0 0 15px rgba(0, 166, 255, 0.5)',
      },
      textShadow: {
        'neon': '0 0 10px rgba(77, 255, 181, 0.5)',
        'sm': '0 0 2px rgba(255, 255, 255, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scroll': 'scroll 40s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-neon': {
          textShadow: '0 0 10px rgba(77, 255, 181, 0.5)',
        },
        '.text-shadow-sm': {
          textShadow: '0 0 2px rgba(255, 255, 255, 0.3)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}