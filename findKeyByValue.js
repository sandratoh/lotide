// ASSERTION FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️⛔️⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// TEST CASES
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, 'Brooklyn Nine-Nine'));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const fruitsByColour = {
  orange: 'orange',
  yellow: 'banana',
  red: 'apple'
};

assertEqual(findKeyByValue(fruitsByColour, 'banana'), 'yellow');
assertEqual(findKeyByValue(fruitsByColour, 'apple'), 'red');
assertEqual(findKeyByValue(fruitsByColour, 'kiwi'), undefined);
