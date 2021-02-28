/*
Given strings s and t, write a function to determine if t is an anagram of s.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your
solution to such case?
*/

const counts = (string) => {
  const result = {};
  for (let i = 0; i < string.length; i++) {
    result[string[i]] = 1 + result[string[i]] || 0;
  }
  return result;
};

const letters = (string) => {
  const test = {};
  const result = [];
  for (let i = 0; i < string.length; i++) {
    if (!test[string[i]]) {
      test[string[i]] = true;
      result.push(string[i]);
    }
  }
  return result;
};

const isAnagram = (string, test) => {
  let result = false;
  if (string.length === test.length) {
    const sLetters = letters(string);
    const sCounts = counts(string);
    const tCounts = counts(test);
    result = true;
    for (let i = 0; i < sLetters.length; i++) {
      if (sCounts[sLetters[i]] !== tCounts[sLetters[i]]) {
        result = false;
        break;
      }
    }
  }
  return result;
};

module.exports = { isAnagram };
