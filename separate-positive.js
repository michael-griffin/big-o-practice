"use strict"
// add whatever parameters you deem necessary & write docstring

// This should take an array of non-zero numbers.
// Separate the positive numbers to the left and the negative numbers to the right.
// The positive numbers and negative numbers need not be in sorted order.

// The problem should be done in place,
// and the function should return the original array, not a copy.

//Constraints: Time complexity: O(n)


// Without going outside of original array/making a copy, move all positives
// to the left, all negative nums to the right.

//Inputs: Array of non-zero numbers
//Output: SAME array, but sorted.

//Iterate through array only once, moving negatives to the right.

// return sorted array


/**
 * Takes in an array of non-zero numbers and
 * sorts the positive numbers to the left
 * and negative numbers on the right.
 *
 * @param {*} nums
 * @returns sorted nums array
 */
function separatePositive(nums) {
  //Iterate through array only once, moving negatives to the right.
  let counter = 0;
  let index = 0;


  while(counter < nums.length){
    if(nums[index] < 0){
      const negativeNum = nums.splice(index,1); //splice causes this to be quadratic
      //[nums[start], nums[end]] = [nums[end], nums[start]];
      nums.push(negativeNum[0]);
      counter++;
    }
    else {
      counter++;
      index++
    }
  }

  // return sorted array
  return nums;
}

separatePositive([2, -1, -3, 6]);         // [2, 6, -3, -1]
separatePositive([-5, 5]);                // [5, -5]
separatePositive([1, 2, 3]);              // [1, 2, 3]