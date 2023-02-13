module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        animate:{
        '0%,10%,100%': {
          width:'0%'
        },
        '70%,80%,90%': {
          width:'100%'
        },
      }
      },
      "colors": {
        "marron": "#B45309",
        "jaune": "#FBBF24",
        "hover": "#DC7700",
        "fond":"var(--couleur-fond)",
        "Dark-marron": "var(--couleur-interactive)",
      },
      inset: {
        '552px': '552px',
      },
      "fontSize": {
        "sm": "0.9375rem",
        "base": "2rem"
      },
      "fontFamily": {
        heading: ['Rajdhani'],
        "circular-std": "Circular Std",
        "rajdhani": "Rajdhani",
        "museomoderno": "MuseoModerno"
      },
      "borderRadius": {
        "none": "0",
        "xs": "0.0625rem",
        "sm": "0.1875rem",
        "default": "0.25rem",
        "lg": "0.3125rem",
        "xl": "0.625rem",
        "2xl": "0.6875rem",
        "3xl": "0.8125rem",
        "4xl": "0.9375rem",
        "5xl": "1rem",
        "6xl": "1.1875rem",
        "7xl": "1.25rem",
        "8xl": "1.375rem",
        "9xl": "1.5625rem",
        "10xl": "1.8125rem",
        "11xl": "2.1875rem"
      }

    },
    animation: {
      animate:'animate 6s linear infinite'
    }
  },
  plugins: [],
}
