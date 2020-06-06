/*

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

 * @param {number[]} nums
 * @return {number}
 */

/*
Naive Solution:

initialize a "current" value at 0
initialize a "highest" value at 0

for each value in the array
  add value to current
  if current is less than zero
    current is zero
  else if current is higher than highest
    highest is current
return highest


let maxSubArray = (nums) => {
  let current = 0;
  let highest = nums[0];

  for (let i = 0; i < nums.length; i++) {
    current += nums[i];
    if (current > highest) {
      highest = current;
    }
    if (current < 0) {
      current = 0;
    }
  }
  return highest;
  };

  */

let maxSubArray = (nums) => {
  let current = 0;
  let highest = nums[0];

  for (let i = 0; i < nums.length; i++) {
    current += nums[i];
    if (current > highest) {
      highest = current;
    }
    if (current < 0) {
      current = 0;
    }
  }
  return highest;
};