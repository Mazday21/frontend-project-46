module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 'latest', // Замените "latest" на конкретную версию, например 2022, если это необходимо
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 'off',
    'import/extensions': 'off',
    'no-named-as-default-member': 'off',
    'no-console': 'off',
    'no-extraneous-dependencies': 'off',
  },
};
