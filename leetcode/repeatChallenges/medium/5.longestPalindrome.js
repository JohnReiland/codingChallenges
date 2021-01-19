/*
Given a string s, return the longest palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"

Example 3:
Input: s = "a"
Output: "a"

Example 4:
Input: s = "ac"
Output: "a"

Constraints:
1 <= s.length <= 1000
s consist of only digits and English letters (lower-case and/or upper-case),
*/

const oddPalindromeAtInd = (string, index) => {
  let result = 1;
  let head = index - 1;
  let foot = index + 1;
  while (foot < string.length && head >= 0) {
    if (string[head] !== string[foot]) {
      break;
    }
    result += 2;
    head--;
    foot++;
  }
  return result;
};

const evenPalindromeAtInd = (string, index) => {
  let result = 0;
  let head = index;
  let foot = index + 1;
  while (foot < string.length && head >= 0) {
    if (string[head] !== string[foot]) {
      break;
    }
    result += 2;
    head--;
    foot++;
  }
  return result;
};

const longestPalindrome = (string) => {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let oddResult = oddPalindromeAtInd(string, i);
    result =
      oddResult > result.length
        ? string.slice(i - (oddResult - 1) / 2, i + ((oddResult - 1) / 2 + 1))
        : result;
    let evenResult = evenPalindromeAtInd(string, i);
    result =
      evenResult > result.length
        ? string.slice(i - (evenResult - 2) / 2, i + 1 + evenResult / 2)
        : result;
  }
  return result;
};

module.exports = { oddPalindromeAtInd, evenPalindromeAtInd, longestPalindrome };
