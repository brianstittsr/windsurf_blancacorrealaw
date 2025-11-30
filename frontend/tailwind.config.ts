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
        // Primary colors from "Pathways to Belonging" theme
        primary: {
          50: '#fef5f1',
          100: '#fde8df',
          200: '#fbcfbe',
          300: '#f7ab92',
          400: '#f27d64',
          500: '#e85a3f',
          600: '#d54028',
          700: '#b3301f',
          800: '#942b1e',
          900: '#7b281e',
          DEFAULT: '#d54028', // Terracotta
        },
        secondary: {
          50: '#f0f9f9',
          100: '#dbf0f0',
          200: '#bae1e2',
          300: '#8bcbce',
          400: '#55adb3',
          500: '#3a9199',
          600: '#327581',
          700: '#2e5f6a',
          800: '#2c4f58',
          900: '#28434b',
          DEFAULT: '#2e5f6a', // Deep Teal
        },
        accent: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          DEFAULT: '#facc15', // Sunrise Yellow
        },
        neutral: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        serif: ['Source Serif Pro', 'Georgia', 'serif'],
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
