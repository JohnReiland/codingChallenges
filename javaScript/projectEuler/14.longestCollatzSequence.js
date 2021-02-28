/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

/*
My first instinct was to build a function that takes a starting input and performs a
series of Collatz transformations until it reaches 1, returning the number of steps
that took, but this would waste most of the information gained in the processing of
that number.

Instead, I'm thinking a better approach would be to build a function that performs
reverse-Collatz transformations, starting with 1, and then doubling it until past the
target number, storing each step and its distance from 1 in an object literal. Then I would
take the first value generated from this method (2) and perform minus 1, times 3 operations
on it repeatedly to build up another set of values. I might want to perform all of this
recursively, I'm not sure.

At any rate, I should be able to put a hard limit on the range of numbers that actually
need to be tested. If I'm concerned with only the numbers below 100, how low could they be
and still stray above 100? Math.ceil(100 / 3) is 34, which is even. (35 * 3) + 1 is 106.
Nothing less than 35 can lead above 100 without first stopping somewhere between 35 and
100. Thus, for any target number, I only need consider the numbers between
Math.floor(target / 3) and (target - 1). The longest chain found within that range will be
the longest of all values below the target number.
*/

/*
Because this is a branching operation, recursion is going to be the way to go. The recursive
function will need to know the target value (so as to stop when the result is at or above it),
the distance from one of its current value, the largest distance yet found, and the object
literal in which it can store the
information it finds.

UPDATE:
It's more difficult than I expected to predict how far the tree needs to grow before it's
certain that it will cover all values in a range. It now seems simpler to me to use my
original design, and simply memoize ever step to save time in future runs.
*/

let findCollatz = (num) => {
  if (!findCollatz.record) {
    findCollatz.record = { 1: 1 };
  }

  if (findCollatz.record[num] !== undefined) {
    return findCollatz.record[num];
  }

  let result = 1;
  let currentValue = num;

  while (currentValue > 1) {
    if (findCollatz.record[currentValue] !== undefined) {
      findCollatz.record[num] = result + findCollatz.record[currentValue] - 1;
      return findCollatz.record[num];
    }

    if (currentValue % 2 === 0) {
      currentValue /= 2;
    } else {
      currentValue *= 3;
      currentValue += 1;
    }
    result++;
  }
  findCollatz.record[num] = result;
  return result;
};

/*
findCollatz(2);
>2

findCollatz(10);
>7

findCollatz(13);
>10
*/

let longestCollatzSequence = (target) => {
  // MAIN EXECUTION START

  let highest = 1;
  let result;

  for (let i = 2; i < target; i++) {
    let test = findCollatz(i);
    if (test > highest) {
      highest = test;
      result = i;
    }
  }

  return result;
};

/*
longestCollatzSequence(10);
>9

longestCollatzSequence(100);
>97

longestCollatzSequence(1000);
>871

longestCollatzSequence(1000000);
>837799
*/

module.exports = { findCollatz, longestCollatzSequence };
