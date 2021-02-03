const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️⛔️⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Declare equalizing array function
const eqArrays = (arrOne, arrTwo) => {
  // If arrays lengths are equal, run codes
  if (arrOne.length === arrTwo.length) {
    for (let i = 0; i < arrOne.length; i++) {
      // Feturn false if arrOne and arrTwo elements are different
      if (arrOne[i] !== arrTwo[i]) {
        return false;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
};

// TEST CODES
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [1, 2, 3, 4])); // => false
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS