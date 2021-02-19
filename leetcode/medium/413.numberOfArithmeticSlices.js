/*
A sequence of numbers is called arithmetic if it consists of at least 3 elements
and if the difference between each two consecutive elements is the same.

For example, these are all arithmetic sequences:
1, 3, 5, 7, 9
7, 7, 7, 7
3, -1, -5, -9
But the following sequence is not arithmetic.
1, 1, 2, 5, 7

A zero-indexed array A consisting of N numbers is given. A slice of that array
is any pair of integers (P, Q) such that 0 <= P < Q < N.

A slice (P, Q) of the array A is called arithmetic if the sequence:
A[P], A[P + 1], ..., A[Q - 1], A[Q] is arithmetic. In particular, this means
that P + 1 < Q.

The function should return the number of arithmetic slices in the array A.

Example:

numberOfArithmeticSlices([1, 2, 3, 4]);
>3
As 3 arithmetic slices exist in array: [1, 2, 3], [2, 3, 4] and [1, 2, 3, 4]
itself.
*/

/*
This can definitely be solved in a single pass, so a linear time complexity
should be possible. This is really just two simple challenges that need to be
solved at the same time.
One challenge is figuring out how, given the length of a single arithmetic
sequence, the number of arithmetic slices that can be made from it. This should
be solvable in constant time.
The other challenge is figuring out how to correctly identify the start and end
of arithmetic sequences within a larger array of elements, some of which may
belong to two arithmetic sequences simultaneously. This should be easily solved.
*/

const numberOfArithmeticSlices = (array) => {};

module.exports = { numberOfArithmeticSlices };
