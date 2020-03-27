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

/*

SLIGHTLY IMPROVED SOLUTION

Load every unique value into an object literal, keeping track of index
location up to a maximum of two indicies for non-zero values, and three
indices for zeros (it will never be useful to know the location of more
than two of the same non-zero integer, nor three zeros)

If there are three instances of zero, push that to the solutions array.

For each unique pairing of two integers, sum them and use the object to quickly
determine if the value required to make zero (the negative of the sum)
exists in the array. If it does, push that to the solutions array.

Return the array.

This should be a ^2 solution instead of a ^3 solution, which is still slow.



var threeSum = function(nums) {
  let results = [];
  let record = {};
  for (let i = 0; i < nums.length; i++) {
    if (record[nums[i]] === undefined) {
      record[nums[i]] = 1;
    } else if ((record[nums[i]] < 3 && nums[i] === 0) ||
              (record[nums[i]] < 2)) {
      record[nums[i]]++;
    }
  }

  // if there is at least one zero
  if (record['0'] !== undefined) {
    // add all-zero solution if valid
    if (record['0'] === 3) {
      results.push([0, 0, 0]);
    }

    // add all solutions of [-value, zero, value]
    for (let key in record) {
      if (key === '0') {
        continue;
      }
      let value = parseInt(key, 10);
      if (value > 0 && record[-value] !== undefined) {
        results.push([-value, 0, value]);
      }
    }
  }

  // add all solutions where two numbers are the same
  for (let key in record) {
    if (key === '0') {
      continue;
    }
    if (record[key] === 2) {
      let value = parseInt(key, 10);
      if (record[(-2 * value)] !== undefined) {
        results.push([value, value, -2 * value].sort());
      }
    }
  }

  // reduce to array
  let unique = [];
  for (key in record) {
    if (key !== '0') {
      unique.push(parseInt(key, 10));
    }
  }

  // find remaining solutions
  for (let i = 0; i < unique.length -1; i++) {
    for (let j = i + 1; j < unique.length; j++) {
      let test = (unique[i] + unique[j]);
      if (test !== 0 &&
        record[-test] !== undefined &&
                -test !== unique[i] &&
                -test !== unique[j]) {
        if (record[[unique[i], unique[j], -test].sort()] === undefined) {
          results.push([unique[i], unique[j], -test].sort());
          record[[unique[i], unique[j], -test].sort()] = true;
        }
      }
    }
  }

  return results;
};

*/

/*

GREATER IMPROVEMENT SOLUTION

Cycles are being wasted testing whether a solution is unique.
The method for finding solutions needs to preclude non-unique
solutions from being found altogether.

Sorting the array may be inescapable.

*/

var threeSum = function(nums) {
  let results = [];
  let array = nums.sort();
  let i = 0;

  while (array[i] < 0 && i < array.length - 1) {
    if (array[i] === array[i-1]) {
      i++
      continue;
    }
    for (let j = i+1; j < array.length; j++) {
      if (j !== i + 1 && array[j] === array[j-1]) {
        continue;
      }
      for (let k = array.length-1; k > j && nums[k] > 0; k--) {
        if (array[k] === array[k+1]) {
          continue;
        }
        if (array[i] + array[j] + array[k] === 0) {
          results.push([array[i], array[j], array[k]])
        }
      }
    }
    i++
  }

  if (array[i] === 0 &&
    array[i+1] === 0 &&
    array[i+2] === 0) {
      results.push([0, 0, 0]);
  }

  return results;
};
