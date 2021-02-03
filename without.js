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

// without function : return a subset of given array, removing unwanted elements
// Pseudocode
// declare function (source, itemsToRemove)
// return a new array not changing source array
// new array doesnt have itemsToRemove

//WORKS ONLY IF REMOVING ONE ELEMENT
// const without = (source, itemsToRemove) => {
//   let newArr = [];
//   for (let sourceItem of source) {
//     for (let removeItem of itemsToRemove) {
//       if (sourceItem !== removeItem) {
//         newArr.push(sourceItem);
//       }
//     }
//   }
//   return (newArr);
// };

// // Uses .indexOf to remove array element => DOESN'T WORK
// // ITEM INDEX CHANGES AS THINGS ARE DELETED WITH SPLICE
// const without = (source, itemsToRemove) => {
//   let newArr = [];
//   // loop through both arrays
//   for (let sourceItem of source) {
//     for (let removeItem of itemsToRemove) {
//       if (removeItem === sourceItem) {
//         let itemIndex = source.indexOf(removeItem);
//         newArr = source.splice(itemIndex, 1);
//       }
//     }
//   }
//   return newArr;
//   // if elements === each other, find indexOf
//   // use splice to remove that element
//   //return new array
// };

//USE FILTER METHOD => WORKS!!
const without = (source, itemsToRemove) => {
  let filteredList = [];
  for (let sourceItem of source) {
    for (let removeItem of itemsToRemove) {
      if (removeItem === sourceItem) {
        filteredList = source.filter((item) => item !== removeItem);
      }
    }
  }
  return filteredList;
};

//USE INCLUDE METHOD => ALSO WORKS
// const without = function(source, itemsToRemove) {
//   let newArray = [];
//   for (let i = 0; i < source.length; i++) {
//     if (!itemsToRemove.includes(source[i])) {
//       newArray.push(source[i]);
//     }
//   }
//   return newArray;
// };

// Test cases
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without([1, 2, 3, 1], [1])); // => [2, 3]
console.log(without([1, 2, 3, "1"], [1])); // => [2, 3, '1']
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);