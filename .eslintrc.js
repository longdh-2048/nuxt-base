module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    'eslint:recommended',
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:nuxt/recommended',
    'airbnb-base',
  ],
  plugins: ['prettier', 'vue'],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-self-closing': 'off',
    'no-shadow': [
      'error',
      {
        allow: ['state'],
      },
    ],
    'import/no-unresolved': 'off',

    'object-curly-newline': 'off',
    'operator-linebreak': ['error', 'after'],
    'no-param-reassign': 'off',
    'no-restricted-globals': 'off',
    'no-underscore-dangle': 'off',
  },
};
