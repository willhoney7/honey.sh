// @ts-check

/** @type {import("prettier").Config} */
const config = {
	semi: true,
	singleQuote: true,
	trailingComma: 'es5',
	printWidth: 100,
	arrowParens: 'always',
	tabWidth: 4,
	useTabs: true,

	plugins: ['@ianvs/prettier-plugin-sort-imports'],
	// import order
	importOrder: ['^react$', '<BUILTIN_MODULES>', '<THIRD_PARTY_MODULES>', '', '^@', '', '^[.]'],
};

export default config;
