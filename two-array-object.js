// add whatever parameters you deem necessary & write docstring
"use strict";
//This should take two arrays of possibly-different lengths.
//The first array consists of keys and the second one consists of values.

//This should return an object created from the keys and values.
//If there are not enough values, the rest of keys should have a value of null.
//If there not enough keys, just ignore the rest of values.

//TODO: ADD docstring!
/**
 * Takes in two arrays, one of keys, one of values. Then, merges into a single object.
 * the new object will have keys equal to the key array, and values equal to the
 * matching value array index
 * @param {*} keys
 * @param {*} values
 * @returns
 */

//try to avoid varnames that have the data type in it. skip arr, obj, etc. Add s.
function twoArrayObject(keys, values) {
  let output = {};

  //Loop through keys
    //figure out how to add null
  for (let i = 0; i < keys.length; i++){
    //TODO: could refactor to ternary.
    output[keys[i]] = (i >= values.length) ? null : values[i];

/*     if (i >= values.length){ //check to see if we ran out of values
      output[keys[i]] = null;
    } else { //if not, set new obj key to keys
      output[keys[i]] = values[i];
    } */
  }

  return output;
}


twoArrayObject(['x', 'y', 'z'], [1, 2]);
// {'x': 1, 'y': 2, 'z': null}

twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]);
// {'a': 1, 'b': 2, 'c': 3}