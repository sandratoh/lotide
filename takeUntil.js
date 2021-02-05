// FUNCTION BEHAVIOUR:
// Input: Two parameters 1. array 2. callback ('predicate' in Lodash)
// Output: Return a slice of the array with elements taken from the beiginning
//         Array keeps going until the callback/predicate returns a truthy value
// Note: Callback should only be provided one value: the item in the array

// ACTUAL FUNCTION
const takeUntil = (array, callback) => {
  let newArr = [];
  for (let elem of array) {
    if (!callback(elem)) {
      newArr.push(elem);
    } else {
      return newArr;
    }
  }
  return newArr;
};

// ASSERTION CODES

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

// TEST CODES
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// ASSERTION TEST CODES
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);