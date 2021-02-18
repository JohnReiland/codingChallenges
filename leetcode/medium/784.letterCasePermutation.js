/*
Given a string S, we can transform every letter individually to be lowercase or
uppercase to create another string.

Return a list of all possible strings we could create. You can return the output
in any order.

Example 1:
Input: S = "a1b2"
Output: ["a1b2","a1B2","A1b2","A1B2"]

Example 2:
Input: S = "3z4"
Output: ["3z4","3Z4"]

Example 3:
Input: S = "12345"
Output: ["12345"]

Example 4:
Input: S = "0"
Output: ["0"]

Constraints:
S will be a string with length between 1 and 12.
S will consist only of letters or digits.
*/

const letterCasePermutation = (string) => {
  let result = [];
  if (string.length) {
    let index = 0;
    let cap = "";
    while (!isNaN(parseInt(string[index]))) {
      cap += string[index];
      index++;
    }
    let letter;
    if (index < string.length) {
      letter = string[index].toLowerCase();
    }
    const tail = letterCasePermutation(string.slice(index + 1));
    if (!tail.length) {
      if (letter) {
        result.push(cap + (letter || ""));
        result.push(cap + (letter ? letter.toUpperCase() : ""));
      } else {
        result.push(cap);
      }
    } else if (letter) {
      for (let i = 0; i < tail.length; i++) {
        result.push(cap + (letter || "") + tail[i]);
        result.push(cap + (letter ? letter.toUpperCase() : "") + tail[i]);
      }
    } else {
      result = tail;
    }
  }
  return result;
};

module.exports = { letterCasePermutation };
