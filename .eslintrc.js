/** @type {import("eslint").Linter.Config} */
module.exports = {
    overrides: [
      {
        extends: [
          'plugin:@typescript-eslint/recommended-requiring-type-checking',
        ],
        files: ['*.ts', '*.tsx'],
      },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: 'tsconfig.json',
      tsConfigRootDir: 'reky-se',
    },
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
      'next/core-web-vitals',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: false,
        },
      ],
      '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_' }],
      'no-unused-vars': 'off',
      'react-hooks/exhaustive-deps': 'off',
      '@next/next/no-img-element': 'off',
      'prettier/prettier': [
        'error',
        { singleQuote: true, jsxSingleQuote: true, endOfLine: 'auto' },
      ],
    },
  };
  