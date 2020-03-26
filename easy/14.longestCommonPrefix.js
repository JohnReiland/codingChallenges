/*

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.

*/

/*
 * @param {string[]} strs
 * @return {string}
 */


/* NAIVE SOLUTION

var longestCommonPrefix = function(strs) {
  let result = '';
  let i = 0;

  if (strs.length === 0) {
    return result;
  }

  let allCharsAtIndexDoMatch = (arr, index) => {
    if (arr[0][index] === undefined) {
      return false
    }
    let testValue = arr[0][index];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i][index] !== testValue) {
        return false;
      }
    }
    return true;
  }

  while (allCharsAtIndexDoMatch(strs, i) === true) {
    i++
  }

  result += strs[0].substring(0,i);

  return result;
};

*/

var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return '';
  }
  let test = strs[0];
  let shortest = strs[0].length;

  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length < shortest) {
      shortest = strs[i].length;
      test = test.substring(0, shortest);
    }
    while (!strs[i].startsWith(test)) {
      shortest--;
      if (shortest === 0) {
        return '';
      }
      test = test.substring(0, shortest);
    }
  }
  return test;
};