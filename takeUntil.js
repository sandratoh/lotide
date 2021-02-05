// FUNCTION BEHAVIOUR:
// Input: Two parameters 1. array 2. callback ('predicate' in Lodash)
// Output: Return a slice of the array with elements taken from the beiginning
//         Array keeps going until the callback/predicate returns a truthy value
// Note: Callback should only be provided one value: the item in the array

// ACTUAL FUNCTION
const takeUntil = (array, callback) => {

};

// TEST CODES
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);