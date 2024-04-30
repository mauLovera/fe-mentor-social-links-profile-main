/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		colors: {
			"primary-green": "hsl(75, 94%, 57%)",
			"neutral-grey": "hsl(0, 0%, 20%)",
			"neutral-dark-grey": "hsl(0, 0%, 12%)",
			"neutral-off-black": "hsl(0, 0%, 8%)",
			"neutral-white": "hsl(0, 0%, 100%)",
		},
		screens: {
			sm: "400px"
		},
		maxWidth: {
			card: "384px"
		}
	},
	plugins: [],
}
