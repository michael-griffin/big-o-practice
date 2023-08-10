"use strict";
// add whatever parameters you deem necessary & write docstring


//Given two positive integers, find out if the two numbers have the same frequency of digits.


//Constraints: Time complexity: O(n + m)

//TODO: docstring!
/**
 * Checks the frequencies of each number for the two numbers passed in.
 * If each of the passed in numbers have matching frequencies, return true, else false.
 * To count frequencies, convert to string (iterable), pass to FreqCount functions
 * To compare freqCounts afterwards, use janky JSON.stringify.
 * @param {*} num1
 * @param {*} num2
 * @returns
 */
function sameFrequency(num1, num2) {

  let convertedNum1 = "" + num1;
  let convertedNum2 = "" + num2;
  let freqCount = (items => {
    let counts = {};
    for (let item of items){
      let currCount = (counts[item] || 0 ) + 1;
      counts[item] = currCount;
    }
    return counts;
  });

  let num1Counts = freqCount(convertedNum1);
  let num2Counts = freqCount(convertedNum2);
  let countsEqual = JSON.stringify(num1Counts) === JSON.stringify(num2Counts);

  //return true/false
  return countsEqual;
}


sameFrequency(123, 321);   // true
sameFrequency(34, 14);     // false
sameFrequency(22, 22);     // true
sameFrequency(22, 222);    // false
