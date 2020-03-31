/*
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:

Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

*/

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

  nums = nums.sort((a, b) => {return a - b});

  if (nums.length < 3) {
    return (nums) => nums.reduce((a, b) => a + b, 0);
  }

  let result = nums[0] + nums[1] + nums[2];
  let bestDistance = Math.abs(target - result);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let testValue = nums[i] + nums[j] + nums[k];
      let testDistance = Math.abs(target - testValue);
      if (testDistance < bestDistance) {
        bestDistance = testDistance;
        result = testValue;
      }
      if (testValue > target) {
        k--;
      } else if (testValue < target) {
        j++;
      } else {
        return target;
      }
    }
  }

  return result;

};