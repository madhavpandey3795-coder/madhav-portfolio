module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'import', 'simple-import-sort'],
  rules: {
    'react/react-in-jsx-scope': 'off', // You don't need React import anymore
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
}
