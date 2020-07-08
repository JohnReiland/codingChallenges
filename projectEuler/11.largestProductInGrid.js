/*
In the 20×20 grid below, four numbers along a diagonal line have been marked in red.

08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08
49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00
81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65
52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91
22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80
24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50
32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70
67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21
24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72
21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95
78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92
16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57
86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58
19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40
04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66
88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69
04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36
20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16
20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54
01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48

The product of these numbers is 26 × 63 × 78 × 14 = 1788696.

What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20×20 grid?
*/

/*
There's considerable ambiguity in the input of this challenge
Is the grid a string? An array? An array of arrays? I see values
with leading zeros, that's unusual. Zero is represented by double zero,
likewise unusual.

If I were designing the inputs, I would use an array of arrays,
but I see nothing in the problem to suggest that's the input here,
and the leading zeros actually suggest against it. I'm going to
assume the input is one long string.

While I'm making assumptions, I'm going to assume the size of the
grid might vary, but will always be square. This grid is 20x20.
I'm not going to assume all grids will be 20x20, but I'm not going
to consider the possibilty of a 10x30 grid. 5x5, yes. 8x8, yes.

I'm also going to assume that the number of adjacent numbers
considered also varies. The entire width of the grid will be the
default, but smaller values, as small as 1, can be passed in.

For the output, I want not only the product, but the factors as well.
I'll output the result as: [[...factors], product]
*/

/*
Strategy
I built a connect-four game once that had to test, after every move,
whether a player had one. Like this challenge, it required testing
the same grid-like game board in multiple ways. I used seperate functions
to test for different kinds of wins, vertical horizontal, major diagonal,
minor diagonal. I'll do the same here, but instead of testing for four
alike values, I'll multiply the values and test whether the product is
the highest found for that test. Each test will return the factors and
product that are the highest it found. A cross-test comparisson will
find the highest among all tests.

So first there will be a helper function to convert the string into an array of arrays for easy manipulation, then a series of helper functions which each return the highest product they could find using the given (or default) adjacency and the factors of that product, and then the highest among those is returned as the result.
*/

let largestProductInGrid = (string, adjacency) => {
  let populateGrid = () => {
    let currentValue = 0;
    for (let i = 0; i < size; i++) {
      grid.push([]);
    }
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        grid[i][j] = parseInt(gridString[currentValue], 10);
        currentValue++;
      }
    }
  }

  let largestHorizontalProduct = (grid, adjacency) => {
    let result = [[], 0];
    let currentProduct;
    for (let i = 0; i < grid.length; i++) {
      currentProduct = 1;
      for (let j = 0; j < adjacency; j++) {
        currentProduct *= grid[i][j];
      }
      if (result[1] < currentProduct) {
        result = [[], currentProduct];
        for (let k = 0; k < adjacency; k++) {
          result[0].push(grid[i][k]);
        }
      }

      for (let j = adjacency + 1; j < grid.length; j++) {
        currentProduct /= grid[i][j - 1];
        currentProduct *= grid[i][j];
        if (result[1] < currentProduct) {
          result = [[], currentProduct];
          for (let k = j - adjacency; k < j; k++) {
            result[0].push(grid[i][k]);
          }
        }
      }

    }
    return result;
  }

  let largestVerticalProduct = (grid, adjacency) => {
    let result = [[], 0];

    return result;
  }

  let largestMajorDiagonalProduct = (grid, adjacency) => {
    let result = [[], 0];
    return result;
  }

  let largestMinorDiagonalProduct = (grid, adjacency) => {
    let result = [[], 0];
    return result;
  }


  // MAIN EXECUTION START

  let gridString = string.split(' ');
  let grid = [];
  let size = Math.sqrt(gridString.length);
  adjacency = adjacency || size;
  if (adjacency > size || adjacency < 1) {
    adjacency = size;
  }
  populateGrid();
  //let vertical = largestVerticalProduct(grid, adjacency);
  let horizontal = largestHorizontalProduct(grid, adjacency);
  //let majorDiagonal = largestMajorDiagonalProduct(grid, adjacency);
  //let minorDiagonal = largestMinorDiagonalProduct(grid, adjacency);

  let largest = horizontal;

  /*
  if (vertical[1] > largest[1]) {
    largest = vertical;
  }
  if (majorDiagonal[1] > largest[1]) {
    largest = majorDiagonal;
  }
  if (minorDiagonal[1] > largest[1]) {
    largest = minorDiagonal;
  }
  */

  let result = [[]];
  result.push(largest[1]);
  for (let i = 0; i < largest[0].length; i++) {
    if (largest[0][i] < 10) {
      result[0].push('0' + largest[0][i].toString());
    } else {
      result[0].push(largest[0][i].toString());
    }
  }

  return result;
}


module.exports = largestProductInGrid;