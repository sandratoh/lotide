// eqArrays function
// const eqArrays = require('./eqArrays');

// assertion function for arrays
// const assertArraysEqual = require('./assertArraysEqual');

// Iteration method
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


module.exports = flatten;