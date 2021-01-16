/*
Find the kth largest element in an unsorted array. Note that it is the kth
largest element in the sorted order, not the kth distinct element.

Example 1:
Input: [3,2,1,5,6,4] and kTarget = 2
Output: 5

Example 2:
Input: [3,2,3,1,2,4,5,5,6] and kTarget = 4
Output: 4

Note:
You may assume kTarget is always valid, 1 ≤ kTarget ≤ array's length.
*/

const findKthLargest = (nums, kTarget) => {
  return nums.slice().sort((a, b) => {
    return b - a;
  })[kTarget - 1];
};

module.exports = { findKthLargest };
