/*
Given an array of non-negative integers arr, you are initially positioned at
start index of the array. When you are at index i, you can jump to i + arr[i]
or i - arr[i], check if you can reach to any index with value 0.

Notice that you can not jump outside of the array at any time.

Example 1:
Input: arr = [4,2,3,0,3,1,2], start = 5
Output: true
Explanation: 
All possible ways to reach at index 3 with value 0 are: 
index 5 -> index 4 -> index 1 -> index 3 
index 5 -> index 6 -> index 4 -> index 1 -> index 3 

Example 2:
Input: arr = [4,2,3,0,3,1,2], start = 0
Output: true 
Explanation: 
One possible way to reach at index 3 with value 0 is: 
index 0 -> index 4 -> index 1 -> index 3

Example 3:
Input: arr = [3,0,2,1,2], start = 2
Output: false
Explanation: There is no way to reach at index 1 with value 0.

Constraints:

1 <= arr.length <= 5 * 10^4
0 <= arr[i] < arr.length
0 <= start < arr.length
*/

/*
It would be my default to solve this recursively, but the performance advantages
of solving such problems iteritively are becoming more and more clear to me. As
such, I'll try to solve this with an iterive approach.

This can be solved with an array and a set. A set to keep track of indcies
already visitied, and an array to use as a stack, storing indicies to visit
later. This will result in incidicies being visited in the same order they would
with a recursive solution, but without recursion.

UPDATE: The design above worked without any problem. However, an even faster
solution replaces the set with another array. Setting the array index of
arr.length to false prevents later slowdowns encountered when resizing the
array, and avoids touching all the indicies. This final design is, at time of
writing, faster than the fastest solution on leetCode.*/

var canReach = function (arr, start) {
  const log = [];
  log.fill(false, 0, arr.length - 1);
  const stack = [start];
  while (stack.length) {
    let currentIndex = stack.pop();
    let currentValue = arr[currentIndex];
    if (currentValue === 0) {
      return true;
    }
    if (
      log[currentIndex + currentValue] !== true &&
      currentIndex + currentValue < arr.length
    ) {
      log[currentIndex + currentValue] = true;
      stack.push(currentIndex + currentValue);
    }
    if (
      log[currentIndex - currentValue] !== true &&
      currentIndex - currentValue < arr.length
    ) {
      log[currentIndex - currentValue] = true;
      stack.push(currentIndex - currentValue);
    }
  }
  return false;
};

module.exports = { canReach };
