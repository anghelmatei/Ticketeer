/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#FFFBDB",
        page: "#FFFBDB",
        card: "#FF6600",
        bluey: "#3772FF",
        defaultText: "#090C08",
        "card-hover": "#FF9832",
        "default-text": "#090C08",
        "blue-accent": "#FFFFFF",
        "blue-accent-hover": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
