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

const flatten = (arr) => {
  let newArr = [];
  for (let elem of arr) {
    if (Array.isArray(elem)) {
      for (let nestElem of elem) {
        newArr.push(nestElem);
      }
    } else {
      newArr.push(elem);
    }
  }
  return newArr;
};

// console.log(flatten([1, 2, [ 3, 4], 5, [6]]));

assertArraysEqual(flatten([1, 2, [ 3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);