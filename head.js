// // IMPORT ASSERTION FUNCTION
// const assertEqual = require('./assertEqual');

//ASSERTION FUNCTION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`⛔️⛔️⛔️ Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

//HEAD FUNCTION
const head = function(arr) {
  return arr[0];
};

// EXPORT HEAD FUNC
module.exports = head;