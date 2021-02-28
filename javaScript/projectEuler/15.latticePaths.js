/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.


How many such routes are there through a 20×20 grid?
*/

/*
This is an interesting one. Right away I have a strong intuition that
there's a fast solution. I'll build a brute force solution first, then
use it to work out the fast method.
*/

/*
It's easy to visualize each path through the grid as a combination of
right and down moves. As these are the only moves allowed, right could
be represented by 1, down by 0, and a path as a series of numbers equal
to the width of the grid plus the height of the grid, and containing as
many 1s as the width, as many 0s as the height.

All paths through a 2x2 grid would be represented as:

0011
0101
0110
1001
1010
1100

The fast method eludes me for now. Instead I'm going to create a function which
returns every combination of 1s and 0s for a sequence of length n (w + h), and then
screen it for sequences which contain exactly w 1s. Counting these will yeild the
number of paths through the grid.

I'm going to build the function to be able to consider non-square grids, but to
assume a square grid if height not given.

UPDATE:
I've got a working brute force method, but it's too wasteful to work
on girds of large sizes. It took 18 seconds for it to return the number
of paths on a 12x12 grid, and stopped with an out-of-memory prevention
halt when I attempted to find the number of paths on a 13x13 grid.

I think a major source of waste is that I'm finding all possible sequences
for a length and then screening out invalid sequences. The larger the grid,
the exponentially more sequences are possible, and the exponentially fewer
among them are valid. This means that most of the work being performed is
just thrown away. A better nextSequence needs to be made.

UPDATE_2:
I've made a better nextSequence, one which intelligently calculates the next
valid sequence instead of returning the very next sequence regardless of
validity. This allowed for solving the paths of 13x13 and 14x14 grids, but
it's still too inefficent to solve 15x15 grids without crashing. A faster
method needs to be found. One thing that I notice when drawing out grids on
paper are subsequences, repetitve patterns which make up the larger sequences.
This suggests to me that I need to look at the problem in a different way, one
which sees the sequences as combinations of subsequences.

I've got it! The pattern finally revealed itself after I
noticed that the total number of paths is always twice the
number of paths found without changing the first move.

Focusing only on these numbers "before the turn," I can see
that each sequence starts with 1, and then each consequtive
value in the sequence is just the previous value plus the value
of the previous sequence's next value. When this can no longer
be performed, the value is doubled. The number of paths for
that grid size is the sum of all numbers in that sequence.

This is a purely mathematical solution which should be much,
much faster than any of the previous methods. Unfortunately,
I think it only holds for square grids. I'll try to find a
more general rule to apply to grids of any shape, but for
now I'll impliment for square only.
*/

/*

let nextSequence = (string, width, height) => {
  let i = string.length - 2;
  while (!(string[i] === '0' && string[i + 1] === '1')) {
    i--;
  }
  let result = string.slice(0, i) + '10';
  let zeros = width;
  let ones = height;
  for (let i = 0; i < result.length; i++) {
    if (result[i] === '0') {
      zeros--;
    } else {
      ones--;
    }
  }
  while (zeros > 0) {
    result = result + '0';
    zeros--;
  }
  while (ones > 0) {
    result = result + '1';
    ones--;
  }

  return result;
}

let allSequences = (width, height) => {
  let result = [];
  let currentSequence = '';
  let endSquence = '';
  for (let i = 0; i < width; i++) {
    currentSequence = currentSequence + '0';
    endSquence = endSquence + '0';
  }
  for (let i = 0; i < height; i++) {
    currentSequence = currentSequence + '1';
    endSquence = '1' + endSquence;
  }
  result.push(currentSequence);
  while (currentSequence !== endSquence) {
    currentSequence = nextSequence(currentSequence, width, height);
    result.push(currentSequence);
  }
  return result;
}

let latticePaths = (width, height) => {
  height = height || width;
  let sequences = allSequences(width, height);
  return sequences;
}

*/

let arraySum = (array) => {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
};

let latticePaths = (width) => {
  if (width < 1) {
    return 1;
  }

  if (!latticePaths.chain) {
    latticePaths.chain = [[1]];
  }

  while (latticePaths.chain.length < width) {
    latticePaths.chain.push([1]);
    let currentSeq = latticePaths.chain.length - 1;
    let previousSeq = currentSeq - 1;
    for (let i = 0; i < latticePaths.chain[previousSeq].length - 1; i++) {
      latticePaths.chain[currentSeq].push(
        latticePaths.chain[currentSeq][i] +
          latticePaths.chain[previousSeq][i + 1]
      );
    }
    latticePaths.chain[currentSeq].push(
      2 *
        latticePaths.chain[currentSeq][
          latticePaths.chain[currentSeq].length - 1
        ]
    );
  }

  return 2 * arraySum(latticePaths.chain[width - 1]);
};

/*
latticePaths(1);
>2

latticePaths(2);
>6

latticePaths(3);
>20

latticePaths(12);
>2704156

latticePaths(13);
>10400600

latticePaths(14);
>40116600

latticePaths(15);
>155117520

latticePaths(20);
>137846528820
*/

module.exports = { arraySum, latticePaths };
