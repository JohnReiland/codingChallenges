/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one
sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is equal to m + n) to hold
additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]

Constraints:

-10^9 <= nums1[i], nums2[i] <= 10^9
nums1.length == m + n
nums2.length == n
*/

/*
It's not entirely clear to me the purpose of initializing the first array to be
a length sufficient to hold the merged arrays. Clearly, this makes returning the
first array as the result the obvious solution, but it's unclear why that should
be made the obvious solution. Pure functions are often preferable, and yet the
challenge seems to advocate for a solution employing an impure function.

Also odd is the constraint of the range of values within the arrays; negative
one billion to positive one billion. It's not immedieatly clear why this should
matter.

I think the fastest way to merge this will be in-place. That is, an attempt
should be made to merge the arrays without changing the length of either array
at any time. This should be possible with a series of value swaps. ES6 allows
this to be accomplished without needing a temporary variable.

Despite there being only two arrays, there are, in effect, three places that
values are being swapped to/from. They are the start of nums1 (index 0 -> m-1),
the end of nums1 (index m -> nums1.length-1), and nums2.

UPDATE:
Looking at other solutions online, a much better method sorts from high to low,
rather than low to high. Refactoring to use this concept.

UPDATE1:
Looking at more solutions, more memory savings are available when, considering
the function will already be impure, side effects are allowed for other inputs.
*/

/*
let merge = (nums1, m, nums2, n) => {
  for (let i = 0, j = 0; i < m; i++) {
    if (nums1[i] > nums2[j]) {
      [nums1[i], nums2[j]] = [nums2[j], nums1[i]];
      while (nums2[j] > nums2[j + 1]) {
        [nums2[j], nums2[j + 1]] = [nums2[j + 1], nums2[j]];
        j++;
      }
      j = 0;
    }
  }
  for (let i = m, j = 0; i < nums1.length; i++, j++) {
    nums1[i] = nums2[j];
  }
  return nums1;
};
*/

let merge = (nums1, m, nums2, n) => {
  for (let end = m + n - 1; end >= 0; ) {
    if (n === 0) {
      return nums1;
    }
    if (nums1[m - 1] >= nums2[n - 1]) {
      nums1[end--] = nums1[m - 1];
      m--;
    } else {
      nums1[end--] = nums2[n - 1];
      n--;
    }
  }
  return nums1;
};

module.exports = { merge };
