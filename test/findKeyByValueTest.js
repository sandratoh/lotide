const assert = require('chai').assert;

// ASSERTION FUNCTION
// const assertEqual = require('../assertEqual');

const findKeyByValue = require('../findKeyByValue');

// TEST CASE WITH CHAI AND MOCHA
describe('#findKeyByValue', () => {
  it('return \'drama\' if finding the key of \'The Wire\' in object {sciFi: \'The Expanse\', comedy: \"Brooklyn Nine-Nine\", drama:  \"The Wire\"}', () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });
  
  it('return undefined if finding the key of \'That 70\'s Show\' in object {sciFi: \'The Expanse\', comedy: \"Brooklyn Nine-Nine\", drama:  \"The Wire\"}', () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'That 70\'s Show'), undefined);
  });

  it('return \'yellow\' if finding the key of \'banana\' in object { orange: \'orange\', yellow: \'banana\', red: \'apple\' }', () => {
    const fruitsByColour = {
      orange: 'orange',
      yellow: 'banana',
      red: 'apple'
    };
    assert.strictEqual(findKeyByValue(fruitsByColour, 'banana'), 'yellow');
  });

  it('return \'red\' if finding the key of \'apple\' in object { orange: \'orange\', yellow: \'banana\', red: \'apple\' }', () => {
    const fruitsByColour = {
      orange: 'orange',
      yellow: 'banana',
      red: 'apple'
    };
    assert.strictEqual(findKeyByValue(fruitsByColour, 'apple'), 'red');
  });

  it('return undefined if finding the key of \'kiwi\' in object { orange: \'orange\', yellow: \'banana\', red: \'apple\' }', () => {
    const fruitsByColour = {
      orange: 'orange',
      yellow: 'banana',
      red: 'apple'
    };
    assert.strictEqual(findKeyByValue(fruitsByColour, 'kiwi'), undefined);
  });

});

// TEST CASES
// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// // console.log(findKeyByValue(bestTVShowsByGenre, 'Brooklyn Nine-Nine'));

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// const fruitsByColour = {
//   orange: 'orange',
//   yellow: 'banana',
//   red: 'apple'
// };

// assertEqual(findKeyByValue(fruitsByColour, 'banana'), 'yellow');
// assertEqual(findKeyByValue(fruitsByColour, 'apple'), 'red');
// assertEqual(findKeyByValue(fruitsByColour, 'kiwi'), undefined);