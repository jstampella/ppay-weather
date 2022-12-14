module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true, // Add this line!
	},
	settings: {
		'import/resolver': {
			typescript: { alwaysTryTypes: true },
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
		react: {
			version: 'detect',
		},
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier', // Add this line!
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		camelcase: 'error',
		'spaced-comment': 'error',
		quotes: ['error', 'single'],
		'no-duplicate-imports': 'error',
		'@typescript-eslint/no-explicit-any': ['off'],
		'@typescript-eslint/no-empty-interface': [
			'error',
			{
				allowSingleExtends: true,
			},
		],
		'import/extensions': 'off',
	},
};
