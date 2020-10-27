/*
Given n points on a 2D plane, find the maximum number of points that lie on the
same straight line.

Example 1:

Input: [[1,1],[2,2],[3,3]]
Output: 3
Explanation:
^
|
|        o
|     o
|  o  
+------------->
0  1  2  3  4
Example 2:

Input: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
Output: 4
Explanation:
^
|
|  o
|     o        o
|        o
|  o        o
+------------------->
0  1  2  3  4  5  6
*/

const { check } = require("prettier");

/*
So, the brute force way of solving this is plain enough: draw lines between
every combination of points, describe that line as an expression, and look for
the expression that appears the most often.

Unfortunately, this solution has an exponential time complexity. The only way to
save some processing without changing the method is to note that if any line is
found to contain half the number of points given, or more, the number of points
on that line is the solution.

It seems to me that speeding up this problem will rely upon knowing whether a
point lies on a line without needing to compare it to other points on that line.

And idea is starting to form in my mind that might be little better than brute
force, but it's a place to start. I'll start with one point and compare it to
each other point, finding the function that describes the line between them, and
storing it in an object. Other points are then tested to see if they fall on
that line. A count is made for the number of points, if that is the highest yet
found it replaces that value, and any points that fall on it are noted so no
comparison needs to later be done between any of them.

If a line is found to contain half or more of the points, the number of points
it contains is returned, else the highest found number of points is returned

UPDATE:
The above was implemented and worked well enough for basic examples, but doesn't
take into consideration vertical lines, horizontal lines, and overlapping
points. Each of these require adjustment to the design, overlapping points in
particular. As any line which contains one point in a group of overlapping
points contains all of them, when any point in a known group of overlapping
pointsis found to be contained by a line, all other points in that group should
automatically be known to be also contained by it, and should not later be
tested for the same line. What's more, when overlapping points not yet belonging
to a known group of overlapping points are found, they should be merged to a
group.
*/

let doOverlap = (point1, point2) => {
  return point1[0] === point2[0] && point1[1] === point2[1];
};

let doShareSlope = (point1, point2, point3) => {
  return (
    0n ===
    BigInt(point1[0]) * (BigInt(point2[1]) - BigInt(point3[1])) +
      BigInt(point2[0]) * (BigInt(point3[1]) - BigInt(point1[1])) +
      BigInt(point3[0]) * (BigInt(point1[1]) - BigInt(point2[1]))
  );
};

let maxPoints = (array) => {
  if (array.length < 3) {
    return array.length;
  }
  let highestFound = 2;
  let pointsOnCurrentSlope;
  let points = [];
  let checked = [];
  let overlaps = [];

  let isNotAKnownOverlap = (index) => {
    return overlaps[index] === undefined;
  };

  let isNotAlreadyChecked = (index1, index2) => {
    return (
      overlaps[index1] === undefined &&
      overlaps[index2] === undefined &&
      checked[index1][index2] === undefined
    );
  };

  let initializeChecked = (index) => {
    if (checked[index] === undefined) {
      checked[index] = [];
    }
  };

  for (let i = 0; i < array.length - 1; i++) {
    if (isNotAKnownOverlap(i)) {
      array[i][2] = 1;
      for (let j = i + 1; j < array.length; j++) {
        if (isNotAKnownOverlap(j)) {
          if (doOverlap(array[i], array[j])) {
            overlaps[j] = true;
            array[i][2]++;
            if (array[i][2] > highestFound) {
              highestFound = array[i][2];
            }
          }
        }
      }
    }
  }
  if (overlaps[array.length - 1] === undefined) {
    array[array.length - 1][2] = 1;
  }

  for (let i = 0; i < array.length - 1; i++) {
    initializeChecked(i);
    for (let j = i + 1; j < array.length; j++) {
      initializeChecked(j);
      if (isNotAlreadyChecked(i, j)) {
        checked[i][j] = true;
        pointsOnCurrentSlope = array[i][2] + array[j][2];
        points = [j];
        for (let k = j + 1; k < array.length; k++) {
          if (isNotAlreadyChecked(j, k)) {
            if (doShareSlope(array[i], array[j], array[k])) {
              pointsOnCurrentSlope += array[k][2];
              points.push(k);
            }
          }
        }
        for (let y = 0; y < points.length - 1; y++) {
          for (let z = y + 1; z < points.length; z++) {
            initializeChecked(points[y]);
            checked[points[y]][points[z]] = true;
          }
        }
        if (pointsOnCurrentSlope > array.length / 2) {
          return pointsOnCurrentSlope;
        } else if (pointsOnCurrentSlope > highestFound) {
          highestFound = pointsOnCurrentSlope;
        }
      }
    }
  }
  return highestFound;
};

module.exports = { maxPoints };
