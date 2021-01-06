/*
Given an array arr of positive integers sorted in a strictly increasing order,
and an integer k.

Find the kth positive integer that is missing from this array.

Example 1:
Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th
missing positive integer is 9.

Example 2:
Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing
positive integer is 6.

Constraints:

1 <= arr.length <= 1000
1 <= arr[i] <= 1000
1 <= k <= 1000
arr[i] < arr[j] for 1 <= i < j <= arr.length
*/

/*
A brute force solution for this is very straightforward. With each element in
arr, tally the number of missing positive integers. When that tally equals or
exceeds k, count back from the last examined element until the kth missed
integer is found. If the end of the array is encountered before the tally equals
or exceeds k, count forward from the last examined element until the kth missed
integer is found. Return the kth integer.

A better solution exists which should be much faster. This solution invloves
comparing array values to their indecies, allowing the element closest to the
kth missing integer to be found without examining all or most elements in arr.
With such tight input constraints, however, it's unclear whether the savings
would be significant. I'll start with a brute force solution and do the more
clever solution as a follow-up.
*/

const findKthPositive = (arr, target) => {
  let missed = 0;
  let last = 0;
  for (let i = 0; missed < target && i < arr.length; i++) {
    missed += arr[i] - 1 - last;
    last = arr[i];
  }
  return last + (target >= missed ? target - missed : target - (missed + 1));
};

module.exports = { findKthPositive };
