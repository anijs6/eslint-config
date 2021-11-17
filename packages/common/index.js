module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    'plugin:jsdoc/recommended',
    'airbnb-base',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:yml/standard',
    'plugin:unicorn/recommended',
    'prettier'
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
    },
    {
      files: ['**/*.json', '**/*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        quotes: ['error', 'double'],
        'quote-props': ['error', 'always'],
        'comma-dangle': ['error', 'never']
      }
    },
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser'
    },
    {
      files: ['**/package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'version',
              'description',
              'keywords',
              'license',
              'repository',
              'funding',
              'author',
              'type',
              'files',
              'exports',
              'main',
              'module',
              'unpkg',
              'bin',
              'scripts',
              'husky',
              'lint-staged',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'devDependencies',
              'eslintConfig'
            ]
          },
          {
            pathPattern:
              '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' }
          }
        ]
      }
    }
  ],
  rules: {
    'prettier/prettier': 'error'
  }
}
