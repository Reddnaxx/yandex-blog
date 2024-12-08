import pluginJs from '@eslint/js';
import pluginImport from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ['src/**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{ ignores: ['node_modules', 'dist', '**/*.d.ts'] },
	{ languageOptions: { globals: globals.browser } },

	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	pluginImport.flatConfigs.recommended,
	{
		settings: {
			react: {
				version: 'detect',
			},
			'import/resolver': {
				typescript: true,
				node: true,
			},
		},
		rules: {
			'react/react-in-jsx-scope': 'off',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'warn',
			'@typescript-eslint/no-unused-expressions': 'warn',
		},
	},
];