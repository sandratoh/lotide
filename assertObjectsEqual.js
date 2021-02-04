// eqObjects Function:
const eqObjects = function(object1, object2) {
  let key1Arr = Object.keys(object1);
  let key2Arr = Object.keys(object2);
  if (key1Arr.length !== key2Arr.length) {
    return false;
  }
  for (let key of key1Arr) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};