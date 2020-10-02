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

UPDATE: This works for small values, however, long strings convert to base 10
numbers inaccurately. A bitwise solution is needed.

Looking at examples of binary numbers added using the naive solution, a method
seems staightforward. Calculation begins with the least significant digit of
each string.
If both are 0, their sum is 0, and calculation continues.
If exactly one is a 0, their sum is 1, and calculation continues.
If both are 1, their sum is 10. A 0 should be writen with the 1 carrying over
to the next place. Continue until at least one string is done AND there are no
more carried 1s, then return the sum.

There are a number of possible states in calculation.
First, neither string is finished.
Second, one or both strings are finished, but carried is not empty.
Third, one or both strings are finished and carried is empty.

These states require consideration when designing the function.

UPDATE 2:
I now have a working version, but it's in dire need of a refactor.
I'm going to do so twice; once to simplify the design while keeping bitwise
operation, and again to take advantage of BigInt, which is how I would really
handle this task in any situation where I could get away with using it.
*/

/*
let toBase10 = (string) => {
  return parseInt(string, 2);
};

let toBin = (num) => {
  return num.toString(2);
};

let addBinary = (a, b) => {
  return toBin(toBase10(a) + toBase10(b));
};

addBinary("1010", "1011");
>"10101"

addBinary("11", "1");
>"101"
*/

/*
let addAndCarry = (top, bottom, carry) => {
  let result;
  let newCarry = carry;
  if (top === bottom) {
    if (top === "1") {
      if (newCarry === 0) {
        result = "0";
        newCarry++;
      } else {
        result = "1";
      }
    } else {
      if (newCarry > 0) {
        result = "1";
        newCarry--;
      } else {
        result = "0";
      }
    }
  } else {
    if (newCarry > 0) {
      result = "0";
    } else {
      result = "1";
    }
  }
  return [result, newCarry];
};

let mergeCarry = (value, carry) => {
  let result;
  let newCarry = carry;
  if (newCarry > 0) {
    if (value === "0") {
      result = "1";
      newCarry--;
    } else {
      result = "0";
    }
  } else {
    result = value;
  }
  return [result, newCarry];
};

let addBinary = (a, b) => {
  if (a === "0" || b === "0") {
    return a === "0" ? b : a;
  }
  let result = "";
  let index = 0;
  let carry = 0;
  while (
    a[a.length - (1 + index)] !== undefined &&
    b[b.length - (1 + index)] !== undefined
  ) {
    let temp = addAndCarry(
      a[a.length - (1 + index)],
      b[b.length - (1 + index)],
      carry
    );
    result = temp[0] + result;
    carry = temp[1];
    index++;
  }
  while (
    a[a.length - (1 + index)] !== undefined ||
    b[b.length - (1 + index)] !== undefined
  ) {
    let temp = mergeCarry(
      a[a.length - (1 + index)] === undefined
        ? b[b.length - (1 + index)]
        : a[a.length - (1 + index)],
      carry
    );
    result = temp[0] + result;
    carry = temp[1];
    index++;
  }
  while (carry > 0) {
    result = "1" + result;
    carry--;
  }
  return result;
};



addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101", "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011");
>"110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
*/

let addBinary = (a, b) => {
  let result = "";
  let indexA = a.length - 1; // calclulation starts from end of binary strings
  let indexB = b.length - 1;
  let carry = 0;
  // while part of one string remains uncalculated OR there is value to carry
  while (indexA >= 0 || indexB >= 0 || carry > 0) {
    carry += a[indexA] === "1" ? 1 : 0;
    carry += b[indexB] === "1" ? 1 : 0;
    result = (carry % 2).toString() + result; // % 2 matches bitwise addition
    carry = carry > 1 ? 1 : 0;
    indexA--;
    indexB--;
  }
  return result;
};

module.exports = {
  addBinary,
};
