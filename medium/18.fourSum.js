/*

Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]



If this is anything like the other XSum challenges, sorting is going to be key.
[1, 0, -1, 0, -2, 2], when sorted, becomes [-2, -1, 0, 0, 1, 2].

What immedieatly occurs to me is that fourSum should be solvable by taking one value from the array,
inverting it, and making it the target passed to threeSum along with the rest of the array as... the array.



 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  var threeSumTarget = function (nums, target1, target2) {
    let results = [];
    let array = nums;

    for (let i = 0; i < array.length - 2; i++) {
      if (array[i] === array[i - 1]) {
        continue;
      }
      let j = i + 1;
      let k = array.length - 1;
      while (j < k) {
        if (array[i] + array[j] + array[k] > target1 + target2) {
          k--;
          while (array[k] === array[k + 1]) {
            k--;
          }
        } else if (array[i] + array[j] + array[k] < target1 + target2) {
          j++;
          while (array[j] === array[j - 1]) {
            j++;
          }
        } else {
          results.push([-target1, array[i], array[j], array[k]]);
          k--;
          while (array[k] === array[k + 1]) {
            k--;
          }
          j++;
          while (array[j] === array[j - 1]) {
            j++;
          }
        }
      }
    }

    return results;
  };

  let array = nums.sort((a, b) => {
    return a - b;
  });
  let results = [];

  for (let i = 0; i < array.length - 3; i++) {
    if (array[i] === array[i - 1]) {
      continue;
    }
    results.push(...threeSumTarget(array.slice(i + 1), -1 * array[i], target));
  }

  return results;
};
