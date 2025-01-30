export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class", // Enables manual dark mode toggle
    theme: {
        extend: {
            colors: {
                primary: "#2563EB", // Blue
                secondary: "#1E293B", // Darker gray
                accent: "#9333EA", // Purple
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"], // Sleek font
            },
        },
    },
    plugins: [],
};