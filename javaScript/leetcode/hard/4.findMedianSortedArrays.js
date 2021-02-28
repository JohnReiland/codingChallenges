/*
Given two sorted arrays arr1 and arr2 of size m and n respectively, return the
median of the two sorted arrays.

Follow up: The overall run time complexity should be O(log (m+n)).


Example 1:
Input: arr1 = [1,3], arr2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: arr1 = [1,2], arr2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

Example 3:
Input: arr1 = [0,0], arr2 = [0,0]
Output: 0.00000

Example 4:
Input: arr1 = [], arr2 = [1]
Output: 1.00000

Example 5:
Input: arr1 = [2], arr2 = []
Output: 2.00000

Constraints:

arr1.length == m
arr2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-10^6 <= arr1[i], arr2[i] <= 10^6
*/

/*
The follow up is key in finding the solution, I think. log (m + n) time means
that with each step of processing the arrays, half the values should be
discarded. Playing around with values, I found that the median of each array can
be used as a guide to "safely" delete about half of the elements of the smaller
array, and an equal number of elements from the larger array, without affecting
the true result of their median. This reduces the size of the problem by half
with each pass. 
*/

const arrMedian = (array) => {
  if (array.length % 2 === 0) {
    const low = array.length / 2 - 1;
    const high = array.length / 2;
    return [(array[low] + array[high]) / 2, [low, high]];
  }
  const index = (array.length - 1) / 2;
  return [array[index], [index]];
};

const findMedianSortedArrays = (arr1, arr2) => {
  if (arr1.length < 3 || arr2.length < 3) {
    const merged = [];
    merged.push(...arr1);
    merged.push(...arr2);
    merged.sort((a, b) => a - b);
    return arrMedian(merged)[0];
  }
  const larger = arr1.length >= arr2.length ? arr1 : arr2;
  const smaller = arr1.length >= arr2.length ? arr2 : arr1;
  const mLarge = arrMedian(larger);
  const mSmall = arrMedian(smaller);
  if (mLarge[0] === mSmall[0]) {
    return mLarge[0];
  }
  if (
    larger[0] >= smaller[smaller.length - 1] ||
    smaller[0] >= larger[larger.length - 1]
  ) {
    if (larger.length === smaller.length) {
      return larger[0] > smaller[smaller.length - 1]
        ? arrMedian([smaller[smaller.length - 1], larger[0]])[0]
        : arrMedian([larger[larger.length - 1], smaller[0]])[0];
    }
    return larger[0] >= smaller[smaller.length - 1]
      ? arrMedian(larger.slice(0, larger.length - smaller.length))[0]
      : arrMedian(larger.slice(smaller.length))[0];
  }
  const cut = mSmall[1][0];
  return mLarge[0] > mSmall[0]
    ? findMedianSortedArrays(
        larger.slice(0, larger.length - cut),
        smaller.slice(cut)
      )
    : findMedianSortedArrays(
        larger.slice(cut),
        smaller.slice(0, smaller.length - cut)
      );
};

module.exports = { arrMedian, findMedianSortedArrays };
