/*
Write an efficient algorithm that searches for a target value in an m x n
integer matrix. The matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
 

Example 1:
Input: matrix =
[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],
target = 5
Output: true

Example 2:
Input: matrix =
[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],
target = 20
Output: false
 
Constraints:
m == matrix.length
n == matrix[i].length
1 <= n, m <= 300
-10^9 <= matix[i][j] <= 10^9
All the integers in each row are sorted in ascending order.
All the integers in each column are sorted in ascending order.
-10^9 <= target <= 10^9
*/

/*
It's taken a large amount of time just deciding what the best way to come at
this one is. It's a very interesting challenge, because there are so many ways
it could be solved, but input size demands that it be solved efficently. With
both rows and columns sorted in ascending order, it's not easy to use one number
to help determine the direction of another number.
Squares seems to be a key to quickly narrowing down the row or column the number
must be in, if it exists in the matrix at all. The first element of the first
array must be the smallest element in the entire array, and the last element in
the last array must be the largest. Beyond that, while it's easy to know that
all elements strictly to the right of a given element or strictly below an
element will be larger than it, as will all elements both to the right AND below
it, and while it's easy to know that all elements stricly to the left of a given
element or strictly above an element will be smaller than it, as will all
elements both to the left of it AND above it, nothing can be known the numbers
above and to the right of an element, or below and to the left of an element.
*/

const searchMatrix = (matrix, target) => {
  let result = false;
  let left = 0;
  let right = matrix.length - 1;
  let cut = Math.floor((left + right) / 2);
  while (left < right - 1) {
    if (matrix[cut][cut] >= target) {
      right = cut;
    } else {
      left = cut;
    }
    cut = Math.floor((left + right) / 2);
  }
  cut++;
  let edge = cut;
  result = matrix[edge][edge] === target ? true : result;
  if (!result) {
    if (matrix[edge][matrix.length - 1] > target) {
      edge++;
    }
    left = 0;
    right = matrix.length - 1;
    cut = Math.floor((left + right) / 2);
    while (left < right - 1) {
      if (matrix[edge][cut] >= target) {
        right = cut;
      } else {
        left = cut;
      }
      cut = Math.floor((left + right) / 2);
    }
    result = matrix[edge][cut] === target ? true : result;
  }
  if (!result) {
    left = 0;
    right = matrix.length - 1;
    cut = Math.floor((left + right) / 2);
    while (left < right - 1) {
      if (matrix[cut][edge] >= target) {
        right = cut;
      } else {
        left = cut;
      }
      cut = Math.floor((left + right) / 2);
    }
    result = matrix[cut][edge] === target ? true : result;
  }
  return result;
};

module.exports = { searchMatrix };
