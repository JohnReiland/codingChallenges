/*
Write a function that takes an unsigned integer and returns the number of '1'
bits it has (also known as the Hamming weight).

Follow up: If this function is called many times, how would you optimize it?

Example 1:
Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a
total of three '1' bits.

Example 2:
Input: n = 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a
total of one '1' bit.

Example 3:
Input: n = 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a
total of thirty one '1' bits.

Constraints:
The input must be a binary integer of length 32
*/

const hammingWeight = (num) => {
  const string = num.toString(2);
  let result = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "1") {
      result++;
    }
  }
  return result;
};

module.exports = { hammingWeight };
