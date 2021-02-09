const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

// const assertEqual = require('../assertEqual');

// TEST CODES WITH CHAI AND MOCHA
describe('#eqObjects', () => {
  it('return true when comparing { a: \'1\', b: \'2\'} with { b: \'2\', a: \'1\'}', () => {
    const ab = { a: '1', b: '2'};
    const ba = { b: '2', a: '1'};
    assert.isTrue(eqObjects(ab, ba));
  });

  it('return false when comparing { a: \'1\', b: \'2\'} with { a: \'1\', b: \'2\', c: \'3\'}', () => {
    const ab = { a: '1', b: '2'};
    const abc = { a: '1', b: '2', c: '3'};
    assert.isFalse(eqObjects(ab, abc));
  });

  it("return true when comparing { c: '1', d: ['2', 3] } with { d: ['2', 3], c: '1' }", () => {
    const cd = { c: '1', d: ['2', 3] };
    const dc = { d: ['2', 3], c: '1' };
    assert.isTrue(eqObjects(cd, dc));
  });

  it("return false when comparing { c: '1', d: ['2', 3] } with { c: '1', d: ['2', 3, 4] }", () => {
    const cd = { c: '1', d: ['2', 3] };
    const cd2 = { c: '1', d: ['2', 3, 4] };
    assert.isFalse(eqObjects(cd, cd2));
  });
});

// TEST CODES
// Primitive Values
// const ab = { a: '1', b: '2'};
// const ba = { b: '2', a: '1'};
// eqObjects(ab, ba); // => true

// const abc = { a: '1', b: '2', c: '3'};
// eqObjects(ab, abc); // => false

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

// // Array Values
// const cd = { c: '1', d: ['2', 3] };
// const dc = { d: ['2', 3], c: '1' };
// eqObjects(cd, dc); // => true

// const cd2 = { c: '1', d: ['2', 3, 4] };
// eqObjects(cd, cd2); // => false

// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);