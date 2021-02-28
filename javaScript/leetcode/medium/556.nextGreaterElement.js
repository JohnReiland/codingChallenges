/*
Given a positive integer int, find the smallest integer which has exactly the
same digits existing in the integer int and is greater in value than int. If no
such positive integer exists, return -1.

Note that the returned integer should fit in 32-bit integer, if there is a valid
answer but it does not fit in 32-bit integer, return -1.

Example 1:
Input: int = 12
Output: 21

Example 2:
Input: int = 21
Output: -1

Constraints:
1 <= n <= 2^31 - 1
*/

const nextGreaterElement = (int) => {
  let work = int;
  let arr = [];
  while (work !== 0) {
    arr.push(work % 10);
    work -= work % 10;
    work /= 10;
  }
  let i = 1;
  while (arr[i] >= arr[i - 1]) {
    i++;
  }
  let result = -1;
  if (i < arr.length) {
    let partial = arr.slice(0, i + 1);
    partial.sort((a, b) => a - b);
    let j = 0;
    while (partial[j] <= arr[i]) {
      j++;
    }
    let head = partial[j];
    partial.splice(j, 1);
    for (let l = 0, k = partial.length - 1; k >= 0; l++, k--) {
      arr[l] = partial[k];
    }
    arr[partial.length] = head;
    result = 0;
    while (arr.length) {
      result *= 10;
      result += arr.pop();
    }
  }
  return result > 2147483647 ? -1 : result;
};
module.exports = { nextGreaterElement };
