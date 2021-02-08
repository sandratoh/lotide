const eqArrays = require('./eqArrays');

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

// Export function
module.exports = eqObjects;