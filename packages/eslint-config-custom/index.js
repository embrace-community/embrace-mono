module.exports = {
	extends: [
		"eslint:recommended",
		"next/babel",
		"next/core-web-vitals",
		"turbo",
		"prettier"
	],
	parserOptions: {
		ecmaVersion: 2022,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		browser: true,
		es6: true,
		node: true
	},
	rules: {
		"@next/next/no-html-link-for-pages": "off"
	}
};
