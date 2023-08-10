//Simplify the following big O expressions as much as possible:

//O(n + 10)
O(n)

//O(100 × n)
O(n)

//O(25)
O(1)

//O(n**2 + n**3)
O(n**3)

//O(n + n + n + n)
O(n)

//O(1000 × log(n) + n)
O(log(n) ) //actually just n

//O(1000 × n × log(n) + n)
O( n * log(n) )

//O(2**n + n**2)
O(2**n)

//O(5 + 3 + 1)
O(1)

//Step Two: Calculating Time Complexity»

//Determine the time complexities for each of the following functions.
// If you’re not sure what these functions do, copy and paste them into the
// console and experiment with different inputs!


//Time Complexity: O(n)
function logUpTo(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}


//Time Complexity: O(n)
function logAtLeast10(n) {
  for (let i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
  }
}


//Time Complexity: O(1)
function logAtMost10(n) {
  for (let i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}


//Time Complexity: O(n)
function onlyNumsAtEvenIndexes(nums) {
  let numsAtEvens = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      numsAtEvens.push(nums[i]);
    }
  }

  return numsAtEvens;
}



//Time Complexity: O(n**2)
function runningSubtotals(nums) {
  let subtotals = [];

  for (let i = 0; i < nums.length; i++) {
    let subtotal = 0;
    for (let j = 0; j <= i; j++) {
      subtotal += nums[j];
    }
    subtotals.push(subtotal);
  }
  return subtotals;
}



//Time Complexity: O(n)
const VOWELS = "aeiouAEIOU";

function vowelsCounts(word) {
  let vowelsToCounts = {};

  for (let char of word) { //O(n)
    if (VOWELS.includes(char)) { //O(1)
      if (char in vowelsToCounts) { //O(1)
        vowelsToCounts[char] += 1;
      } else {
        vowelsToCounts[char] = 1;
      }
    }
  }
  return vowelsToCounts;
}

/*
Time Complexity:
Step Three: Short answer»

Answer the following questions

    True or false: n**2 + n is O(n**2).   TRUE
    //TODO: check below
    True or false: n**2 * n is O(n^3). TRUE O(n**3)
    True or false: n**2 + n is O(n).   FALSE

    What’s the time complexity of the .indexOf array method?
    We covered this in lecture, it has to check each element in an array of length n, so
    O(n)

    What’s the time complexity of the .includes array method? O(n)
    We covered this in lecture, it has to check each element in an array of length n, so
    O(n)

    //every takes a callback, which might add complexity
    What’s the time complexity of the .every array method? O(n)
    Similar to includes, in the worst case we check every element of an array.

    What’s the time complexity of the .sort array method?
    O( n*log(n) )

    //Actually O(n). Beginning means that you have to rebuild the 'shifted over' array.
    What’s the time complexity of the .unshift array method? O(1)


    What’s the time complexity of the .push array method? O(1)
    What’s the time complexity of the .pop array method? O(1)
    What’s the time complexity of the Object.keys() function? O(n)

Important
*/



//Stop and get a code review.
//Further Study»

//Write a function called pairSum that takes an array of positive numbers and
//finds the largest sum of two numbers in the array.

//Examples:

pairSum([4, 8, 5, 9, 1]); // 17
pairSum([10, 1, 4, 2, 1]); // 14

//Depending on how you implement this, there are three possibilities for the runtime:
// an easy and clear implementation that is O(n2)

function pairSum1(arr){
  if (arr.length < 2) return;

  let maxPair = arr[0] + arr[1]; //set a default
  for (let i = 0; i < arr.length-1; i++){
    let firstNum = arr[i];
    for (let j = i+1; j < arr.length; j++){
      let pair = firstNum + arr[j];
      if (pair > maxPair) maxPair = pair; //update maxPair if current pair's larger
    }
  }
  return maxPair;
}
console.log(pairSum1([4, 8, 5, 9, 1])); //17
console.log(pairSum1([10, 1, 4, 2, 1])); //14


//a solution that is easy to write, relies on a JS array methods, and is O(n log n)
function pairSumSort(arr){
  //sort in ascending order, final items will be largest
  let sorted = arr.sort(); //(a, b) => a - b
  return sorted[sorted.length-1] + sorted[sorted.length-2];
}
console.log(pairSumSort([4, 8, 5, 9, 1]));
console.log(pairSumSort([10, 1, 4, 2, 1]));





//a solution that might be harder to find/understand, but is O(n) */
function pairSumTricky (arr){
  //if arr[0] > arr[1], largest = arr[0]
  //if reverse, largest = arr[1]
  let largest;
  let second;
  if (arr[0] > arr[1]){
    largest = arr[0];
    second = arr[1];
  } else {
    largest = arr[1];
    second = arr[0];
  }

  for (let i = 2; i < arr.length; i++){
    //if current is bigger than largest
      //update second to prev largest
      //update largest to current
    //if current smaller than largest, but bigger than 2nd
      //update second
    let currVal = arr[i];
    if (currVal > largest) {
      second = largest;
      largest = currVal;
    } else if (currVal > second) {
      second = currVal;
    } //else do nothing
  }
  return largest + second;
}

console.log(pairSumTricky([4, 8, 5, 9, 1]));
console.log(pairSumTricky([10, 1, 4, 2, 1]));

//textExpander, aText
//snippet tool: assign snippets to keyboard shortcuts