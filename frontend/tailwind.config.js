/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-surface-variant": "#bbc9cf",
        "error-container": "#93000a",
        "surface-container-low": "#161c22",
        "on-tertiary-fixed": "#2e1500",
        "surface-container-high": "#252b31",
        "primary-fixed-dim": "#00daf3",
        "secondary-fixed-dim": "#bac8da",
        "surface-container": "#1a2027",
        "error": "#ffb4ab",
        "surface-variant": "#2f353c",
        "surface": "#0e141a",
        "surface-container-lowest": "#090f15",
        "surface-bright": "#343a41",
        "on-surface": "#dde3ec",
        "primary": "#8aedff",
        "inverse-surface": "#dde3ec",
        "on-secondary-container": "#acbacc",
        "on-error": "#690005",
        "tertiary-container": "#ffb26c",
        "inverse-on-surface": "#2b3138",
        "secondary": "#bac8da",
        "on-tertiary-fixed-variant": "#6c3a00",
        "tertiary-fixed-dim": "#ffb778",
        "on-primary": "#00363d",
        "surface-container-highest": "#2f353c",
        "on-secondary-fixed-variant": "#3b4857",
        "on-error-container": "#ffdad6",
        "on-background": "#dde3ec",
        "outline-variant": "#3c494e",
        "on-primary-fixed": "#001f24",
        "tertiary-fixed": "#ffdcc1",
        "on-primary-container": "#005964",
        "on-tertiary": "#4c2700",
        "primary-fixed": "#9cf0ff",
        "on-primary-fixed-variant": "#004f58",
        "surface-dim": "#0e141a",
        "on-secondary-fixed": "#0f1d2a",
        "outline": "#859398",
        "tertiary": "#ffd7b7",
        "on-secondary": "#243240",
        "on-tertiary-container": "#794200",
        "primary-container": "#00d6ee",
        "secondary-container": "#3d4a5a",
        "secondary-fixed": "#d6e4f7",
        "surface-tint": "#00daf3",
        "inverse-primary": "#006875",
        "background": "#0e141a"
      },
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Manrope", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      animation: {
        "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      }
    },
  },
  plugins: [],
}
