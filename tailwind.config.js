/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#08010E",
            },
            keyframes: {
                "flicker-pixel": {
                    "0%, 20%, 50%, 70%, 80%, 95%": {
                        opacity: 1,
                    },
                    "0%, 25%, 55%, 75%, 85%, 100%": {
                        opacity: 0,
                    },
                },
                "glow": {
                  "0%": {
                    rotate: "0deg",
                    scale: "0.8",
                  },
                  "100%": {
                    rotate: "360deg",
                    scale: "1.6",
                  }
                },
                "rotate": {
                  "0%": {
                    rotate: "0deg",
                  },
                  "100%": {
                    rotate: "360deg",
                  }
                },
            },
            animation: {
                "flicker-pixel": "flicker-pixel 5s var(--delay) infinite linear reverse",
                "rotate": "rotate 3s infinite linear alternate",
                "glow": "glow 3s infinite linear alternate",
            },
            fontFamily: {
              hexa: ['var(--font-hexa)']
            }
        },
    },
    plugins: [],
};
