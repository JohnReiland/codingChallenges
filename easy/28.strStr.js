/*

Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1

 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStr = (haystack, needle) => {
  if (needle.length === 0) {
    return 0;
  }
  let doesMatch = (haystack, i, needle) => {
    for (let j = 1; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (doesMatch(haystack, i, needle)) {
        return i;
      }
    }
  }
  return -1;
};