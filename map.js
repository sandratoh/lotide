// Map function will take in two arguments
// 1. An array to map
// 2. A callback function
// Output: return a new array based on the results of the callback function

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

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


// Assertion test codes
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

const moreWords = ['hi', 'there', 'you', 'beautiful', 'creature'];

const assertTest2 = map(moreWords, moreWord => moreWord[0]);
const assertTest3 = map(moreWords, moreWord => moreWord[3]);
const assertTest4 = map(moreWords, moreWord => moreWord[moreWord.length - 1]);


assertArraysEqual(assertTest2, [ 'h', 't', 'y', 'b', 'c' ]);
assertArraysEqual(assertTest3, [ , 'r', , 'u', 'a' ]);
assertArraysEqual(assertTest4, [ 'i', 'e', 'u', 'l', 'e' ]);