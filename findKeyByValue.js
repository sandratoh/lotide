// ASSERTION FUNCTION
const assertEqual = require('./assertEqual');

// CHALLENGE
// Function findKeyByValue
// Input: takes in an object and a value
// Output: return first key which contains the given value
//    return undefined if no key with given value is found

//ACTUAL FUNCTION
const findKeyByValue = (object, value) => {
  let result;
  // Loops through object use for...in loop
  for (let key in object) {
    if (object[key] === value) {
      result = key;
    }
  }
  return result;
};

// Export module
module.exports = findKeyByValue;