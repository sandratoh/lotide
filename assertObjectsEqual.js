// eqObjects Function:
const eqObjects = function(object1, object2) {
  let key1Arr = Object.keys(object1);
  let key2Arr = Object.keys(object2);
  if (key1Arr.length !== key2Arr.length) {
    return false;
  }
  for (let key of key1Arr) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

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

// Test cases:
assertObjectsEqual({ a : 1 }, { a : 1});
assertObjectsEqual({ a : 1 }, { a : '1'});

// Export function:
module.exports(assertObjectsEqual);