// ASSERTION FUNCTION
const assertEqual = require('./assertEqual');

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

module.exports = countOnly;