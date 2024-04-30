/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		colors: {
			primary: "hsl(75, 94%, 57%)",
			grey: "hsl(0, 0%, 20%)",
			"dark-grey": "hsl(0, 0%, 12%)",
			"off-black": "hsl(0, 0%, 8%)",
			"white": "hsl(0, 0%, 100%)",
		},
		screens: {
			sm: "400px"
		}
	},
	plugins: [],
}
