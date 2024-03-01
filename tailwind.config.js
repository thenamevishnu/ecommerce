/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                heroSection: "url('./hero-section-bg.jpg')"
            },
            colors: {
                primaryGray: "#737373"
            }
        },
    },
    plugins: [],
}

