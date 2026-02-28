/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          green: '#22c55e',
          'green-light': '#dcfce7',
          teal: '#14b8a6',
          purple: '#8b5cf6',
        },
        neutral: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        dark: '#0f172a',
        light: '#f8fafc',
      },
      fontFamily: {
        sans: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in':      'fadeIn 0.7s ease-out forwards',
        'slide-up':     'slideUp 0.7s ease-out forwards',
        'slide-left':   'slideLeft 0.7s ease-out forwards',
        'slide-right':  'slideRight 0.7s ease-out forwards',
        'float':        'float 4s ease-in-out infinite',
        'marquee':      'marquee 30s linear infinite',
        'spin-slow':    'spin 8s linear infinite',
        'bounce-slow':  'bounce 3s ease-in-out infinite',
        'pulse-ring':   'pulseRing 2s ease-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseRing: {
          '0%':   { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
      boxShadow: {
        'card':       '0 4px 24px rgba(0,0,0,0.06)',
        'card-hover': '0 12px 40px rgba(37,99,235,0.15)',
        'primary':    '0 8px 24px rgba(37,99,235,0.3)',
        'blob':       '0 20px 60px rgba(37,99,235,0.2)',
      },
      backgroundImage: {
        'hero-radial':    'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(219,234,254,0.7), rgba(248,250,252,0))',
        'button-primary': 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
        'section-light':  'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        'card-gradient':  'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
        'cta-gradient':   'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)',
        'hero-blob':      'radial-gradient(circle at 70% 50%, rgba(219,234,254,0.8) 0%, transparent 60%)',
      },
    },
  },
  plugins: [],
}
