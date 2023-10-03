/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/shared/**/*.{js,ts,jsx,tsx}',

    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
    },
    boxShadow: {
      item: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      productCardShadow: 'rgba(0, 0, 0, 0.10) 0px 5px 15px',
      productCardShadowTop: 'rgba(0, 0, 0, 0.10)  0px 10px 10px 0px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontSize: {
      'display-xs': ['1.5rem', { lineHeight: '2rem' }],
      'display-sm': ['1.875rem', { lineHeight: '2.375rem' }],
      'display-md': ['2.25rem', { lineHeight: '2.75rem' }],
      'display-lg': [
        '3rem',
        { lineHeight: '3.75rem' },
        { letterSpacing: 'tight' },
      ],
      'display-xl': [
        '3.75rem',
        { lineHeight: '4.625rem' },
        { letterSpacing: 'tight' },
      ],
      'display-2xl': [
        '4.5rem',
        { lineHeight: '5.625rem' },
        { letterSpacing: 'tight' },
      ],
      'text-xs': ['0.75rem', { lineHeight: '1.125rem' }],
      'text-sm': ['0.875rem', { lineHeight: '1.25rem' }],
      'text-md': ['1rem', { lineHeight: '1.5rem' }],
      'text-lg': ['1.125rem', { lineHeight: '1.75rem' }],
      'text-xl': ['1.25rem', { lineHeight: '1.85rem' }],
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      semibold: '700',
      bold: '900',
    },
    padding: {
      px: '1px',
      0: '0px',
      2: '2px',
      4: '4px',
      8: '8px',
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      32: '32px',
      40: '40px',
      48: '48px',
      54: '54px',
      58: '58px',
      64: '64px',
      80: '80px',
      96: '96px',
      112: '112px',
      128: '128px',
    },
    margin: {
      px: '1px',
      0: '0px',
      2: '2px',
      4: '4px',
      8: '8px',
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      32: '32px',
      40: '40px',
      48: '48px',
      54: '54px',
      58: '58px',
      64: '64px',
      80: '80px',
      96: '96px',
      112: '112px',
      128: '128px',
      auto: 'auto',
    },
    colors: {
      green: {
        100: '#E6F9F4',
        400: '#198754',
        500: '#01B58B',
        600: '#00A19E',
        700: '#00718D',
      },
      red: {
        100: '#FFEBEB',
        400: '#F86162',
        500: '#F44849',
        600: '#D85D3C',
      },
      yellow: {
        100: '#FFF9EB',
        400: '#FFC95F',
        500: '#fed700',
        600: '#FFC95F',
      },
      blue: {
        100: '#EBF1FF',
        400: '#6090FF',
        500: '#0062bd',
        600: '#3B4ADF',
        700: '#4330BF',
      },
      dark: {
        300: '#333e48',
        500: '#262626',
        400: '#4C4C4C',
        100: '#D4D4D4',
      },
      gray: {
        100: '#F8F9FC',
        400: '#768b9e',
        300: '#F5F5F5',
        500: '#E5E8EF',
      },
      white: '#ffffff',
    },
    keyframes: {
      slideIn: {
        '0%': {
          transform: 'translateX(100%)',
          opacity: 1,
        },
        '50%': {
          transform: 'translateX(100%)',
        },
        '100%': {
          transform: 'translateX(0)',
          opacity: 1,
        },
      },
      slideOut: {
        '0%': {
          transform: 'translateX(0)',
        },
        '50%': {
          transform: 'translateX(0)',
        },
        '100%': {
          transform: 'translateX(100%)',
        },
      },
      slideLeft: {
        '0%': {
          transform: 'translateX(100%)',
        },
        '10%': {
          transform: 'translateX(0)',
        },
        '99%': {
          opacity: 1,
        },
        '100%': {
          opacity: 0,
        },
      },
      overlayShow: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      contentShow: {
        from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
        to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
      },
    },
    animation: {
      overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      slideIn: 'slideIn 2s cubic-bezier(0.16, 1, 0.3, 1)',
      slideOut: 'slideOut 2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      slideLeft: 'slideLeft 5s linear forwards',
    },
  },
  plugins: [],
};
