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
//  Ignore if space
// End Loop
// Return object
// End Function

// TEST CASES
console.log(countLetters('LHL'));
console.log(countLetters('hello world'));

assertEqual(countLetters('LHL'), { L: 2, H: 1});
assertEqual(countLetters('lighthouse labs'), {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
});