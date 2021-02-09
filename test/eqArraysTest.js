const assert = require('chai').assert;

const eqArrays = require('../eqArrays');

// const assertEqual = require('../assertEqual');

// TEST CDOES WITH MOCHA AND CHAI
describe('#eqArrays', () => {
  it('returns false when comparing [1, 2, 3] with [3, 2, 1]', () => {
    const arrOne = [1, 2, 3];
    const arrTwo = [3, 2, 1];
    assert.isFalse(eqArrays(arrOne, arrTwo));
  });

  it('returns false when comparing [1, 2, 3] with [1, 2, \'3\']', () => {
    const arrOne = [1, 2, 3];
    const arrTwo = [1, 2, '3'];
    assert.isFalse(eqArrays(arrOne, arrTwo));
  });

  it('returns true when comparing [1, 2, 3] with [1, 2, 3]', () => {
    const arrOne = [1, 2, 3];
    const arrTwo = [1, 2, 3];
    assert.isTrue(eqArrays(arrOne, arrTwo));
  });
});


// TEST CODES
// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
// console.log(eqArrays([1, 2, 3], [1, 2, 3, 4])); // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => PASS
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => PASS