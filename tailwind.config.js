/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'green': {
          50: '#f0fdf4',
          900: '#14532d',
        },
        'gray': {
          200: '#f9fafb',
          900: '#111827',
        },
      },
      screens: {
        '3xl': '1680px',
      },
      backgroundImage: {
        'pattern': "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
      },
      borderRadius: {
        '5xl': '40px',
      }
    },
  },
  plugins: [],
}
