const assert = require('chai').assert;

const letterPositions = require('../letterPositions');

// TEST CODES WITH MOCHA AND CHAI
describe('#letterPostions', () => {
  it('returns [0] for \'h\' in \'hello\'', () => {
    const str = 'hello';
    const testResult = letterPositions(str);
    assert.deepEqual(testResult.h, [0]);
  });

  it('returns [1] for \'e\' in \'hello\'', () => {
    const str = 'hello';
    const testResult = letterPositions(str);
    assert.deepEqual(testResult.e, [1]);
  });

  it('returns [2, 3] for \'l\' in \'hello\'', () => {
    const str = 'hello';
    const testResult = letterPositions(str);
    assert.deepEqual(testResult.l, [2, 3]);
  });

  it('returns [2, 3] for \'o\' in \'hello\'', () => {
    const str = 'hello';
    const testResult = letterPositions(str);
    assert.deepEqual(testResult.o, [4]);
  });
});

// // TEST CODES
// const testStr = 'hello';

// let testResult = letterPositions(testStr);

// // console.log(testResult);

// assertArraysEqual(testResult.h, [0]);
// assertArraysEqual(testResult.e, [1]);
// assertArraysEqual(testResult.l, [2, 3]);
// assertArraysEqual(testResult.o, [4]);