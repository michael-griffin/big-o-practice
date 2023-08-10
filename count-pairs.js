// add whatever parameters you deem necessary & write docstring


//Given an array of integers, and a number, find the number of pairs of integers
//in the array whose sum is equal to the second parameter. You can assume that
//there will be no duplicate values in the array.



//Constraints: Time complexity: O(n × log n) (good) or O(n) (better)

function countPairs(nums, target) {
  //first method, sort array
  //2 pointers, start/finish
  //move pointers when over/undershot, count times we hit target.

  let sorted = nums.sort();
  let left = 0;
  let right = nums.length - 1;

  let matchCount = 0;

  while (left < right){
    let summed = sorted[left] + sorted[right];
    if (summed === target){
      matchCount++;
      left++;
      right--;
    } else if (summed < target){ //overshoot, increase
      left++;
    } else { //undershoot, decrease
      right--;
    }
  }
  return matchCount;
}

countPairs([3, 1, 5, 4, 2], 6);       // 2 (1,5 and 2,4)
countPairs([4, 6, 2, 7], 10);         // 1 (4,6)
countPairs([1, 2, 3, 4, 5], 10);      // 0



function countPairsON(nums, target) {
  //first method, sort array
  //2 pointers, start/finish
  //move pointers when over/undershot, count times we hit target.

  let left = 0;
  let right = nums.length - 1;

  let matchCount = 0;

  countPairs([1,5,3, 4,2], 6);

  let numsCache = {
    nums...
    //key nums[0] : nums[0]
  }

  return matchCount;
}