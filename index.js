const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');

const assertEqual = require('./assertEqual');

const eqArrays          = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const eqObjects          = require('./eqObjects');
const assertObjectsEqual = require('./assertObjectsEqual');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,

  assertEqual: assertEqual,

  eqArrays:          eqArrays,
  assertArraysEqual: assertArraysEqual,
  
  eqObjects:          eqObjects,
  assertObjectsEqual: assertObjectsEqual,
};