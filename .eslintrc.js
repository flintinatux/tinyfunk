module.exports = {
  'env': {
    'es6': true,
    'mocha': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'sourceType': 'module'
  },
  'rules': {
    'indent': ['error', 2, {
      'flatTernaryExpressions': true,
      'SwitchCase': 1
    }],
    'linebreak-style': ['error', 'unix'],
    'no-console': 'off',
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'semi': ['error', 'never']
  }
}
