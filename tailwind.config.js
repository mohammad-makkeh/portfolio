/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
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
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		keyframes: {
    			'flicker-pixel': {
    				'0%, 20%, 50%, 70%, 80%, 95%': {
    					opacity: '1'
    				},
    				'0%, 25%, 55%, 75%, 85%, 100%': {
    					opacity: '0'
    				}
    			},
    			'glow': {
    				'0%': {
    					rotate: '0deg',
    					scale: '0.8'
    				},
    				'100%': {
    					rotate: '360deg',
    					scale: '1.6'
    				}
    			},
    			'rotate': {
    				'0%': {
    					rotate: '0deg'
    				},
    				'100%': {
    					rotate: '360deg'
    				}
    			},
				"border-beam": {
				  "100%": {
					"offset-distance": "100%",
				  },
				},
    		},
    		animation: {
    			'flicker-pixel': 'flicker-pixel 5s var(--delay) infinite linear reverse',
    			'rotate': 'rotate 3s infinite linear alternate',
    			'glow': 'glow 3s infinite linear alternate',
				"border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
    		},
    		fontFamily: {
    			hexa: ['var(--font-hexa)']
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
    plugins: [require("tailwindcss-animate")],
};
