/*
The sum of the squares of the first ten natural numbers is,
1^2 + 2^2 + ... + 10^2 = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)^2 = 55^2 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

/*
This one seems extremely straigtforward to me, so much so that I worry I'm missing something.
I only need to create two helper functions, one giving me the sum of the squares,
the other giving me the square of the sums. Then I return the difference between them.
Can it be that simple?

It will look something like:
return squareOfSums(100) - sumOfSquares(100);

Sum Of Squares
Let result be 0.
For each value from one up to and including num
  Add the square of that value to result.
Return result.

let sumOfSquares = (num) => {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i * i;
  }
  return result;
}

sumOfSquares(2);
>5

sumOfSquares(10);
>385

sumOfSquares(100);
>338350

Square of Sums
I've seen this sort of problem before, they're solved with triangle numbers.
You can skip right to the final value by multiplying the highest value by one more
than the highest value, then dividing by two.
Return the square of one half of (num * (num + 1).

let squareOfSums = (num) => {
  let sum = (num * (num + 1)) / 2;
  return sum * sum;
}

squareOfSums(3);
36

squareOfSums(10);
3025

squareOfSums(100);
25502500
*/

/*
let sumSquareDifference = (num) => {
  let sumOfSquares = (num) => {
    let result = 0;
    for (let i = 1; i <= num; i++) {
      result += i * i;
    }
    return result;
  }
  let squareOfSums = (num) => {
    let sum = (num * (num + 1)) / 2;
    return sum * sum;
  }
  return squareOfSums(num) - sumOfSquares(num);
}

sumSquareDifference(4);
>70

sumSquareDifference(10);
>2640

sumSquareDifference(100);
>25164150
*/

/*
I wonder if there might be a fast solution for sumOfSquares just as there is for squareOfSums.
It would involve raising numbers to some powers and rooting them by some base, I assume. Let's
see if I can detect some kind of pattern by looking at the solutions for the first 10 natural numbers:

sumOfSquares(1);
>1

sumOfSquares(2);
>5

sumOfSquares(3);
>14

sumOfSquares(4);
>30

sumOfSquares(5);
>55

sumOfSquares(6);
>91

sumOfSquares(7);
>140

sumOfSquares(8);
>204

sumOfSquares(9);
>285

sumOfSquares(10);
>385

Nothing immedieatly jumps out.
EDIT: after online research I've learned the name for the numbers I'm looking for:
Square pyramidal numbers.
The formula for calculating the nth pyramidal number is:
(n * (n + 1) * (2n + 1)) / 6

I think it's safe to say I wouldn't quickly figure this formula out on my own.

Updating sumOfSquares to use this method:

let sumOfSquares = (num) => {
  return ((num) * (num + 1) * ((2 * num) + 1)) / 6;
}

sumOfSquares(2);
>5

sumOfSquares(10);
>385

sumOfSquares(100);
>338350

Updating sumSquareDifferenceL

let sumSquareDifference = (num) => {
  let sumOfSquares = (num) => {
  return ((num) * (num + 1) * ((2 * num) + 1)) / 6;
  }
  let squareOfSums = (num) => {
    let sum = (num * (num + 1)) / 2;
    return sum * sum;
  }
  return squareOfSums(num) - sumOfSquares(num);
}

sumSquareDifference(4);
>70

sumSquareDifference(10);
>2640

sumSquareDifference(100);
>25164150
*/
