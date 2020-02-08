/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
*/

/*
 * @param {number} x
 * @return {number}
 */
var reverse = (int) => {
  let result = 0;
  let input = int;
  let value;
  while (input !== 0) {
    value = input % 10;
    result = (result * 10) + value;
    input = (input - value) / 10;
  }
  if (result > 2147483647 || result < -2147483648) {
    result = 0;
  }
  return result;
};