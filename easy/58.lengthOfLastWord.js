/*

Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

If the last word does not exist, return 0.

Note: A word is defined as a maximal substring consisting of non-space characters only.

Example:

Input: "Hello World"
Output: 5

 * @param {string} s
 * @return {number}
 */

 /*
Naive solution:

if string length === 0
  return 0

working back from the end of the string:
  find the index of the first non-space char
  if there is no non-space char
    return 0
  let result = 1
  for each character prior to that character
    if that char is non-space
      result++
    else
      return result
  return result


 */
var lengthOfLastWord = (string) => {
  if (string.length === 0) {
    return 0;
  }
  let last;
  for (let i = string.length - 1; i >= 0 && last === undefined; i--) {
    if (string[i] !== ' ') {
      last = i;
    } 
  }
  if (last === undefined) {
    return 0;
  }

  let result = 1;
  for (let i = last - 1; i >= 0; i--) {
    if (string[i] !== ' ') {
      result++;
    } else {
      return result;
    }
  }
  return result;
};