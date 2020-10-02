/*

Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input:
a = "1010",
b = "1011"
Output: "10101"

Constraints:

Each string consists only of '0' or '1' characters.
1 <= a.length, b.length <= 10^4
Each string is either "0" or doesn't contain any leading zero.

* @param {string} a
* @param {string} b
* @return {string}
*/

/*
I imagine I can easily make helper functions that convert between binary and
base 10, and then make an addBinary function that makes use of both helper
functions.
*/

let toBase10 = (string) => {
  return parseInt(string, 2);
};

let toBin = (num) => {
  return num.toString(2);
};

let addBinary = (a, b) => {
  return toBin(toBase10(a) + toBase10(b));
};

module.exports = {
  addBinary,
};
