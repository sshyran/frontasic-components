const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './frontastic/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: ['md:grid-cols-1', 'md:grid-cols-2', 'md:grid-cols-3', 'md:grid-cols-4'],
  theme: {
    extend: {
      gridTemplateColumns: {
        '1-340': '1fr 340px',
      },
      colors: {
        orange: colors.orange,
        primary: {
          100: '#666e82',
          200: '#515971',
          300: '#3b455f',
          400: '#25304D',
          500: '#192038',
          600: '#1e263e',
          700: '#1a2236',
          800: '#161d2e',
          900: '#131827',
        },
        accent: {
          100: '#dd789c',
          200: '#d8658e',
          300: '#d35180',
          400: '#CE3E72',
          500: '#B22C5D',
          600: '#A5325B',
          700: '#902b50',
          800: '#7c2544',
          900: '#671f39',
        },
        secondary: {
          100: '#E6FFFA',
          200: '#B2F5EA',
          300: '#81E6D9',
          400: '#4FD1C5',
          500: '#38B2AC',
          600: '#319795',
          700: '#2C7A7B',
          800: '#285E61',
          900: '#234E52',
        },
        neutral: {
          100: '#F7FAFC',
          200: '#EDF2F7',
          300: '#E2E8F0',
          400: '#CBD5E0',
          500: '#A0AEC0',
          600: '#718096',
          700: '#4A5568',
          800: '#2D3748',
          900: '#1A202C',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
};
