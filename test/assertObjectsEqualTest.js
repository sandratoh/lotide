const assertObjectsEqual = require('../assertObjectsEqual');

// Test cases:
assertObjectsEqual({ a : 1 }, { a : 1});
assertObjectsEqual({ a : 1 }, { a : '1'});