/*
Given a non-negative integer numRows, generate the first numRows of Pascal's
triangle.


In Pascal's triangle, each number is the sum of the two numbers directly above
it.

Example:
Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

const generate = (numRows) => {
  if (!generate.record) {
    generate.record = [[], [1], [1, 1]];
    generate.highest = 2;
  }
  let result = [];
  if (numRows !== 0) {
    while (generate.highest < numRows) {
      let next = [1];
      for (let i = 0; i < generate.record[generate.highest].length - 1; i++) {
        next.push(
          generate.record[generate.highest][i] +
            generate.record[generate.highest][i + 1]
        );
      }
      next.push(1);
      generate.record.push(next);
      generate.highest++;
    }
    result.push([1]);
    let pushed = 2;
    while (pushed <= numRows) {
      result.push(generate.record[pushed]);
      pushed++;
    }
  }
  return result;
};

module.exports = { generate };
