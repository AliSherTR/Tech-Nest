/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
            },
            gridTemplateRows: {
                12: "repeat(12, minmax(0, 1fr))", // Specify the size or use 'minmax(0, 1fr)' for equal height rows
            },
        },
    },
    plugins: [],
};
