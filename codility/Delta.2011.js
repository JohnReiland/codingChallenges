/*
For a given array A of N integers and a sequence S of N integers from the set {−1, 1}, we define val(A, S) as follows:

val(A, S) = |sum{ A[i]*S[i] for i = 0..N−1 }|

(Assume that the sum of zero elements equals zero.)

For a given array A, we are looking for such a sequence S that minimizes val(A,S).

Write a function:

function solution(A);

that, given an array A of N integers, computes the minimum value of val(A,S) from all possible values of val(A,S) for all possible sequences S of N integers from the set {−1, 1}.

For example, given array:

  A[0] =  1
  A[1] =  5
  A[2] =  2
  A[3] = -2
your function should return 0, since for S = [−1, 1, −1, 1], val(A, S) = 0, which is the minimum possible value.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..20,000];
each element of array A is an integer within the range [−100..100].
*/

/*
The question alone took awhile for me to wrap my head around. I think the sticking point was twofold:
first was understanding that EACH element in seqence S is independantly selected from the set {-1, 1}.
The second is that what's wanted is the minimum ABSOLUTE value sum. This really should be stated explicitly,
as, for S = [-1, -1, -1, 1], val(A, S) = -10, which is smaller than 0.


In any case, what we have is an unsorted array of values, and their sign doesn't really matter. The goal is
to sum the values as closely as possible to zero by changing their signs, and only the sum matters.

Doing this by brute force is straightforward. Sum the values for every possible combination of signs, and
keep track of the smallest absolute value found. When all combinations have been attempted, return the
smallest found. This solution isn't efficent, however.

The first idea I have for solving this faster involves sorting the absolute values of the array, and then,
starting with the largest value, flipping the signs of smaller values as needed to minimize the current sum.
So A, sorted, would be: [5, 2, 2, 1]. 5 is positive, so 2 would be made negative. Summing them yields 3.
3 is positive, so the second 2 would be made negative. Summing them yelds 1. 1 is positive, so 1 would be
made negative. Summing them yields 0.

I don't think it's perfect, but I think it's worth building and playing with.
*/

/*
UPDATE:
I've built it, it works fine for the example, and I believe it ought to be efficient, but does it always produce
the right answer? Can I prove mathematically that it does?

I can be fairly certain that it produces a reasonably good answer, as it kind of crushes the large values down into
small values, and then uses small values to negate them, but I worry that there might be clever ways to combine
large values and reduce them, something along the lines of, the difference between these two values is the same as
the difference between these two values, and so they can be used to cancel each other out. What happens if I feed
such values into my function?

For all values, I can come up with, it seems to work. It appears to function like the positions of points that
produce parallel lines. You can move one like however you like, but it remains parallel.

I remain uncertain that my method always works, but feel strongly that if it always works, it should
be more than efficent enough. I think to prove that it works, I need to build the brute force solution as well.

UPDATE 2:
I've built a brute force function to test the results of my fast function. It seems to work correctly.
I entered two long and random arrays and both my functions returned the same output, with my true solution doing so
in no time at all. I'm ready to submit.

UPDATE 3:
I submitted with lackluster results. There were simple cases where my solution
returned the wrong result, such as [3, 3, 3, 4, 5];

The three 3s can be summed to 9, as can the 4 and 5. I'm disappointed I wasn't
able to concieve of this simple counterexample. My tests would have revealed an error
in my solution, had I concieved of this test case.

Solving this error requires some thought. I suspect that I could find other cases
which also fail. I have: [8, 8, 8, 8, 8, 8, 14, 16, 18]. In both cases, larger values that would otherwise be used to cancel each other are instead added. Where canceling them would result in a small value that can't be evenly negated, the larger value can be regated evenly.
[3, 3, 3, 4, 5] is a case where two values are used this way.
[8, 8, 8, 8, 8, 8, 14, 16, 18] is a case where three are.
[21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 43, 47, 53, 59, 71] is a case where 5 are.

In all these cases, The values at the start end up being summed to half the value of the total.

*/

/*
HELPER FUNCTIONS
*/

let maxBinary = (num) => {
  let value = "";
  for (let i = 0; i < num; i++) {
    value += "1"
  }
  return value;
}

let binToInt = (string) => {
  return parseInt(string, 2);
}

let rangeArray = (num) => {
  let result = [];
  for (let i = 1; i <= num; i++) {
    result.push(i);
  }
  return result;
}

let intToBin = (num) => {
  return num.toString(2);
}

let binArray = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(intToBin(array[i]));
  }
  return result;
}

let generateS = (array) => {
  let result = [];
  let length = array.length;
  let bin = binArray(rangeArray(binToInt(maxBinary(array.length))))
  for (let i = 0; i < bin.length; i++) {
    let current = [];
    let value = bin[i];
    while (value.length < length) {
      value = "0" + value;
    }
    for (let j = 0; j < value.length; j++) {
      current.push(value[j] === "0" ? 1 : -1);
    }
    result.push(current);
  }
  let current = [];
  while (current.length < length) {
    current.push(1);
  }
  result.unshift(current);
  return result;
}

let applyS = (A, S) => {
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i] * S[i];
  }
  return Math.abs(sum);
}

let bruteForce = (array) => {
  if (array.length === 0) {
    return 0;
  }
  let arrayS = generateS(array);
  let smallestFound = applyS(array, arrayS[0]);
  for (let i = 1; i < arrayS.length; i++) {
    if (applyS(array, arrayS[i]) < smallestFound) {
      smallestFound = applyS(array, arrayS[i]);
    }
  }
  return smallestFound;
}

let convertArrayToAbs = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(Math.abs(array[i]));
  }
  return result;
}

let sortArrayDesc = (array) => {
  return array.sort(function (a, b) {
    return b - a;
  });
}

/*
MAIN FUNCTION
*/

let minAbsSum = (array) => {
  if (array.length === 0) {
    return 0;
  }
  let converted = sortArrayDesc(convertArrayToAbs(array));
  let sum = converted[0];
  for (let i = 1; i < converted.length; i++) {
    sum += sum < 0 ? converted[i]: converted[i] * -1;
  }
  return Math.abs(sum);
}

module.exports = { sortArrayDesc, convertArrayToAbs, minAbsSum, maxBinary, binToInt, rangeArray, intToBin, binArray, generateS, bruteForce };