/*
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.


 * @param {number[]} digits
 * @return {number[]}
 */

/*

Naive solution

last value of array = last value plus one
let test = array length - 1
while array[test] === 10 && test >= 0
  array[test] = 0
  test = test - 1
  array[test] = array[test] + 1
if test < 0
  array.unshift 1
return array

 */

var plusOne = function (digits) {
  test = digits.length - 1;
  digits[test]++;
  while (digits[test] === 10 && test > 0) {
    digits[test] = 0;
    test--;
    digits[test]++;
  }
  if (digits[0] === 10) {
    digits[0] = 0;
    digits.unshift(1);
  }
  return digits;
};
