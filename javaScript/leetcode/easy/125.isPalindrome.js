/*
Given string str, determine if it is a palindrome, considering only
alphanumeric characters and ignoring cases.

Note: For the purposes of this problem, an empty string is a valid palindrome.

Example 1:
Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:
Input: "race a car"
Output: false

Constraints:
str consists only of printable ASCII characters.
*/

const isPalindrome = (str) => {
  const letter = /[a-zA-Z0-9]/;
  let result = true;
  for (let i = 0, j = str.length - 1; result && i < j; i++, j--) {
    while (!letter.test(str[i]) && i < str.length) {
      i++;
    }
    while (!letter.test(str[j]) && j >= 0) {
      j--;
    }
    if (
      str[i] !== undefined &&
      str[j] !== undefined &&
      str[i].toLowerCase() !== str[j].toLowerCase()
    ) {
      result = false;
    }
  }
  return result;
};

module.exports = { isPalindrome };
