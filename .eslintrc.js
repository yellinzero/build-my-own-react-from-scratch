'use strict';

const restrictedGlobals = require('confusing-browser-globals');

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  extends: ['prettier'],
  root: true,
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'script',
  },
  rules: {},
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },

  globals: {
  },
};
