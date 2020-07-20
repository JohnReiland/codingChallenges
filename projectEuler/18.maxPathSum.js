/*
By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

   3
  7 4
 2 4 6
8 5 9 3

That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom of the triangle below:

                     75
                    95 64
                  17 47 82
                 18 35 87 10
               20 04 82 47 65
              19 01 23 75 03 34
            88 02 77 73 07 63 67
           99 65 04 28 06 16 70 92
         41 41 26 56 83 40 80 70 33
        41 48 72 33 47 32 37 16 94 29
      53 71 44 65 25 43 91 52 97 51 14
     70 11 33 28 77 73 17 78 39 68 17 57
   91 71 52 38 17 14 91 43 58 50 27 29 48
  63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23

NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)
*/

/*
Oh, I'll be aiming for the clever method.
I have an intuition for a solution that I don't think counts as brute force,
though it requires non-trivial work. For each row, starting with second from bottom,
compare each pair of values below it and add the larger. Then repeat with the third
from the bottom, and continue until you reach the top. This lets each level represent
the largest possible path to the bottom without searching every possible path.

Now, how to build it with object-oriented programming. The input format isn't given,
but if I were designing it, I would use an array of arrays. The first array within the
array would have one element in it (75). The next would have two, and so in. I see no
reason why this is an unreasonable format, so that's what I'll go with.

I'll create a helper function which collapses two arrays, returning a new array. Then
I'll cycle all rows through it and return the only element in the final array.
*/

let collapseRow = (array1, array2) => {
  let result = [];

  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i] + (array2[i] > array2[i + 1] ? array2[i] : array2[i + 1]));
  }

  return result;
}

/*
collapseRow([1], [2, 3]);
>[4]

collapseRow([1, 2, 3, 4], [5, 6, 7, 8, 9]);
>[7, 9, 11, 13]
*/

module.exports = {collapseRow};