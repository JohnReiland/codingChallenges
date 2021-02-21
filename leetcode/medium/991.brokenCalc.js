/*
On a broken calculator that has a number showing on its display, we can perform
two operations:

Double: Multiply the number on the display by 2, or;
Decrement: Subtract 1 from the number on the display.
Initially, the calculator is displaying the number X.

Return the minimum number of operations needed to display the number end.

Example 1:
Input: start = 2, end = 3
Output: 2
Explanation: Use double operation and then decrement operation {2 -> 4 -> 3}.

Example 2:
Input: start = 5, end = 8
Output: 2
Explanation: Use decrement and then double {5 -> 4 -> 8}.

Example 3:
Input: start = 3, end = 10
Output: 3
Explanation:  Use double, decrement and double {3 -> 6 -> 5 -> 10}.

Example 4:
Input: start = 1024, end = 1
Output: 1023
Explanation: Use decrement operations 1023 times.

Note:
1 <= start <= 10^9
1 <= end <= 10^9
*/

/*
If end is less than start, the result is always the difference between them.
If start is greater than end, then the result isn't so simple.
The shortest possible path is when end is a product of start and a power of 2.
If start is 5, the numbers it can reach most directly are 5 * 2^1, 5 * 2^2,
5 * 2^3, etc.
If end is not a product of start and a power of 2, then it's even more
complicated, because the shortest path may be multiplying start by a power of 2
and then decrimenting to the answer, or it may be decrimenting start first and
then multiplying that by a power of 2, or some mixed series of both operations.
Perheps all numbers can be considered products of a core number and a power of
2, though for all odd numbers, that power is 0 (7 is 7 * 2^0).
*/

const brokenCalc = (start, end) => {
  let result = 0;
  while (start < end) {
    if (end % 2 === 0) {
      end /= 2;
    } else {
      end++;
    }
    result++;
  }
  return result + start - end;
};

module.exports = { brokenCalc };
