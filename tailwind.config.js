/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-98": "#fafafa",
        "secondary-navbar": "#1e2640",
        darkslategray: "#353c53",
        "black-100": "#fff",
        gray: "rgba(255, 255, 255, 0.1)",
        chocolate: "rgba(238, 116, 31, 0.15)",
        "primary-orange": "#ee741f",
        "primary-blue": "#146eb4",
        "black-30": "#4d4d4d",
        "black-12": "#1a181e",
        "black-50": "#808080",
        "secondary-green": "#17b31b",
        "black-60": "#999",
        "black-95": "#f2f2f2",
        "black-85": "#d9d9d9",
        "black-90": "#e6e6e6",
        "hover-blue": "#0e4f82",
      },
      spacing: {},
      fontFamily: {
        "sub-body-regular": "'Galano Grotesque'",
      },
      borderRadius: {
        "10xs": "3px",
        "21xl": "40px",
        "spacing-spacing-04": "8px",
      },
    },
    fontSize: {
      base: "16px",
      smi: "13px",
      sm: "14px",
      mini: "15px",
      xs: "12px",
      "3xs": "10px",
      xl: "20px",
      "13xl": "32px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
