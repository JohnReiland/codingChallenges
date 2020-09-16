/*

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return [];
  }
  let $digits = digits;
  let letters = [
    ,
    ,
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"],
  ];
  let lastChar;
  let result = letters[$digits[$digits.length - 1]];
  $digits = $digits.substr(0, $digits.length - 1);

  while ($digits.length > 0) {
    lastChar = $digits[$digits.length - 1];
    $digits = $digits.substr(0, $digits.length - 1);
    let hold = letters[lastChar];
    let next = [];
    for (let i = 0; i < hold.length; i++) {
      for (let j = 0; j < result.length; j++) {
        next.push(hold[i] + result[j]);
      }
    }
    result = next;
  }

  return result;
};
