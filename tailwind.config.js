// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Adjust this based on your project structure
        "./public/index.html", // Include your main HTML file if needed
        // Add other paths if you have components/templates elsewhere
    ],
    theme: {
        extend: {
            colors: {
                // Base midnight/navy blues (backgrounds, cards)
                midnight: "#0D1B2A",       // Background dark base
                navyBlue: "#0F2235",       // Section backgrounds
                deepNavy: "#173249",       // Cards and darker elements

                // Teal / aqua accent colors
                tealAccent: "#00BFA5",     // Primary accent color (buttons, highlights)
                lightTeal: "#7FDBFF",      // Secondary lighter teal

                // Text colors
                softText: "#E0F7FA",       // Main text on dark backgrounds
                mutedText: "#7FDBFF",      // Muted accent text
            },
            fontFamily: {
                sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
            },
            spacing: {
                4: "1rem",
                8: "2rem",
                12: "3rem",
                16: "4rem",
            },
            fontSize: {
                base: "1rem",      // 16px
                lg: "1.125rem",    // 18px
                xl: "1.5rem",      // 24px
                "3xl": "2rem",     // 32px
            },
        },
    },
    plugins: [
        // Your plugins (like the NextUI plugin)
        // require("@nextui-org/react/plugin"),
    ],
}
