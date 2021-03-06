// ASSERTION FUNCTIONS
// const assertArraysEqual = require('./assertArraysEqual');

// CHALLENGE
// Input: String
// Output: Object with index values of where characters are found
// Multiple instances possible so use array in object

// ACTUAL FUNCTION
const letterPositions = sentence => {
  const results = {};
  // loop through string
  for (let i = 0; i < sentence.length; i++) {
    // if statement to skip spaces
    if (sentence[i] !== ' ') {
      // add key value to object
      if (results[sentence[i]]) {
        // find index in sentence and push to results arr
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

// Export function
module.exports = letterPositions;

// // TEST CODES
// const testStr = 'hello';

// let testResult = letterPositions(testStr);

// // console.log(testResult);

// assertArraysEqual(testResult.h, [0]);
// assertArraysEqual(testResult.e, [1]);
// assertArraysEqual(testResult.l, [2, 3]);
// assertArraysEqual(testResult.o, [4]);