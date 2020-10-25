/*
Given n non-negative integers representing an elevation map where the width of
each bar is 1, compute how much water it can trap after raining.

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array
[0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section)
are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9

Constraints:

n == height.length
0 <= n <= 3 * 104
0 <= height[i] <= 105
*/

/*
The specifics are something I still need to work out, but I can envision an
array that fills with "potential" water. The value of each element represents
the amount of potential to count if an elevation at a height equal to that
element's index is encountered.
*/

/*
UPDATE:
I have a working solution, however it's not efficient enough for large datasets.
I'll need to come up with something better. 
*/

/*
UPDATE2:
I've got a much more efficient solution working. It handles encountering peaks
much more elegantly, and eliminates needless branching and redundant code.
*/

/*
let trap = (height) => {
  if (height.length < 3) {
    return 0;
  }
  let potential = [0];
  let result = 0;
  let highest = 0;
  for (let i = 0; i < height.length; i++) {
    while (potential.length - 1 < height[i]) {
      potential.push(0);
    }
    for (let j = 0; j < potential.length; j++) {
      if (height[i] > highest) {
        highest = height[i];
      }
      if (j < height[i]) {
        result += potential[j];
        potential[j] = 0;
      } else if (j < highest) {
        potential[j]++;
      }
    }
  }
  return result;
};

trap([[0,1,0,2,1,0,1,3,2,1,2,1]]);
>6

trap([4,2,0,3,2,5]);
>9
*/

/*
let trap = (height) => {
  if (height.length < 3) {
    return 0;
  }
  let result = 0;
  let ridges = [];
  let scoutIndex = 0;
  while (height[scoutIndex + 1] >= height[scoutIndex]) {
    scoutIndex++;
  }
  ridges.unshift([height[scoutIndex], scoutIndex]);

  for (let i = scoutIndex + 1; i < height.length; i++) {
    let backtrack = 0;
    if (height[i] > ridges[0][0]) {
      if (height[i] < ridges[ridges.length - 1][0]) {
        while (height[i] > ridges[0][0]) {
          let pull = ridges.shift();
          result += (height[i] - pull[0]) * (i - backtrack - pull[1]);
          backtrack = i - pull[1];
        }
      } else {
        let peak = ridges.pop();
        while (ridges.length > 0) {
          let pull = ridges.pop();
          result += (peak[0] - pull[0]) * (pull[1] - peak[1] - backtrack);
          backtrack = pull[1] - peak[1];
        }
        ridges.unshift([height[i], i]);
      }
    }
    if (height[i] !== ridges[0][0]) {
      ridges.unshift([height[i], i]);
    } else {
      ridges[0][1] = i;
    }
  }
  return result;
};
*/

let trap = (height) => {
  if (height.length < 3) {
    return 0;
  }
  let result = 0;

  // Initialize ridges array
  let ridges = []; // Value pairs are stored in format [height, index]
  let scoutIndex = 0;
  while (height[scoutIndex + 1] >= height[scoutIndex]) {
    scoutIndex++;
  }
  ridges.unshift([height[scoutIndex], scoutIndex]);

  // Main code execution start
  for (let i = scoutIndex + 1; i < height.length; i++) {
    if (height[i] > ridges[0][0]) {
      while (height[i] > ridges[0][0] && ridges.length > 1) {
        result += (height[i] - ridges[0][0]) * (ridges[0][1] - ridges[1][1]);
        ridges.shift();
      }
      if (height[i] > ridges[0][0]) {
        result -= (height[i] - ridges[0][0]) * (i - ridges[0][1] - 1);
        ridges.shift();
        ridges.unshift([height[i], i]);
      }
    }
    if (height[i] === ridges[0][0]) {
      ridges[0][1] = i;
    } else {
      ridges.unshift([height[i], i]);
    }
  }
  return result;
};

module.exports = { trap };
