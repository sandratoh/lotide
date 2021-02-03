// ASSERTION FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️⛔️⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION BEHAVIOUR
// Input: given an array and object
// Expected Output: return an object containing counts of everything in the array that the input object listed

// ACTUAL FUNCTION
// allItems: an arry of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    // increment the counter for each item
    //   set a property with that string key 'item'
    if (itemsToCount[item]) {
      // HOW IS IT TRUE?
      // set a property with that string key 'item'
      if (results[item]) {
        // increment the counter for each item
        results[item] ++;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

// TEST CODES
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);