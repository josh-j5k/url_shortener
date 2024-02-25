/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				"-2xl": { max: "1535px" },
				// => @media (max-width: 1536px) { ... }
				"-xl": { max: "1279px" },
				// => @media (max-width: 1279px) { ... }
				"-lg": { max: "1023px" },
				// => @media (max-width: 1023px) { ... }
				"-md": { max: "769px" },
				// => @media (max-width: 769px) { ... }
				"-sm": { max: "639px" },
				// => @media (max-width: 639px) { ... }
				tablet: { min: "639px", max: "1023px" },
				// => @media (width: > 639 <= 1023) { ... }
			},
			colors: {
				Cyan: "hsl(180, 66%, 49%)",
				Cyan_Hover: "hsl(180, 66%, 70%)",
				Dark_Violet: "hsl(257, 27%, 26%)",
				Red: "hsl(0, 87%, 67%)",
				Gray: "hsl(0, 0%, 75%)",
				Grayish_Violet: "hsl(257, 7%, 63%)",
				Very_Dark_Blue: "hsl(255, 11%, 22%)",
				Very_Dark_Violet: "hsl(260, 8%, 14%)",
			},
			fontFamily: {
				poppins: ["Poppins", "-apple-system", "BlinkMacSystemFont"],
			},
		},
	},
	plugins: [],
}
