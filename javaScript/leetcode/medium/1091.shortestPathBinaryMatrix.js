/*
In an N by N square grid, each cell is either empty (0) or blocked (1).

A clear path from top-left to bottom-right has length k if and only if it is
composed of cells C_1, C_2, ..., C_k such that:

Adjacent cells C_i and C_{i+1} are connected 8-directionally (ie., they are
  different and share an edge or corner)
C_1 is at location (0, 0) (ie. has value grid[0][0])
C_k is at location (N-1, N-1) (ie. has value grid[N-1][N-1])
If C_i is located at (r, c), then grid[r][c] is empty (ie. grid[r][c] == 0).
Return the length of the shortest such clear path from top-left to bottom-right.
If such a path does not exist, return -1.

Example 1:
Input:
[
  [0,1],
  [1,0]
]
Output: 2

Example 2:
Input:
[
  [0,0,0],
  [1,1,0],
  [1,1,0]
]
Output: 4

Note:
1 <= grid.length == grid[0].length <= 100
grid[r][c] is 0 or 1
*/

/*
This one looks like fun, because it's pathing and pathing is always fun.
I'm thinking build a helper function that takes one grid position and identifies
all other grid positions that are valid moves from that first position, and
which are not already marked as having been visited.
Feeding the output of this function into its input results in an ordered search
through a grid.

Using this function both from the starting and ending points should result in a
fast pathing solution while also being certain that the first path found is the
shortest.
*/

const legalMoves = (grid, position, found) => {
  let result = [];
  for (let i = position[0] - 1; i <= position[0] + 1; i++) {
    for (let j = position[1] - 1; j <= position[1] + 1; j++) {
      if (
        i >= 0 &&
        i <= grid.length - 1 &&
        j >= 0 &&
        j <= grid.length - 1 &&
        grid[i][j] === 0 &&
        !found[i][j]
      ) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

const shortestPathBinaryMatrix = (grid) => {
  let result = -1;
  if (grid[0][0] === 0) {
    const startFound = new Array(grid.length);
    for (let i = 0; i < startFound.length; i++) {
      startFound[i] = new Array(grid.length);
    }
    startFound[0][0] = true;
    let startStack = [[0, 0]];
    let next = [];
    let count = 2;
    if (grid.length === 1 && grid[0][0] === 0) {
      result = 1;
    }
    while (startStack.length && result < 0) {
      let currentPosition = startStack.pop();
      let newfound = legalMoves(grid, currentPosition, startFound);
      for (let i = 0; i < newfound.length; i++) {
        if (
          newfound[i][0] === grid.length - 1 &&
          newfound[i][1] === grid.length - 1
        ) {
          result = count;
          break;
        } else {
          startFound[newfound[i][0]][newfound[i][1]] = true;
        }
      }
      next.push(...newfound);
      if (!startStack.length) {
        startStack = next;
        next = [];
        count++;
      }
    }
  }
  return result;
};

module.exports = { shortestPathBinaryMatrix };
