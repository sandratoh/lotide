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
//  Ignore space between characters in strings
// End Loop
// Return object
// End Function

// ACTUAL FUNCTION
const countLetters = (string) => {
  let letterCount = {};
  // Removes spaces in string
  let letters = string.replace(/\s+/g, '');
  for (let letter of letters) {
    if (letterCount[letter]) {
      letterCount[letter] ++;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
};

// NOTES
// Instead of removing spaces
// Can also use if statement and skip space
// if(string[i] !== ' ') {}

// TEST CASES
console.log(countLetters('LHL'));
console.log(countLetters('hello world'));

const testStr = 'hello world';

let result = countLetters(testStr);

assertEqual(result["h"], 1);
assertEqual(result["l"], 3);
assertEqual(result["o"], 2);
assertEqual(result["a"], undefined);