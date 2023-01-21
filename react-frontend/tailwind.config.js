/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {},
		fontFamily: {
			"bebasneue": ['Bebas Neue', 'cursive']
		}
	},
	plugins: [],
	variants: {
		extend: {
			display: ["hover", "group-hover"]
		}
	}
}