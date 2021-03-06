/*
A city's skyline is the outer contour of the silhouette formed by all the
buildings in that city when viewed from a distance. Now suppose you are given
the locations and height of all the buildings as shown on a cityscape photo
(Figure A), write a program to output the skyline formed by these buildings
collectively (Figure B).

Buildings Skyline Contour
The geometric information of each building is represented by a triplet of
integers [Li, Ri, Hi], where Li and Ri are the x coordinates of the left and
right edge of the ith building, respectively, and Hi is its height. It is
guaranteed that 0 ≤ Li, Ri ≤ INT_MAX, 0 < Hi ≤ INT_MAX, and Ri - Li > 0. You may
assume all buildings are perfect rectangles grounded on an absolutely flat
surface at height 0.

For instance, the dimensions of all buildings in Figure A are recorded as:
[ [2 9 10], [3 7 15], [5 12 12], [15 20 10], [19 24 8] ] .

The output is a list of "key points" (red dots in Figure B) in the format of
[ [x1,y1], [x2, y2], [x3, y3], ... ] that uniquely defines a skyline. A key
point is the left endpoint of a horizontal line segment. Note that the last key
point, where the rightmost building ends, is merely used to mark the termination
of the skyline, and always has zero height. Also, the ground in between any two
adjacent buildings should be considered part of the skyline contour.

For instance, the skyline in Figure B should be represented as:
[ [2 10], [3 15], [7 12], [12 0], [15 10], [20 8], [24, 0] ].


Notes:

The number of buildings in any input list is guaranteed to be in the range
[0, 10000].
The input list is already sorted in ascending order by the left x position Li.
The output list must be sorted by the x position.
There must be no consecutive horizontal lines of equal height in the output
skyline. For instance,
[...[2, 3], [4, 5], [7, 5], [11, 5], [12, 7]...]
is not acceptable; the three lines of height 5 should be merged into one in the
final output as such:
[...[2, 3], [4, 5], [12, 7], ...]

Example 1:
Input: buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]
Output: [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]

Example 2:
Input: buildings = [[0,2,3],[2,5,3]]
Output: [[0,3],[5,0]]

Constraints:

1 <= buildings.length <= 10^4
0 <= lefti < righti <= 2^31 - 1
1 <= heighti <= 2^31 - 1
buildings is sorted by lefti in non-decreasing order.

*/

/*
This one is very interesting. I think that while individual elements are
described as rectangles, what solving this challenege might really boil down to
are pairs of values, each of which is handled seperately. One value is height,
and a number of heights must be tracked in a sorted fashion, but only the
largest valid one matters.
The other value is width, which represents a sort of expiration date for a
given height. As the considered point on the horizonal increases, particular
heights stop being valid.

I imagine a linke dlist of height-end pairs, kept sorted by height in decreasing
order.
As new values are added to the array, if they are taller than the currently
tallest valid value they take their place at the head of the linked list.
Otherwise they are passed through the list until they reach their proper place. 
*/

const getSkyline = (buildings) => {
  const heightStack = [];
};

module.exports = { getSkyline };
