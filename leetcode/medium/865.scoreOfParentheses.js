/*
Given a balanced parentheses string S, compute the score of the string based on
the following rule:

() has score 1
AB has score A + B, where A and B are balanced parentheses strings.
(A) has score 2 * A, where A is a balanced parentheses string.
 

Example 1:
Input: "()"
Output: 1

Example 2:
Input: "(())"
Output: 2

Example 3:
Input: "()()"
Output: 2

Example 4:
Input: "(()(()))"
Output: 6
 
Note:
string is a balanced parentheses string, containing only ( and ).
2 <= string.length <= 50
*/

const scoreOfParentheses = (string) => {
  let result = 0;
  let count = 1;
  let left = 1;
  for (let i = 1; i < string.length; i++) {
    count = string[i] === ")" ? count - 1 : count + 1;
    if (!count) {
      let inner = scoreOfParentheses(string.slice(left, i));
      result += 2 * inner;
      left = i + 2;
    }
  }
  return result || 0.5;
};

module.exports = { scoreOfParentheses };
