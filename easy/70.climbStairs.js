/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Constraints:

1 <= n <= 45

*/

/*
I'm certain I"ve come across a question related to this before, and recall that
the trick to understanding fast solutions to it is in realizing that, regardless
of the number of steps being considered, there are only ever two steps from 
which the final step can be reached: final step - 1, and final step - 2. Thus,
the number of ways of reaching the top of n steps is equal to the number of ways
of reaching n-1 steps, plus the number of ways of reaching n-2 steps.

The corollary of this being that if you know the number of ways of reaching two
consecutive steps, you can add them to get the number of ways of reaching the
next consecutive step. In this way, you can start with the number of ways of
climbing 1 step and 2 steps and, using repetitive addition, find the number of
ways of climbing to higher steps, for an arbitrary number of steps. The sequence
produced by this will be recogonized, upon reflection, as being nearly identical
to the Fibonacci sequence.

So, now to turn this knowledge into a working solution:

I'm aware of a method using the Golden Ratio (Phi) to jump directly to the nth
number of the Fibonacci Sequence, and if the constraint 1 <= n <= 45 were not in
place I'd incorporate it into my solution, but with it there I feel an additive
approach is sufficient.

I'll create an object literal or array to store found solutions, for fast return
of already-calculated steps. I'll seed the record with the solutions for 1 and
2. In the meat of my solution will be a while-loop, which expands the record
while its length is less than needed to solve for n. Then the solution will be
retrieved from the record and returned.
*/

let climbStairs = (n) => {
  if (!climbStairs.record) {
    climbStairs.record = [, 1, 2];
  }
  if (climbStairs.record[n]) {
    return climbStairs.record[n];
  }
  while (climbStairs.record.length - 1 < n) {
    climbStairs.record.push(
      climbStairs.record[climbStairs.record.length - 2] +
        climbStairs.record[climbStairs.record.length - 1]
    );
  }
  return climbStairs.record[n];
};

module.exports = {
  climbStairs,
};
