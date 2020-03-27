/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

/*
 * @param {number[]} nums
 * @return {number[][]}
 */

/*

BRUTE FORCE SOLUTION

Keep track of three "heads" (like printer heads),
which, together, test every possible combination of integers.

To prevent duplicate solutions, sort all solutions found, then
test them against an object literal used for fast record-keeping.

Functional, but far too slow, and unsuable with large data.

var threeSum = function(nums) {
  let results = [];
  let record = {};

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i+1; j < nums.length -1; j++) {
      for (let k = j+1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          if (record[[nums[i], nums[j], nums[k]].sort()] === undefined) {
            results.push([nums[i], nums[j], nums[k]].sort());
            record[[nums[i], nums[j], nums[k]].sort()] = true;
          }
        }
      }
    }
  }

  return results;
};

*/

