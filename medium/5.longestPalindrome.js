/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

/*

*/

/*
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = (string) => {
  if (string.length === 0) {
    return "";
  }
  const palindromeSize = (string, index1, index2) => {
    let size = 0;
    while (string[index1] && string[index2]) {
      if (string[index1] === string[index2]) {
        index1--;
        index2++;
        size++;
      } else {
        return string.slice(index1 + 1, index2);
      }
    }
    return string.slice(index1 + 1, index2);
  }

  let longestLength = 0;
  let result;
  let even;
  let odd;
  for (let i = 0; i < string.length; i++) {
    even = palindromeSize(string, i, i + 1);
    odd = palindromeSize(string, i, i);
    if (even.length > longestLength) {
      longestLength = even.length;
      result = even;
    }
    if (odd.length > longestLength) {
      longestLength = odd.length;
      result = odd;
    }
  }
  return result;
};