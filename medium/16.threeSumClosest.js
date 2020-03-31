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

  let array = nums.sort((a, b) => {return a - b});

  if (array.length < 3) {
    return (array) => array.reduce((a, b) => a + b, 0);
  }

  let testValue = array[0] + array[1] + array[2];
  let bestDistance = Math.abs(target - testValue);
  let result = testValue;

  for (let i = 0; i < array.length - 2; i++) {
    if (array[i] === array[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = array.length - 1;
    while (j < k) {
      testValue = array[i] + array[j] + array[k];
      testDistance = Math.abs(target - testValue);
      if (testDistance < bestDistance) {
        bestDistance = testDistance;
        result = testValue;
      }
      if (testValue > target) {
        k--;
        while (array[k] === array[k + 1]) {
          k--;
        }
      } else if (testValue < target) {
        j++;
        while (array[j] === array[j - 1]) {
          j++;
        }
      } else {
        return target;
      }
    }
  }

  return result;

};