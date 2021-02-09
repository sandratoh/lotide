const assert = require('chai').assert;

const flatten = require('../flatten');

// Test codes with mocha and chai
describe('flatten', () => {
  it('returns [1, 2, 3, 4, 5, 6] if compared with [1, 2, [3, 4], 5, [6]', () => {
    const arr = [1, 2, [3, 4], 5, [6]];
    assert.deepEqual(flatten(arr), [1, 2, 3, 4, 5, 6]);
  });
});


// Test codes
// console.log(flatten([1, 2, [ 3, 4], 5, [6]]));
// assertArraysEqual(flatten([1, 2, [ 3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);