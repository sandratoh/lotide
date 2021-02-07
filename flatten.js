// const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

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

console.log(flatten([1, 2, [ 3, 4], 5, [6]]));