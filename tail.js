// // IMPORT ASSERTION FUNCTION
// const assertEqual = require('./assertEqual');

//TAIL FUNCTION RETURNS A NEW ARRAY WITH EVERYTHING EXCEPT FOR THE FIRST ITEM (HEAD) OF THE ORIGINAL ARRAY
//TAIL FUNCTION SHOULD NOT MODIFY THE ORIGINAL ARRAY
const tail = arr => {
  // long version
  // let tailArr = [];
  // for (let i = 1; i < arr.length; i++) {
  //   tailArr.push(arr[i]);
  // }
  // return tailArr;
  // simplified one line vr
  return arr.slice(1);
};

module.exports = tail;