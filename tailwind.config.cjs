/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Poppins, monospace',
    },
    extend: {
      colors: {
        'brand-100': '#ee6a71',
        'brand-200': '#eb515a',
        'brand-300': '#e93842',
        'brand-400': '#e61f2b',
        'primary-100': '#eef2ff',
        'primary-200': '#c7d2fe',
        'primary-300': '#a5b4fc',
        'primary-400': '#818cf8',
        'primary-500': '#6366f1',
        'primary-600': '#4f46e5',
        'primary-700': '#4338ca',
        'primary-800': '#3730a3',
        'primary-900': '#3730a3',
        'primary-950': '#1e1b4b',

        'dark-primary-200': '#2f2d50',
        'dark-primary-300': '#18163c',
        'dark-primary-700': '#0f0e26',
        'dark-primary-800': '#0c0b1e',
        'dark-primary-900': '#090816',
        secondary: '#1d1d1b',
      },
      boxShadow: {
        'btn-normal':
          '0px 2px 3px #6366f1, 0px 1px 1px #6366f1, 0px 1px 2px #6366f1',
        'btn-active': '#6366f1 0px 1px 0px',
        flightCart:
          'rgba(0, 0, 0, 0.16) 0px 5px 12px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;',
        darkNavShadow: 'rgba(53, 50, 93,0.4) 0px 2px 7px',
      },
    },
  },

  safelist: [
    ...[...Array(100).keys()].flatMap((i) => [
      `h-[${i}px]`,
      `mx-[${i}px]`,
      `my-[${i}px]`,
    ]),
  ],
};
