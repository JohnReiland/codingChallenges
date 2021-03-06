/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at
coordinate (i, ai). n vertical lines are drawn such that the two endpoints of
the line i is at (i, ai) and (i, 0). Find two lines, which, together with the
x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

Example 1:
Input: heights = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array
[1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the
container can contain is 49.

Example 2:
Input: heights = [1,1]
Output: 1

Example 3:
Input: heights = [4,3,2,1,4]
Output: 16

Example 4:
Input: heights = [1,2,1]
Output: 2

Constraints:
n == heights.length
2 <= n <= 3 * 10^4
0 <= heights[i] <= 3 * 10^4
*/

const maxArea = (heights) => {
  let result = 0;
  let left = 0;
  let right = heights.length - 1;
  while (left < right) {
    result = Math.max(
      result,
      Math.min(heights[left], heights[right]) * (right - left)
    );
    if (heights[left] > heights[right]) {
      let last = heights[right];
      right--;
      while (heights[right] < last) {
        right--;
      }
    } else {
      let last = heights[left];
      left++;
      while (heights[left] < last) {
        left++;
      }
    }
  }
  return result;
};

module.exports = { maxArea };
