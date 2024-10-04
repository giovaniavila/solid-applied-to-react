/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        128: "32rem", // 512px
        144: "36rem", // 576px
        160: "40rem", // 640px
        192: "48rem", // 768px
        224: "56rem", // 896px
        256: "64rem", // 1024px
        288: "72rem", // 1152px
      },
    },
  },
  plugins: [],
};
