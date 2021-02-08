const assert = require('chai').assert;

// const assertArraysEqual = require('../assertArraysEqual');

const middle = require('../middle');

// TEST CODES WITH MOCHA AND CHAI
describe('#middle', () => {
  it('return [] for [1]', () => {
    const actual = middle([1]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });

  it('return [] for [1, 2]', () => {
    const actual = middle([1, 2]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });
});
// TEST CODES
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);

// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
