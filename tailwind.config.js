/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: "rgba(2255, 86, 79, 1)",
        customBg: " rgba(249, 222, 179, 0.627)",
        signUp: " rgba(0, 52, 89, 1)",
      },
    },
  },
  plugins: [],
};
