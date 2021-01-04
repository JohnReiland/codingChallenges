/*
Given a non-empty array of integers nums, every element appears twice except for
one. Find that single one.

Follow up: Could you implement a solution with a linear runtime complexity and
without using extra memory?


Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1

Constraints:
1 <= nums.length <= 3 * 10^4
-3 * 10^4 <= nums[i] <= 3 * 10^4
Each element in the array appears twice except for one element which appears 
only once.
*/

/*
It's become my habit to attmept the follow-up challenge in the initial go, and
I'd like for this to be no exception. I'm intregued and intimidated by this one.
Linear runtime complexity? And without using extra memory? That should be a neat
trick.

Linear time complexity isn't as easy as it looks at first blush. It's easy
enough to use an array to keep track of values encountered. The first encounter
sets an index to true, the second sets it to false. In the end, your array will
have one true value; the single one. But finding it will take another pass
unless you're clever, and of course memory for the array scales with input.

Constant space complexity is even tougher. You could do it by throwing time
efficency to the wind. One variable to keep track of your index, and then you
test each index, by brute force, to see if it is the single one. But that takes
quadratic time complexity.

I can think of a very impractical solution that technically is both linear and
uses constant space. Start with the nth prime, where n is the first value in the
array. When encountering each subsequent value v in the array, determine if your
current running total is divisible by the vth prime. If it is, divide it by that
prime. Otherwise, multiply it by that prime. In this way, each value "colors"
the running total in a unique and reversible way. After all values in the array
have been encountered, the remaining value will be the xth prime. Return x.
I suspect this would be an extremely slow (yet techincally linear) and extremely
memory intensive (yet technically constant) method.

I'll have to come back for the follow-up. Getting a working solution is top
prioroty.
*/

/*
UPDATE:
Okay, I've got a working solution, next: tackle the follow-up.
*/

const singleNumber = (nums) => {
  const record = [];
  for (let i = 0; i < nums.length; i++) {
    record[nums[i]] = record[nums[i]] ? false : true;
  }
  for (let test in record) {
    if (record[test] === true) {
      return parseInt(test, 10);
    }
  }
};

module.exports = { singleNumber };
