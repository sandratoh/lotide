// ASSERTION FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️⛔️⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// CHALLENGE
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

// ACTUAL FUNCTION
const eqObjects = function(object1, object2) {
};


// TEST CODES
const ab = { a: '1', b: '2'};
const ba = { b: '2', a: '1'};
eqObjects(ab, ba); // => true

const abc = { a: '1', b: '2', c: '3'};
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);