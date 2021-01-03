/*
Suppose you have num integers from 1 to num. We define a beautiful arrangement
as an array that is constructed by these num numbers successfully if one or more
of the following is true for the ith position (1 <= i <= num) in this array:

The number at the ith position is divisible by i.
i is divisible by the number at the ith position.

Given an integer num, return the number of the beautiful arrangements that you
can construct.

Example 1:
Input: num = 2
Output: 2

Explanation: 
The first beautiful arrangement is [1, 2]:
Number at the 1st position (i=1) is 1, and 1 is divisible by i (i=1).
Number at the 2nd position (i=2) is 2, and 2 is divisible by i (i=2).
The second beautiful arrangement is [2, 1]:
Number at the 1st position (i=1) is 2, and 2 is divisible by i (i=1).
Number at the 2nd position (i=2) is 1, and i (i=2) is divisible by 1.

Example 2:
Input: num = 1
Output: 1

Constraints:

1 <= num <= 15
*/

/*
I think this problem could do with some more examples, but maybe that's part of
the fun in it. Very tight input constraints suggest poor time complexity
solutions my be accepted, or perhaps are the best solutions possible. I normally
wouldn't try to tease out an understanding of the problem by throwing input into
the solution test screen, but in this case I think I have to. I'll try it for
the numbers 3, 4, and 5, and hopefully that will give me enough insight to
grasp what's being asked more intuitively.

Example 3:
Input: num = 3
Output: 3

Example 4:
Input: num = 4
Output: 8

Example 5:
Input: num = 5
Output: 10

So it seems to me that any integer has a number of positions in which it is
beautiful. The number of beautiful arrangements that can be made with any
collection of inetegers is described by the number of ways that every integer
within that set can be in one of its beautiful positions simultaneously.

I think there probably exists a faster solution in which one is able to
calculate the number of unique arrangments in which an integer is NOT in a
beautiful position, and then these arrangements are summed and subtracted from
num factorial (num!). This sounds like more work, but as calculating the number
of unbeautiful arrangements for each integer is fast, possibly even constant
time, the solution should be much faster. At any rate, I'm saving that solution
as a follow-up.

I will build arrays for each integer from 1 to num. Each array will consist of
all positions in which that integer is beautiful.
When all arrays are completed, the process of using them to find all beautiful
arrangements will proceed as follows:
For each position value in the first array (the array for 1), the number of
beautiful arrangements that can be found with 1 in that position is found by
considering the next array (the array for 2). That array considers the array
after it, and so on until all positions are considered. This seems like a
recursive strategy. I'm thinking an array to keep track of whether a position
is available or not, then a recursive function call to tally all beautiful
arrangements.
*/

/*
UPDATE:
Great success! My solution went off without a hitch on the first go, and
is in the top 5% of both speed and memory usage. Couldn't be happier.
*/

const countArrangement = (num) => {
  const taken = Array(num + 1).fill(0);
  const positions = Array(num + 1)
    .fill(0)
    .map((x) => (x = []));
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      if (i % j === 0 || j % i === 0) {
        positions[i].push(j);
      }
    }
  }
  const count = (index) => {
    let result = 0;
    for (let i = 0; i < positions[index].length; i++) {
      if (taken[positions[index][i]] === 1) {
        continue;
      }
      taken[positions[index][i]] = 1;
      if (positions.length - 1 === index) {
        result++;
      } else {
        result += count(index + 1);
      }
      taken[positions[index][i]] = 0;
    }
    return result;
  };
  return count(1);
};

module.exports = { countArrangement };
