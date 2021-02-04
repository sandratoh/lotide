// ASSERTION FUNCTIONS
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

// ASSERTION FUNCTIONS FOR ARRAYS
const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅✅✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`⛔️⛔️⛔️ Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
};

// CHALLENGE
// Input: String
// Output: Object with index values of where characters are found
// Multiple instances possible so use array in object

// ACTUAL FUNCTION
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  return results;
};

// TEST CODES
const testStr = 'hello';

let result = letterPositions(testStr);

console.log(result);

assertArraysEqual(result.h, [0]);
assertArraysEqual(result.e, [1]);
assertArraysEqual(result.l, [2, 3]);
assertArraysEqual(result.o, [4]);