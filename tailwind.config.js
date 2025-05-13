/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c7ff',
          300: '#66abff',
          400: '#338fff',
          500: '#3B82F6', // neon blue
          600: '#0065cc',
          700: '#004c99',
          800: '#003366',
          900: '#001933',
        },
        terminal: {
          base: '#1E1E1E',
          lighter: '#2D2D2D',
          text: '#F8F8F8',
          accent: '#3B82F6',
          success: '#10B981',
          error: '#EF4444',
          warning: '#F59E0B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'cursor-blink': 'cursor-blink 1.5s steps(2) infinite',
      },
      keyframes: {
        'cursor-blink': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};