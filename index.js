'use strict';

var invoke  = require('invoke-fn');
var isError = require('is-error');

module.exports = function (func, thisArg, args) {
  try {
    return invoke(func, thisArg, args);
  } catch (e) {
    return isError(e) ? e : new Error(e);
  }
};
