// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: { 
      'indent': [ 'warn', 2 ],
      'linebreak-style': [ 'warn', 'unix' ],
      'quotes': [ 'warn', 'single' ],
      'semi': [ 'warn', 'always' ]
    }
  }
);