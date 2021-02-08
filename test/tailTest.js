const assertEqual = require('../assertEqual');

const tail = require('../tail');



// TEST CODE TO CHECK TAIL ARRAY
const numbers = [2, 4, 6, 8];
console.log(tail(numbers)); //output: [4, 6, 8]

// TEST CASE TO CHECK ORIGINAL ARRAY
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!