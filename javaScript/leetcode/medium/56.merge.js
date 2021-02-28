/*
Given an array of intervals where intervals[i] = [starti, endi], merge all
overlapping intervals, and return an array of the non-overlapping intervals that
cover all the intervals in the input.


Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

Constraints:
1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
*/

const merge = (intervals) => {
  const sorted = intervals.sort(function (a, b) {
    return a[0] - b[0];
  });
  const merged = [];
  let currentInterval = sorted[0];
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i][0] <= currentInterval[1]) {
      currentInterval[1] = Math.max(sorted[i][1], currentInterval[1]);
    } else {
      merged.push(currentInterval);
      currentInterval = sorted[i];
    }
  }
  if (!merged.length || currentInterval[1] !== merged[merged.length - 1][1]) {
    merged.push(currentInterval);
  }
  return merged;
};

module.exports = { merge };
