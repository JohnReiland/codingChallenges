/*
Given a positive integer num, generate an num x num matrix filled with elements
from 1 to num2 in spiral order.


Example 1:
Input: num = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]

Example 2:
Input: num = 1
Output: [[1]]


Constraints:

1 <= num <= 20
*/

const generateMatrix = (num) => {
  let result = [];
  for (let i = 0; i < num; i++) {
    result.push([]);
  }
  let k = num - 1;
  let j = 0;
  let i = 1;
  while (i <= num) {
    result[j].push(i);
    i++;
  }
  j++;
  while (j < num) {
    result[j][k] = i;
    j++;
    i++;
  }
  j--;
  k--;
  while (k >= 0) {
    result[j][k] = i;
    i++;
    k--;
  }
  j--;
  k++;
  let direction = "up";
  while (i <= num * num) {
    switch (direction) {
      case "up":
        while (!result[j][k]) {
          result[j][k] = i;
          i++;
          j--;
        }
        j++;
        k++;
        direction = "right";
        break;
      case "right":
        while (!result[j][k]) {
          result[j][k] = i;
          i++;
          k++;
        }
        k--;
        j++;
        direction = "down";
        break;
      case "down":
        while (!result[j][k]) {
          result[j][k] = i;
          i++;
          j++;
        }
        j--;
        k--;
        direction = "left";
        break;
      case "left":
        while (!result[j][k]) {
          result[j][k] = i;
          i++;
          k--;
        }
        k++;
        j--;
        direction = "up";
        break;
    }
  }
  return result;
};

module.exports = { generateMatrix };
