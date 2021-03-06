/*
You are given an array of distinct integers arr and an array of integer arrays
pieces, where the integers in pieces are distinct. Your goal is to form arr by
concatenating the arrays in pieces in any order. However, you are not allowed to
reorder the integers in each array pieces[i].

Return true if it is possible to form the array arr from pieces. Otherwise,
return false.


Example 1:
Input: arr = [85], pieces = [[85]]
Output: true

Example 2:
Input: arr = [15, 88], pieces = [[88], [15]]
Output: true
Explanation: Concatenate [15] then [88]

Example 3:
Input: arr = [49, 18, 16], pieces = [[16, 18, 49]]
Output: false
Explanation: Even though the numbers match, we cannot reorder pieces[0].

Example 4:
Input: arr = [91, 4, 64, 78], pieces = [[78], [4, 64], [91]]
Output: true
Explanation: Concatenate [91] then [4, 64] then [78]

Example 5:
Input: arr = [1, 3, 5, 7], pieces = [[2, 4, 6, 8]]
Output: false

Constraints:
1 <= pieces.length <= arr.length <= 100
sum(pieces[i].length) == arr.length
1 <= pieces[i].length <= arr.length
1 <= arr[i], pieces[i][j] <= 100
The integers in arr are distinct.
The integers in pieces are distinct (i.e., If we flatten pieces in a 1D array,
  all the integers in this array are distinct).
*/

/*
The very small input constraints might make a time inefficent solution viable,
but also make a time efficent and space inefficent solution viable, and I
suspect the latter is preferable.

I think a relatively fast solution is to insert each array element of the matrix
pieces into a matrix of length 100, on the value of the first element in each
array. The input constraints ensure no values above 100 and no duplicates (and
thus no collisions). This should save time when testing whether pieces constains
an array which starts with the next needed value, as it can be found (or not)
directly, without checking the first value of every array in matrix pieces.
*/

const canFormArray = (arr, pieces) => {
  const table = Array(101).fill([]);
  for (let i = 0; i < pieces.length; i++) {
    table[pieces[i][0]] = pieces[i];
  }
  for (let i = 0; i < arr.length; i++) {
    if (table[arr[i]][0] !== arr[i]) {
      return false;
    }
    let k = 0;
    for (let j = 1; j < table[arr[i]].length; j++) {
      k++;
      if (table[arr[i]][j] !== arr[i + k]) {
        return false;
      }
    }
    i += k;
  }
  return true;
};

module.exports = { canFormArray };
