module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    'plugin:jsdoc/recommended',
    'airbng-base',
    'plugin:unicorn/recommended'
  ],
  plugins: ['jsdoc', 'html', 'unicorn', 'prettier'],
  settings: {
    'html/report-bad-indent': 'error',
    'html/indent': '+2',
    'html/html-extensions': [
      '.html',
      '.ejs',
      '.html',
      '.hbs',
      '.handlebars',
      '.pug'
    ]
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        'unicorn/prefer-module': 'off'
      }
    }
  ],
  rules: {
    'prettier/prettier': 'error'
  }
}
