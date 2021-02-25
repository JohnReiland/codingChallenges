/*
Given an integer array nums, you need to find one continuous subarray that if
you only sort this subarray in ascending order, then the whole array will be
sorted in ascending order.

Return the shortest such subarray and output its length.

Example 1:
Input: nums = [2,6,4,8,10,9,15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the
whole array sorted in ascending order.

Example 2:
Input: nums = [1,2,3,4]
Output: 0

Example 3:
Input: nums = [1]
Output: 0
 

Constraints:
1 <= nums.length <= 10^4
-10^5 <= nums[i] <= 10^5
 
Follow up: Can you solve it in O(n) time complexity?
*/

const findUnsortedSubarray = function (nums) {
  let result = 0;
  let largestRun = 1;
  let largest = nums[0];
  for (let i = 1; i < nums.length; i++) {
    [largest, largestRun] =
      nums[i] >= largest ? [nums[i], largestRun + 1] : [largest, 0];
  }
  if (largestRun < nums.length) {
    let smallestRun = 1;
    let smallest = nums[nums.length - 1];
    for (let i = nums.length - 2; i >= 0; i--) {
      [smallest, smallestRun] =
        nums[i] <= smallest ? [nums[i], smallestRun + 1] : [smallest, 0];
    }
    result = nums.length - (largestRun + smallestRun);
  }
  return result;
};

module.exports = { findUnsortedSubarray };
