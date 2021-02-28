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

const recurse = (string) => {
  let result = [];
  let index = 0;
  let body = "";
  const letter = string[index].toLowerCase();
  if (index < string.length) {
    index++;
    while (!isNaN(parseInt(string[index]))) {
      body += string[index];
      index++;
    }
  }
  let tail;
  if (index < string.length) {
    tail = recurse(string.slice(index));
  } else {
    tail = [""];
  }
  for (let i = 0; i < tail.length; i++) {
    result.push(letter + body + tail[i]);
    result.push(letter.toUpperCase() + body + tail[i]);
  }
  return result;
};

const letterCasePermutation = (string) => {
  let result = [];
  let index = 0;
  let cap = "";
  let body;
  while (!isNaN(parseInt(string[index]))) {
    cap += string[index];
    index++;
  }
  if (index < string.length) {
    body = recurse(string.slice(index));
  } else {
    body = [""];
  }
  if (cap.length) {
    for (let i = 0; i < body.length; i++) {
      result.push(cap + body[i]);
    }
  } else {
    result = body;
  }
  return result;
};

module.exports = { letterCasePermutation };
