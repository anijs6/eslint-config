// eslint-disable-next-line @typescript-eslint/no-var-requires
const commonConfig = require('@anijs/eslint-config-common')

module.exports = {
  extends: [
    '@anijs/common',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  overrides: commonConfig.overrides
}
