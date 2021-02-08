// eqObjects Function:
const eqObjects = require('./eqObjects');

// Function behaviour:
// Input: take in two objects
// Output: console.log appropriate message passing or failing
// Use util library's inspect function to see detailed object output

const assertObjectsEqual = (actualObj, expectedObj) => {
  // import util library to use inspect function
  const inspect = require('util').inspect;
  if (eqObjects(actualObj, expectedObj)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actualObj)} === ${inspect(expectedObj)}`);
  } else {
    console.log(`⛔️⛔️⛔️ Assertion Failed: ${inspect(actualObj)} !== ${inspect(expectedObj)}`);
  }
};

// Export function:
module.exports = assertObjectsEqual;