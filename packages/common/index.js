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
        'unicorn/prefer-module': 'off',
        'jsdoc/no-types': 'off',
        'jsdoc/require-param-type': 'error',
        'jsdoc/require-returns-type': 'error'
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
    /** 开头是pre的变量，可以被重新赋值 */
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsForRegex: ['^pre']
      }
    ],
    /** 允许使用array.reduce */
    'unicorn/no-array-reduce': 'off',
    /** 允许直接使用__dirname */
    'unicorn/prefer-module': 'off',
    /** 关闭通过协议使用包：require('node:path') */
    'unicorn/prefer-node-protocol': 'off',
    /** 允许function和class先使用再申明 */
    'no-use-before-define': [
      'error',
      { functions: false, classes: false }
    ],
    /**
     * ts文件不需要定义jsdoc类型
     */
    'jsdoc/no-types': ['error', { contexts: ['any'] }],
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-returns-type': 'off',
    'prettier/prettier': 'error',
    'unicorn/prevent-abbreviations': 'off'
  }
}
