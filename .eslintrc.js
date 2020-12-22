module.exports = {
  'env': {
    'node': true,
    'es2021': true
  },
  'extends': [
    'plugin:react/recommended',
    '@hellomouse/typescript'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'rules': {
  }
};
