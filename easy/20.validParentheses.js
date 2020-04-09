/*

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true



The design that occurs to me is to have a stack which begins empty.
As an opening paren, bracket, or brace is encountered, its corresponding close is added to the stack.
As a non-opening paren, bracket, or brace is encountered, it is compared to the top of the stack.
If it doesn't match, false is returned.
If, the end of the string is reached without false being returned, AND with the stack empty,
  true is returned.

 * @param {string} s
 * @return {boolean}
 */
var isValid = function(string) {
  let pairs = {
    "(" : ")",
    "{" : "}",
    "[" : "]"
  };

  let stack = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(" ||
    string[i] === "{" ||
    string[i] === "[") {
      stack.push(pairs[string[i]])
    } else if (string[i] !== stack.pop) {
      return false;
    }
  }

  return stack.length === 0 ? true : false;
};