/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#050505',
        'bg-secondary': '#0a0a0a',
        'bg-tertiary': '#111111',
        'accent': '#00e5ff',
        'accent-dim': '#00b8d4',
        'accent-purple': '#b535f6',
        'text-primary': '#f0f0f0',
        'text-secondary': '#a0a0a0',
        'text-dim': '#555555',
        'border-color': '#222222',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'syne': ['Syne', 'sans-serif'],
        'mono': ['"IBM Plex Mono"', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'spin-slower': 'spin 12s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'text-shimmer': 'text-shimmer 4s ease-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}
