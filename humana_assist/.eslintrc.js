module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'react-app',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'block-spacing': [
      'error',
      'always'
    ],
    indent: [
      'error',
      2,
      {
        'ArrayExpression': 1,
        'ImportDeclaration': 1,
        'ObjectExpression': 1,
        'SwitchCase': 1
      }
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'always'
    ],
    'key-spacing': [
      'error',
      {
        afterColon: true,
        beforeColon: false
      }
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ]
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};