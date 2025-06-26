module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:testing-library/react',
    'plugin:cypress/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: {
    react: { version: '18.2' },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx']
      }
    }
  },
  plugins: ['react-refresh', 'testing-library'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    'react/prop-types': 'off',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_'
      }
    ],
    'import/named': 'off',
    'import/no-unresolved': [
      'error',
      {
        ignore: ['^@uiw/github-corners$']
      }
    ],
    'cypress/unsafe-to-chain-command': 'off'
  },
  globals: {
    vi: true
  }
};
