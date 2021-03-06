/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.

Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/*
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = (string) => {
  let startIndex = 0;
  let longestFound = 0;
  let characters = {};

  for (let i = 0; i < string.length; i++) {
    if (
      characters[string[i]] === undefined ||
      characters[string[i]] < startIndex
    ) {
      characters[string[i]] = i;
    } else {
      longestFound =
        longestFound >= i - startIndex ? longestFound : i - startIndex;
      startIndex = characters[string[i]] + 1;
      characters[string[i]] = i;
    }
  }
  longestFound =
    longestFound >= string.length - startIndex
      ? longestFound
      : string.length - startIndex;
  return longestFound;
};
