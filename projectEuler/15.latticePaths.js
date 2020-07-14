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
*/

let nextSequence = (string) => {
  let value = parseInt(string, 2);
  let result = (value + 1).toString(2);
  while (result.length < string.length) {
    result = '0' + result;
  }
  return result;
}

let allSequences = (num) => {
  let result = [];
  if (num < 2) {
    return result;
  }
  let currentSequence = '';
  let endSquence = '';
  for (let i = 0; i < num; i++) {
    currentSequence = currentSequence + '0';
    endSquence = endSquence + '1';
  }
  result.push(currentSequence);
  while (currentSequence !== endSquence) {
    currentSequence = nextSequence(currentSequence);
    result.push(currentSequence);
  }
  return result;
}

module.exports = {nextSequence, allSequences};