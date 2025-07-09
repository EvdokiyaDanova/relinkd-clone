/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerText: '#141f39',
        siteText: '#333',
        secondaryText: '#666',
        borderGrey: '#e1e4e7',
        relinkd: {
          green: "#00c2a4", // основен зелен
          blue: "#2B2B6F", // основен тъмносин
          accent: "#00C6B7", // акцент (лого, бутон)
          gray: "#102027", // основен текст
          blueMain: "#3822d4",
        },
      },
      fontFamily: {
        sans: [
          'Roboto',
          'system-ui',
          'Avenir',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        'h1': ['42px', { lineHeight: '53px', fontWeight: '700' }],
        'h2': ['34px', { lineHeight: '45px', fontWeight: '700' }],
        'body': ['18px', { lineHeight: '24px' }],
        'small': ['13px', { lineHeight: '16px' }],
        'sectionTitle': ['20px', { lineHeight: '24px', fontWeight: '700' }],
      },
      lineHeight: {
        'h1': '53px',
        'h2': '45px',
        'body': '24px',
        'small': '16px',
        'sectionTitle': '24px',
      },
      screens: {
        'md': '991px',
        'max-md': {'max': '991px'},
      },
    },
  },
  plugins: [],
}

