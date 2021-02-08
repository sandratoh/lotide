const eqArrays = require('../eqArrays');

const assertEqual = require('../assertEqual');


// TEST CODES
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays([1, 2, 3], [1, 2, 3, 4])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => PASS