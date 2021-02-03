// eqArrays function
const eqArrays = (arrOne, arrTwo) => {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

// assertion function for arrays
const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅✅✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`⛔️⛔️⛔️ Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
};

// without function : return a subset of given array, removing unwanted elements
// Pseudocode
// declare function (source, itemsToRemove)
// return a new array not changing source array
// new array doesnt have itemsToRemove

const without = (source, itemsToRemove) => {
  let newArr = [];
  for (let sourceItem of source) {
    for (let removeItem of itemsToRemove) {
      if (removeItem !== sourceItem) {
        newArr.push(sourceItem);
      }
    }
  }
  return (newArr);
};

// Test cases
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without([1, 2, 3, 1], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);