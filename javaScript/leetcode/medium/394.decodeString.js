/*
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the
square brackets is being repeated exactly k times. Note that k is guaranteed to
be a positive integer.

You may assume that the input string is always valid; No extra white spaces,
square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits
and that digits are only for those repeat numbers, k. For example, there won't
be input like 3a or 2[4].


Example 1:
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:
Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3:
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"

Example 4:
Input: s = "abc3[cd]xyz"
Output: "abccdcdcdxyz"

Constraints:

1 <= s.length <= 30
s consists of lowercase English letters, digits, and square brackets '[]'.
s is guaranteed to be a valid input.
All the integers in s are in the range [1, 300].
*/

/*
Example 2 is the really interesting one, as it makes plain the way encoded
strings can be nested inside other encoded strings. This problem is likely
solved easiest using recusrion.

Because I don't want to compare every char to all numbers or all letters, a
look-ahead approach watching for an open square bracket is best. As soon as one
is recognized, any unencoded string is added to the result, and then each char
is examined only to find a valid bracket closure. The possibility of nested
encoded strings means each char will have to be compared to both open bracket
and close bracket, until a valid input is found.
*/

const decodeString = (input) => {
  let result = "";
  let substring = "";
  for (let i = 0; i < input.length; i++) {
    if (!isNaN(parseInt(input[i], 10))) {
      result += substring;
      substring = "";
      while (input[i] !== "[") {
        substring += input[i];
        i++;
      }
      let repeat = parseInt(substring, 10);
      let bracketCount = 1;
      substring = "";
      while (bracketCount > 0) {
        i++;
        if (input[i] === "[" || input[i] === "]") {
          bracketCount = input[i] === "[" ? bracketCount + 1 : bracketCount - 1;
        }
        substring = bracketCount > 0 ? substring + input[i] : substring;
      }
      let decoded = decodeString(substring);
      substring = "";
      while (repeat > 0) {
        substring += decoded;
        repeat--;
      }
      result += substring;
      substring = "";
    } else {
      substring += input[i];
    }
  }
  result += substring;
  return result;
};

module.exports = { decodeString };
