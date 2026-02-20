'use strict';

const init = require('eslint-config-metarhia');

module.exports = [
  ...init,
  {
    files: ['application/**/*.js'],
    rules: {
      strict: 'off',
      'max-len': ['error', { code: 120, ignoreUrls: true }],
      'no-nested-ternary': 'off',
      camelcase: 'off',
      curly: 'off',
    },
    languageOptions: {
      sourceType: 'module',
      globals: {
        application: true,
        node: true,
        npm: true,
        self: true,
        $: true,
        module: true,
        messenger: true,
        nvim: true,
        ui: true,
        pm: true,
        common: true,
        blessed: true,
        Text: true,
        Box: true,
        Clipboard: true,
        Obj: true,
        Arr: true,
        Shell: true,
      },
    },
  },
];
