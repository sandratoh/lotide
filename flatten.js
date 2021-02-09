// eqArrays function
// const eqArrays = require('./eqArrays');

// assertion function for arrays
// const assertArraysEqual = require('./assertArraysEqual');

// Recursion method
const flatten = (arr) => {
  let newArr = [];
  arr.forEach((item) => {
  // recursive case: if item is in another array
    if (Array.isArray(item)) {
      newArr.push(...flatten(item));
      // newArr.push(item);
    } else {
      // base case: if item is an element of first array, just print
      newArr.push(item);
    }
  });
  return newArr;
};

// Iteration method
// const flatten = (arr) => {
//   let newArr = [];
//   for (let elem of arr) {
//     if (Array.isArray(elem)) {
//       for (let nestElem of elem) {
//         newArr.push(nestElem);
//       }
//     } else {
//       newArr.push(elem);
//     }
//   }
//   return newArr;
// };

module.exports = flatten;