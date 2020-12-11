/*
Given a sorted array nums, remove the duplicates in-place such that duplicates
appeared at most twice and return the new length.

Do not allocate extra space for another array; you must do this by modifying the
input array in-place with O(1) extra memory.

Clarification:

Confused why the returned value is an integer, but your answer is an array?

Note that the input array is passed in by reference, which means a modification
to the input array will be known to the caller.

Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {print(nums[i]);
}


Example 1:
Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3]
Explanation: Your function should return length = 5, with the first five
elements of nums being 1, 1, 2, 2 and 3 respectively. It doesn't matter what you
leave beyond the returned length.

Example 2:
Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3]
Explanation: Your function should return length = 7, with the first seven
elements of nums being modified to 0, 0, 1, 1, 2, 3 and 3 respectively. It
doesn't matter what values are set beyond the returned length.

Constraints:
0 <= nums.length <= 3 * 10^4
-10^4 <= nums[i] <= 10^4
nums is sorted in ascending order.
*/

/*
This seems very straightforward. About the only twist is that an integer is
returned instead of the array, but this makes complete sense given the nature
of the challenge.

The way I see of solving this is to have two pointers, one reading values and
testing whether they've been encountered twice before, the other writing values
when they haven't been. Then the position of the second pointer, plus one, is
returned.

UPDATE:
I missed a huge savings opportunity in that the array is already sorted.
Thankfully, I caught this before submitting. Only one value need be considered
at a time, as it will never be encountered again once a different value is
encountered. 
*/

const removeDuplicates = (nums) => {
  let j = 0;
  for (let i = 0, lastValue, count; i < nums.length; i++) {
    if (nums[i] !== lastValue || count < 2) {
      nums[j++] = nums[i];
      count = nums[i] === lastValue ? count + 1 : 1;
    }
    lastValue = nums[i];
  }
  return j;
};

module.exports = { removeDuplicates };
