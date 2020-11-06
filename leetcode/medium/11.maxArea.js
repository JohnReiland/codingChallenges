/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

Example:

Input: [1,8,6,2,5,4,8,3,7]
          ^             ^
Output: 49
*/

/*
 * @param {number[]} height
 * @return {number}
 */

/*

[BRUTE FORCE SOLUTION]

let maxArea = (heightArray) => {
  let localArea = (index1, index2) => {
    let height = heightArray[index1] < heightArray[index2] ? heightArray[index1] : heightArray[index2];
    let length = index2 - index1;
    let area = height * length;
    return area;
  }

  let result = 0;
  let left = 0;
  let right = 1;
  let test = 0;
  while (left < heightArray.length) {
    while (right < heightArray.length) {
      test = localArea(left, right);
      result = test > result ? test : result;
      right++;
    }
    left++;
    right = left + 1;
  }
  return result;
};

*/

let maxArea = (heightArray) => {
  let localArea = (index1, index2) => {
    let height = Math.min(heightArray[index1], heightArray[index2]);
    let length = index2 - index1;
    let area = height * length;
    return area;
  };

  let result = 0;
  let left = 0;
  let right = heightArray.length - 1;
  let test = 0;
  let hold = 0;

  while (left < right) {
    test = localArea(left, right);
    result = Math.max(test, result);
    if (heightArray[left] < heightArray[right]) {
      hold = heightArray[left];
      left++;
      while (hold > heightArray[left]) {
        left++;
      }
    } else {
      hold = heightArray[right];
      right--;
      while (hold > heightArray[right]) {
        right--;
      }
    }
  }

  return result;
};
