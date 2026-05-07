/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          surface: "#FFFFFF",
          background: "#F5F5F2",
          primary: "#1D4ED8",
          "muted-blue": "#DBEAFE",
          emergency: "#DC2626",
          dark: "#0A0A0A",
        },
        fontFamily: {
          sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        },
        borderRadius: {
          "4xl": "32px",
        },
      },
    },
    plugins: [],
  }