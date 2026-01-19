import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Soft Rose & Cream - Elegant Immigration Law Theme
        primary: {
          50: '#fdf8f8',
          100: '#faeeed',
          200: '#f5dcd9',
          300: '#ecc4bf',
          400: '#dfa49c',
          500: '#cf867c',
          600: '#b86b60',
          700: '#9a574d',
          800: '#804a42',
          900: '#6b403a',
          DEFAULT: '#c4968f', // Dusty Rose - soft, elegant
        },
        secondary: {
          50: '#f7f8f7',
          100: '#eef0ee',
          200: '#dce1dc',
          300: '#c2cbc2',
          400: '#a1afa1',
          500: '#839583',
          600: '#6a7b6a',
          700: '#566356',
          800: '#475247',
          900: '#3c453c',
          DEFAULT: '#a1afa1', // Muted Sage - calm, trustworthy
        },
        accent: {
          50: '#fdfcfa',
          100: '#faf6f0',
          200: '#f3ebdd',
          300: '#e9dbc4',
          400: '#dcc5a3',
          500: '#ceae84',
          600: '#be9768',
          700: '#9f7a52',
          800: '#826446',
          900: '#6b533c',
          DEFAULT: '#d4b896', // Warm Gold/Taupe
        },
        neutral: {
          50: '#fdfcfa',  // Warm cream background
          100: '#faf8f5',
          200: '#f5f2ee',
          300: '#ebe7e2',
          400: '#d9d4cd',
          500: '#b5aea5',
          600: '#857d74',  // Warm gray for text
          700: '#5c564f',
          800: '#3d3935',
          900: '#292725',
        },
      },
      fontFamily: {
        sans: ['var(--font-lato)', 'Lato', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        // Mobile-first typography scale
        'display-mobile': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1-mobile': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2-mobile': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3-mobile': ['1.25rem', { lineHeight: '1.4' }],
        'body-mobile': ['1rem', { lineHeight: '1.6' }],
        // Desktop typography scale
        'display-desktop': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1-desktop': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2-desktop': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3-desktop': ['1.875rem', { lineHeight: '1.4' }],
        'body-desktop': ['1.125rem', { lineHeight: '1.6' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'pathway': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
