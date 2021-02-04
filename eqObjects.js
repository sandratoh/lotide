// ASSERTION FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️⛔️⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ARRAY COMPARISON FUNCTION
const eqArrays = (arrOne, arrTwo) => {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

// CHALLENGE
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

// ACTUAL OBJECT COMPARISON FUNCTION
const eqObjects = function(object1, object2) {
  // stop function if length is different
  let key1Arr = Object.keys(object1);
  let key2Arr = Object.keys(object2);
  if (key1Arr.length !== key2Arr.length) {
    return false;
  }
  // loop through object1
  for (let key of key1Arr) {
    // if value is an array, use these codes with eqArrays function
    // console.log('Value of key1Arr is an array ' + Array.isArray(object1[key]));
    // console.log('Value of key2Arr is an array ' + Array.isArray(object2[key]));
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    }
    // if key-value pairs are different, return false
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// TEST CODES
// Primitive Values
const ab = { a: '1', b: '2'};
const ba = { b: '2', a: '1'};
eqObjects(ab, ba); // => true

const abc = { a: '1', b: '2', c: '3'};
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

// Array Values
const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
eqObjects(cd, dc); // => true

const cd2 = { c: '1', d: ['2', 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);