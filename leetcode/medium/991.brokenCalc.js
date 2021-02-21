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

const brokenCalc = (start, end) => {};

module.exports = { brokenCalc };
