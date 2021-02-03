// TEST ASSERTION FUNCTIONS

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

// CHALLENGE
// Create `middle` function to return only the middlemost element in an array
// If array is 1 or 2 elements, no middle, return empty array
// If array is odd # elements, return single middle element
// If array is even # elements, return two middle elements

// PSUEDOCODE
// Define middle function (arr)
//   new variable emptyArr = [];
//   middleIndex =
//   if arr.length with 1 or 2 (can use 0 or less than 3 elements OR === 1 || === 2)
//     return emptyArr as [];
//   if arr.length % 2 !== 0
//     find middle element index
//     middleIndex = (arr.length - 1)/2
//     return emptyArr = arr[middleIndex]
//   if arr.length % 2 === 0
//     find middle two elements
//     middleIndex[1] = (arr[arr.length / 2])
//     middleIndex[0] = (arr[arr.length / 2 - 1])
//     return emptyArr = arr[middleIndex];
// End function

// ACTUAL MIDDLE FUNCTION
// Can add in variable for middleElementIndex for clarification
const middle = (arr) => {
  let middleElements = [];
  if (arr.length <= 2) {
    return middleElements;
  }
  if (arr.length % 2 !== 0) {
    middleElements.push(arr[(arr.length - 1) / 2]);
  }
  if (arr.length % 2 === 0) {
    middleElements[1] = (arr[arr.length / 2]);
    middleElements[0] = (arr[arr.length / 2 - 1]);
  }
  return middleElements;
};


// TEST CODES
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);