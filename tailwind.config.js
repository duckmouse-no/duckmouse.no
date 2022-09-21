module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    maxWidth: {
      "1/2": "50%",
      "1/3": "30%",
    },
    minHeight: {
      "1/2": "50vh",
      mouse: "calc(100vh - 1275px)",
      mouseLG: "calc(100vh - 890px)",
    },
    extend: {
      screens: {
        tall: { raw: "(min-height: 600px)" },
      },
      colors: {
        btnA: "#00FFF4",
        btnI: "#C2C7CB",
        btnY: "#FFF900",
      },
      dropShadow: {
        btnA: "4px 4px 0px #9CBAD9",
        btnC: "1px 1px 0px #9CBAD9",
        btnI: "4px 4px 0px #979DA4",
        btnY: "4px 4px 0px #FFFF37",
      },
      boxShadow: {
        "3xl": "2px 84px 19px -51px rgba(0,0,0,0.75) inset",
      },
      spacing: {
        "1/4": "25%",
        "4px": "4px",
        "3px": "3px",
        100: "100px",
        150: "150px",
        200: "200px",
        1000: "1025px",
        750: "768px",
        350: "384px",
      },
    },
  },
  plugins: [],
};
