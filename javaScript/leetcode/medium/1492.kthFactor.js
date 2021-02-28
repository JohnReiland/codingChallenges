/*
Given two positive integers n and k.

A factor of an integer n is defined as an integer i where n % i == 0.

Consider a list of all factors of n sorted in ascending order, return the kth
factor in this list or return -1 if n has less than k factors.

Example 1:
Input: n = 12, k = 3
Output: 3
Explanation: Factors list is [1, 2, 3, 4, 6, 12], the 3rd factor is 3.

Example 2:
Input: n = 7, k = 2
Output: 7
Explanation: Factors list is [1, 7], the 2nd factor is 7.

Example 3:
Input: n = 4, k = 4
Output: -1
Explanation: Factors list is [1, 2, 4], there is only 3 factors. We should
  return -1.

Example 4:
Input: n = 1, k = 1
Output: 1
Explanation: Factors list is [1], the 1st factor is 1.

Example 5:
Input: n = 1000, k = 3
Output: 4
Explanation: Factors list is [1, 2, 4, 5, 8, 10, 20, 25, 40, 50, 100, 125, 200,
  250, 500, 1000].

Constraints:

1 <= k <= n <= 1000
*/

/*
This problem looks like a lot of fun, in that there are multiple parts, each of
which can be solved in a number of ways that differ greatly in how easy or
difficult they are to design and code, as well in how well they perform.

To find the kth factor of n, does one need to know all factors of n?
To find all the factors on n, does one need to test every value between 1 and n?

While the answer to the second question above is "no," as prime factorization is
a better way to find all factors of n, because n is so small, due to the
constraints of the chellenge, brute force might be a better way to attack this
challenge, as factors are certain to be found in order, and so the search can be
terminated as soon as the kth factor is found.

This solution is less object-oriented than one using prime factorization would
be, but I believe it might yeild a faster result.
*/

const kthFactor = (n, k) => {
  let result, found;
  result = found = 1;
  for (let i = 2; found < k && i <= n; i++) {
    [result, found] = n % i === 0 ? [i, found + 1] : [result, found];
  }
  return found === k ? result : -1;
};

module.exports = { kthFactor };
