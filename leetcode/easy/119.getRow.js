/*
Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.

Notice that the row index starts from 0.

In Pascal's triangle, each number is the sum of the two numbers directly above
it.

Example 1:
Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:
Input: rowIndex = 0
Output: [1]
Example 3:
Input: rowIndex = 1
Output: [1,1]

Constraints:
0 <= rowIndex <= 33
*/

/*
The follow-up to this problem asks whether I can implement a solution that uses
O(k) extra space. I'm going to go for that straightaway, though I can see it
won't be the fastest solution, as that should employ memoization. 
*/

const getRow = (rowIndex) => {
  let result = [1];
  let currentRow = 0;
  while (currentRow < rowIndex) {
    let next = [1];
    for (let i = 0; i < result.length - 1; i++) {
      next.push(result[i] + result[i + 1]);
    }
    next.push(1);
    result = next;
    currentRow++;
  }
  return result;
};

module.exports = { getRow };
