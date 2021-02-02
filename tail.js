//ASSERTION FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️⛔️⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TAIL FUNCTION RETURNS A NEW ARRAY WITH EVERYTHING EXCEPT FOR THE FIRST ITEM (HEAD) OF THE ORIGINAL ARRAY
//TAIL FUNCTION SHOULD NOT MODIFY THE ORIGINAL ARRAY
const tail = arr => {
  let tailArr = [];
  for (let i = 1; i < arr.length; i++) {
    tailArr.push(arr[i]);
  }
  return tailArr;
};

// TEST CODE TO CHECK TAIL ARRAY
const numbers = [2, 4, 6, 8];
console.log(tail(numbers)); //output: [4, 6, 8]

// TEST CASE TO CHECK ORIGINAL ARRAY
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!