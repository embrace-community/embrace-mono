/** @type {import('tailwindcss').Config} */
//const sharedConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			colors: {
				primary: "#B2D186",
				dark: "#44444B",
				light: "#F4F4F5"
			}
		}
	},
	plugins: []
	// ...sharedConfig
};
