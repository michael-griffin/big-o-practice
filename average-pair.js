// add whatever parameters you deem necessary & write docstring
"use strict";

//averagePair»

//This should take a sorted array of numbers, nums, and a numeric targetAvg.
//Determine if there is a pair of numbers in nums where the average of the
//pair equals the target average. There may be more than one pair that matches
//the average target.

//Constraints: Time complexity: O(n)



//TODO:add docstrings for each function.
/**
 * takes in a sorted array and a targetAvg. Using pointers, move up/down the array
 * to see if we hit targetAvg. If we over/undershoot, move corresponding pointer.
 * If successful, return true, else return false.
 * @param {*} sorted
 * @param {*} avg
 * @returns
 */
function averagePair(sorted, targetAvg) { //could rename: targetAvg

  //two pointer approach:
    //left will be smallest number,
    //right will be largest
    //move pointers if we over/undershoot avg
  let left = 0;
  let right = sorted.length-1;

  while (left < right){
    let currAvg = (sorted[left] + sorted[right])/2;
    //if logic, how do we move pointers:
    if (currAvg === targetAvg){ //victory
      return true;
    } else if (currAvg < targetAvg){ //move left pointer right to increase
      left++;
    } else if (currAvg > targetAvg){ //overshot, move right pointer left to decrease
      right--;
    }
  }
  //return true/false if sorted contains average
  return false;
}

averagePair([1, 2, 3], 2.5);         // true
averagePair([3, 3, 6, 12, 19], 8);   // false
averagePair([1, 2, 3], 2);           // true
averagePair([], 4);                  // false