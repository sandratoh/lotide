const eqArrays = require('../eqArrays');

const assertArraysEqual = require('../assertArraysEqual');


// Test codes

assertArraysEqual([1, 2, 3], [3, 4, 5]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, '3']);