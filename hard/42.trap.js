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

module.exports = { trap };
