/*
You are given an integer array nums and an integer x. In one operation, you can
either remove the leftmost or the rightmost element from the array nums and
subtract its value from x. Note that this modifies the array for future
operations.

Return the minimum number of operations to reduce x to exactly 0 if it's
possible, otherwise, return -1.

Example 1:
Input: nums = [1,1,4,2,3], x = 5
Output: 2
Explanation: The optimal solution is to remove the last two elements to reduce
x to zero.

Example 2:
Input: nums = [5,6,7,8,9], x = 4
Output: -1

Example 3:
Input: nums = [3,2,20,1,1,3], x = 10
Output: 5
Explanation: The optimal solution is to remove the last three elements and the
first two elements (5 operations in total) to reduce x to zero.

Constraints:
1 <= nums.length <= 10^5
1 <= nums[i] <= 10^4
1 <= x <= 10^9
*/

const minOperations = (nums, x) => {
  let result = -1;
  if (nums[0] <= x || nums[nums.length - 1] <= x) {
    const matchL = { [x]: 0 };
    const matchR = { [x]: 0 };
    let sumL = 0;
    let sumR = 0;
    let isValidL = true;
    let isValidR = true;
    for (
      let left = 0, right = nums.length - 1;
      (isValidL || isValidR) && left < nums.length && right >= 0;

    ) {
      if (isValidL) {
        if (nums[left] > x - sumL) {
          isValidL = false;
        } else {
          sumL += nums[left];
          if (sumL > x) {
            isValidL = false;
          } else if (sumL === x) {
            result = result === -1 ? left + 1 : Math.min(result, left + 1);
            isValidL = false;
          } else if (matchR[sumL] && matchR[sumL] < nums.length - (left + 1)) {
            result =
              result === -1
                ? matchR[sumL] + left + 1
                : Math.min(result, matchR[sumL] + left + 1);
          } else {
            matchL[x - sumL] = left + 1;
          }
        }
      }
      if (isValidR) {
        if (nums[right] > x - sumR) {
          isValidR = false;
        } else {
          sumR += nums[right];
          if (sumR > x) {
            isValidR = false;
          } else if (sumR === x) {
            result =
              result === -1
                ? nums.length - right
                : Math.min(result, nums.length - right);
            isValidR = false;
          } else if (matchL[sumR] && matchL[sumR] < right) {
            result =
              result === -1
                ? matchL[sumR] + (nums.length - right)
                : Math.min(result, matchL[sumR] + (nums.length - right));
          } else {
            matchR[x - sumR] = nums.length - right;
          }
        }
      }
      left = isValidL ? left + 1 : left;
      right = isValidR ? right - 1 : right;
    }
  }
  return result;
};

module.exports = { minOperations };
