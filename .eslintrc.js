module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
    // No need to import React when using Next.js
    'react/react-in-jsx-scope': 'off',
    // This rule is not compatible with Next.js's <Link /> components
    'jsx-a11y/anchor-is-valid': 'off',
    // Why would you want unused vars?
    "no-unused-declaration": true,
    '@typescript-eslint/no-unused-vars': ['error'],
    // require return types on functions only where useful
    // '@typescript-eslint/explicit-function-return-type': [
    //   'warn',
    //   {
    //     allowExpressions: true,
    //     allowConciseArrowFunctionExpressionsStartingWithVoid: true,
    //   },
    // ],
  },
}
