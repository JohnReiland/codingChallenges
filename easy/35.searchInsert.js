/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:
Input: [1,3,5,6], 5
Output: 2

Example 2:
Input: [1,3,5,6], 2
Output: 1

Example 3:
Input: [1,3,5,6], 7
Output: 4

Example 4:
Input: [1,3,5,6], 0
Output: 0

 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
Brute Force Solution:

for each element of sorted array,
  if element is not less than target value
    return index
return array length

let searchInsert = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (!(nums[i] < target)) {
      return i;
    }
  }
  return nums.length;
};
*/

/*
Improved Solution:

Use a binary search of sorted array to
find the index where the target is, or should be

let left variable be 0
let right variable be array length - 1

if (array[left] > target) {
  return 0;
}

if (array[right] < target) {
  return array length;
]

let m
while (l is less than or equal to r) {
  m is the floor of (l + r) / 2;
  if (array[m] > target) {
    r is m - 1;
  } else if (array[m] < target) {
    l is m + 1;
  } else {
    return m
  }
}
return m;

*/

let searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let middle;

  if (nums.length === 0) {
    return 0;
  }

  if (nums[left] >= target) {
    return 0;
  }

  if (nums[right] < target) {
    return nums.length;
  }

  while (left < right) {
    middle = Math.floor((left + right)/2);
    if (nums[middle] > target) {
      right = middle - 1;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      return middle;
    }
  }
  if (nums[left] >= target) {
    return left;
  } else {
    return left + 1;
  }
}
