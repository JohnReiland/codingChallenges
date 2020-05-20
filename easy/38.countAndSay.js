/*

The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence. You can do so recursively, in other words from the previous member read off the digits, counting the number of digits in groups of the same digit.

Note: Each term of the sequence of integers will be represented as a string.

 * @param {number} n
 * @return {string}
 */

/*
Naive solution:

Build a helper function that accepts a string input and iterates
through count-and-say once, returning a new string.

let result be "1" (string)

for a number of times equal to n - 1
  result = helperFunction(result);

return result

*/

let countAndSay = (n) => {
  let iterateCountAndSay = (string) => {
    let result = '';
    let currentCount = 1;
    let currentChar = string[0];
    for (let i = 1; i < string.length; i++) {
      if (string[i] === currentChar) {
        currentCount++;
      } else {
        result += currentCount.toString();
        result += currentChar;
        currentCount = 1;
        currentChar = string[i];
      }
    }
    result += currentCount.toString();
    result += currentChar;
    return result;
  }

  let result = '1';
  for (let i = 1; i < n; i++) {
    result = iterateCountAndSay(result);
  }
  return result;
};