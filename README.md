# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sandratoh/lotide`

**Require it:**

`const _ = require('@sandratoh/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: returns element at index 0 of array
* `tail(arr)`: returns new array with everything except index 0 element of original array
* `middle(arr)`: returns middlemost element(s) in an array
* `assertEqual(actual, expected)`: assert primitive data type comparisons
* `eqArrays(arrOne, arrTwo)`: returns true if both arrays have identical elements in identical index values
* `assertArraysEqual(actual, expected)`: assert array values using `eqArrays` as callback
* `eqObjects(object1, object2)`: returns true if both objects have identifical keys with identical values
* `assertObjectsEqual(actual, expected)`: assert object values using `eqObjects` as callback