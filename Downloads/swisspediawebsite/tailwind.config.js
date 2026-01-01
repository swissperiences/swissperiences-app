/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        primary: {
          dark: '#2C2F3B',      // PANTONE 532 C - Official brand navy
          navy: '#1E3A5F',      // Navy médio
          red: '#CE1126',       // PANTONE 186 C - Official brand red (use sparingly)
          accent: '#A6192E',    // PANTONE 187 C - Deeper red for subtle accents
          gray: '#D9D9D6',      // PANTONE Cool Gray 1 C
        },
        neutral: {
          50: '#FAFAFA',
          100: '#FFFFFF',
          200: '#F5F5F5',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
        red: {
          50: '#FEE5E9',
          100: '#FCCCD3',
          200: '#F999A7',
          300: '#F6667B',
          400: '#F2334F',
          500: '#CE1126',      // PANTONE 186 C - Brand red
          600: '#A6192E',      // PANTONE 187 C - Deeper red
          700: '#7D1322',
          800: '#540D17',
          900: '#2B070C',
        },
        navy: {
          50: '#E8EDF5',
          100: '#D1DBEB',
          200: '#A3B7D7',
          300: '#7593C3',
          400: '#476FAF',
          500: '#1E3A5F',      // Swiss Navy
          600: '#0A1628',      // Deep Navy
          700: '#081120',
          800: '#060D18',
          900: '#040810',
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
        '3xl': ['2rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.5rem', { lineHeight: '2.75rem' }],
        '5xl': ['3rem', { lineHeight: '3.25rem' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(10, 22, 40, 0.15)',
        'glow-lg': '0 0 40px rgba(10, 22, 40, 0.2)',
        'glow-red': '0 0 30px rgba(206, 17, 38, 0.15)',
        'glow-navy': '0 0 40px rgba(30, 58, 95, 0.3)',
        'luxury': '0 20px 60px -15px rgba(10, 22, 40, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-subtle': 'linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(28, 31, 42, 0.1)' },
          '100%': { boxShadow: '0 0 40px rgba(28, 31, 42, 0.15)' },
        },
      },
    },
  },
  plugins: [],
};
