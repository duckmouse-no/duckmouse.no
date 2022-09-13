module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    maxWidth: {
      '1/2': '50%',
      '1/3': '30%',
    },
    minHeight: {
      '1/2': '20vh',
    },
    extend: {
      screens: {
        tall: { raw: '(min-height: 600px)' },
      },
      colors: {
        btnA: '#B3D1F0',
        btnI: '#C2C7CB',
      },
      dropShadow: {
        btnA: '4px 4px 0px #9CBAD9',
        btnI: '4px 4px 0px #979DA4',
      },
      boxShadow: {
        '3xl': '2px 84px 19px -51px rgba(0,0,0,0.75) inset',
      },
      spacing: {
        '4px': '4px',
      },
    },
  },
  plugins: [],
};
