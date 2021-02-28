/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You
may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:
n == nums.length
1 <= n <= 5 * 10^4
-231 <= nums[i] <= 231 - 1

Follow-up: Could you solve the problem in linear time and in O(1) space?
*/

const majorityElement = (nums) => {
  const limit = Math.floor(nums.length / 2) + 1;
  const tally = [];
  for (let i = 0; i < nums.length; i++) {
    tally[nums[i]] = 1 + (tally[nums[i]] || 0);
    if (tally[nums[i]] === limit) {
      return nums[i];
    }
  }
};

module.exports = { majorityElement };
