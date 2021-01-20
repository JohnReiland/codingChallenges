/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([)]"
Output: false

Example 5:
Input: s = "{[]}"
Output: true

Constraints:
1 <= string.length <= 10^4
string consists of parentheses only '()[]{}'.
*/

const isValid = (string) => {
  const stack = [];
  const table = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let result = true;
  for (let i = 0; i < string.length; i++) {
    if (table[string[i]]) {
      if (table[string[i]] !== stack.pop()) {
        result = false;
        break;
      }
    } else {
      stack.push(string[i]);
    }
  }
  return stack.length === 0 ? result : false;
};

module.exports = { isValid };
