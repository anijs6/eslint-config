module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: ['plugin:jsdoc/recommended'],
  plugins: ['jsdoc', 'html'],
  settings: {
    'html/indent': '+2',
    'html/report-bad-indent': 'error',
    'html/html-extensions': [
      '.html',
      '.ejs',
      '.html',
      '.hbs',
      '.handlebars',
      '.pug'
    ]
  }
}
