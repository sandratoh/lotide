// Import assertion
// const assertEqual = require('./assertEqual');

// Declare equalizing array function
const eqArrays = (arrOne, arrTwo) => {
  // If arrays lengths are not equal, stop running codes
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (let i = 0; i < arrOne.length; i++) {
    // Feturn false if arrOne and arrTwo elements are different
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};


// Export functions
module.exports = eqArrays;