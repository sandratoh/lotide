// ASSERTION FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️⛔️⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// CHALLENGE && FUNCTION BEHAVIOUR
// Create function called countLetters
// Input: a string
// Output: return object with a count of each othe letters in that string

// PSEUDOCODE
// Function expression starts
// Declare variable empty object
// Loop through string parameter
//  Add character of string as object key
//  Counter increases if condition is true
//  Default is +1 in order to make the key
// End Loop
// Return object
// End Function