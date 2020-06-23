/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/

/*
I can see a brute force approach, and a higher approach.

The brute force approach considers every value between 1 and 1000.
For each value, if the value is a multiple of 3 OR 5,
  the value is added to a running total.

The total is then returned.


The higher approach uses math insights to jump directly to the solution.

*/

let summedMultiplesOf3And5 = (number) => {
  let result = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }

  return result;
}