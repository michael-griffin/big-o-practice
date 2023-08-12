"use strict";

// add whatever parameters you deem necessary & write docstring

//This should take two strings, s1 and s2.
//It checks whether the characters in s1`form
//a subsequence of the characters in `s2.
//In other words, this should check whether the characters
//in the s1 appear somewhere in the s2, without their order changing.

//Constraints: Time complexity: O(n + m)


//Check if the characters in string1, in order, appear in that same order,
//in string 2, even if there are other characters inbetween.

//inputs: string1, string2
//output: boolean: t or f




/**
 * Takes in two strings, and checks if the characters in String1
 * appear in the same order in String2, regardless if there are other
 * chars in between
 *
 * @param {*} word1
 * @param {*} word2
 * @returns true if true, false if not.
 */
function isSubsequence(word1, word2) {
  //see if chars in string1 appear in order in string2
  let wordCounter1 = 0; //update name to index1
  let wordCounter2 = 0;


  while (wordCounter1 < word1.length && wordCounter2 < word2.length) {
    if (word1[wordCounter1] === word2[wordCounter2]) {
      wordCounter1++;
      wordCounter2++;
    }
    else {
      wordCounter2++;
    }
  }


  //return t or f
  return (wordCounter1 === word1.length) ? true: false; //doesnt need the ternary piece
}

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting');        // true
isSubsequence('abc', 'acb');           // false (order matters)