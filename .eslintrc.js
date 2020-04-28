module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    semi: ['error', 'always'],
  },
  globals: {
    localStorage: true,
    fetch: true,
  },
};
