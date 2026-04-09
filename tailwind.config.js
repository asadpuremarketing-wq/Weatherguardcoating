/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        charcoal: {
          DEFAULT: '#111113',
          light: '#1E1E21',
          muted: '#2D2D31',
          soft: '#3C3C41',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#D9BC74',
          dark: '#A8872E',
          subtle: '#C9A84C1A',
        },
        surface: {
          DEFAULT: '#FAFAFA',
          card: '#FFFFFF',
          dark: '#F4F4F5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.05', fontWeight: '800', letterSpacing: '-0.02em' }],
        'display-sm': ['2.75rem', { lineHeight: '1.08', fontWeight: '800', letterSpacing: '-0.015em' }],
        'h1': ['2.5rem', { lineHeight: '1.15', fontWeight: '800', letterSpacing: '-0.01em' }],
        'h2': ['2rem', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.01em' }],
        'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '700' }],
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
      },
      boxShadow: {
        'xs':       '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card':     '0 2px 12px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.04)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.14), 0 4px 12px rgba(0,0,0,0.06)',
        'lift':     '0 8px 30px rgba(0,0,0,0.12)',
        'dark':     '0 4px 32px rgba(0,0,0,0.45)',
        'glow-gold': '0 0 24px rgba(201,168,76,0.25)',
        'btn':      '0 4px 14px rgba(201,168,76,0.35)',
        'btn-hover': '0 6px 20px rgba(201,168,76,0.45)',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.55s ease-out forwards',
        'fade-in': 'fadeIn 0.45s ease-out forwards',
        'pulse-soft': 'pulseSoft 2.5s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.85', transform: 'scale(1.04)' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4B46A 0%, #C9A84C 40%, #A8872E 100%)',
        'dark-gradient': 'linear-gradient(135deg, #1a1a1d 0%, #111113 100%)',
        'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
      },
    },
  },
  plugins: [],
};
