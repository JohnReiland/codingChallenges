/*
We draw N discs on a plane. The discs are numbered from 0 to N − 1. An array A of N non-negative integers, specifying the radiuses of the discs, is given. The J-th disc is drawn with its center at (J, 0) and radius A[J].

We say that the J-th disc and K-th disc intersect if J ≠ K and the J-th and K-th discs have at least one common point (assuming that the discs contain their borders).

The figure below shows discs drawn for N = 6 and A as follows:

  A[0] = 1
  A[1] = 5
  A[2] = 2
  A[3] = 1
  A[4] = 4
  A[5] = 0


There are eleven (unordered) pairs of discs that intersect, namely:

discs 1 and 4 intersect, and both intersect with all the other discs;
disc 2 also intersects with discs 0 and 3.
Write a function:

function solution(A);

that, given an array A describing N discs as explained above, returns the number of (unordered) pairs of intersecting discs. The function should return −1 if the number of intersecting pairs exceeds 10,000,000.

Given array A shown above, the function should return 11, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [0..2,147,483,647].
*/

/*
Reflection:
So the numbers represent the radii of discs, each centered on thier index
within the array, so the disc with the radius given in array[0] will be
centered on 0; array[1] will be centered on 1, etc.

That these discs have surface area is superfluous information; all that
matters is where their perimeter crosses the x-axis. The potential size
of these discs is daunting. They could potentially be 4,294,967,294 across,
though since N can only be between 0 and 100,000 inclusive, any disc with
a radius of 100,001 or greater must intersect every other disc.

There could also be a tremendous number of discs, and each disc needs to be
checked for intersection with each other disc. Is there any way to efficently
check for new intersections as each new disc is added? How can I cleverly and
efficiently test whether one range contains another range? That's what I really
have here, a bunch of ranges. They have unusual properties and are stored in
an unusual way, but they are ranges.

I think rather than keeping track of what areas in space are covered by what
discs, each new disc should be checked for intersection against all existing
discs. Each new disc will be centered to the right of all previous discs.
No previous disc can intersect with anything to the right of the new disc's
left limit without also intersecting with the new disc's left limit. Thus,
this is the only point that needs to be compared to other discs. Similarly,
all previous discs will be centered to the left of the new disc, and so no part
of any of them can interset with the new disc without the right limit of those
discs also intersecting. Thus only the right limit of all other discs need be
compared. As a new disc is consitered, its radius should be subtracted and added
to its index. These give the left and right limits of the disc. Any other disc
with a right limit equal to or greater than the left limit of the new disc can
be said to interset it.

For the example,
[1, 5, 2, 1, 4, 0]
becomes
[
  [-1, 1], [-4, 6], [0, 4], [2, 4], [0, 8], [5, 5]
]

The first element:  has no other to compare against.
The second element: 1 is greater than or equal to -1      1 intersection
The third element:  1 is greater than or equal to 0
                    6 is greater than or equal to 0       3 intersections
The forth element:  1 is NOT greater than or equal to 2
                    6 is greater than or equal to 2
                    4 is greater than or equal to 2       5 intersections
Leeloo:             1 is greater than or equal to 0
                    6 is greater than or equal to 0
                    4 is greater than or equal to 0
                    4 is greater than or equal to 0       9 intersections
                    1 is NOT greater than or equal to 5
                    6 is greater than or equal to 5
                    4 is NOT greater than or equal to 5
                    4 is NOT greater than or equal to 5
                    8 is greater than or equal to 5       11 intersections

This method gives the correct result, and should be reasonably fast, with
polynomial time complexity. I guess I'll see if that's fast enough.
*/

/*
Construction:
In what ways this be made object-oriented?
I can make a function to test whether two discs intersect, built
with the assumption that the center of the second disc is to the
right of the center of the first disc.

Then the main function passes, for each new disc, it and every
previous disc, counting the number of new intersections. It does
this only while the number of intersections is less than or equal
to 10,000,000 AND there are more discs to test.

Then, if the number of intersections is greater than 10,000,000, it
returns -1.
Else, the number of intersections
*/

let doesIntersect = (range1, range2) => {
  return range1[1] >= range2[0] ? true : false;
}

module.exports = {doesIntersect}