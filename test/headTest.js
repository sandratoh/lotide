const { assert } = require('chai');
const assertEqual = require('../assertEqual');

const head = require('../head');

// MOCHA AND CHAI TEST CODES
describe('#head', () => {
  it('returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it('returns \'5\' for [\'5\']', () => {
    assert.strictEqual(head(['5']), '5');
  });

  it('returns \'Hello\' for [\'Hello\', \'Lighthouse\', \'Labs\']', () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });
});


// ORIGINAL TEST CODES
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
// assertEqual(head([1]), 1);
// assertEqual(head([]), undefined);

