/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#ec4899',
        accent: '#14b8a6'
      },
      animation: {
        'blob': 'blob 7s infinite',
        'float': 'float 3s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      },
      backgroundSize: {
        '300%': '300%'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        softwareTheme: {
          'primary': '#6366f1',
          'primary-content': '#ffffff',
          'secondary': '#ec4899',
          'secondary-content': '#ffffff',
          'accent': '#14b8a6',
          'accent-content': '#ffffff',
          'neutral': '#374151',
          'neutral-content': '#d1d5db',
          'base-100': '#ffffff',
          'base-200': '#f3f4f6',
          'base-300': '#e5e7eb',
          'base-content': '#1f2937',
          'info': '#3b82f6',
          'success': '#22c55e',
          'warning': '#f59e0b',
          'error': '#ef4444'
        }
      }
    ],
    darkTheme: 'softwareTheme'
  }
}