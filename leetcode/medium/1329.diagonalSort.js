/*
A matrix diagonal is a diagonal line of cells starting from some cell in either
the topmost row or leftmost column and going in the bottom-right direction until
reaching the matrix's end. For example, the matrix diagonal starting from
mat[2][0], where mat is a 6 x 3 matrix, includes cells mat[2][0], mat[3][1],
and mat[4][2].

Given an m x n matrix mat of integers, sort each matrix diagonal in ascending
order and return the resulting matrix.

Example 1:
Input: mat =
[
  [3,3,1,1],
  [2,2,1,2],
  [1,1,1,2]
]
Output:
[
  [1,1,1,1],
  [1,2,2,2],
  [1,2,3,3]
]

Constraints:
m == mat.length
n == mat[i].length
1 <= m, n <= 100
1 <= mat[i][j] <= 100
*/

/*
I don't work with matricies enough to know if there's a clever way to grab
or assign values from/to multiple arrays faster than by nested iteration. As
that's all I currently know, that's what I'll use, but I'll be interested to see
if there's a better way I have yet to learn.
*/

const diagonalSort = (mat) => {
  const m = mat.length;
  const n = mat[0].length;
  const asc = (a, b) => {
    return a - b;
  };
  const flatten = (arr) => [].concat(...arr);
  let diag = [];
  const result = [];
  for (let i = m - 1; i >= 0; i--) {
    result.push([]);
    let tmp = [];
    for (let j = i, k = 0; j < m; j++, k++) {
      tmp.push(mat[j][k]);
    }
    diag.push(tmp.sort(asc));
  }
  for (let i = 1; i < n; i++) {
    let tmp = [];
    for (let j = 0, k = i; j < m && k < n; j++, k++) {
      tmp.push(mat[j][k]);
    }
    diag.push(tmp.sort(asc));
  }
  diag = flatten(diag);
  let l = 0;
  for (let i = m - 1; i >= 0; i--) {
    for (let j = i, k = 0; j < m && k < n; j++, k++) {
      result[j][k] = diag[l];
      l++;
    }
  }
  for (let i = 1; i < n; i++) {
    for (let j = 0, k = i; j < m && k < n; j++, k++) {
      result[j][k] = diag[l];
      l++;
    }
  }
  return result;
};

module.exports = { diagonalSort };
