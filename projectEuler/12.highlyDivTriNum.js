/*
The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

Let us list the factors of the first seven triangle numbers:

1: 1
3: 1,3
6: 1,2,3,6
10: 1,2,5,10
15: 1,3,5,15
21: 1,3,7,21
28: 1,2,4,7,14,28
We can see that 28 is the first triangle number to have over five divisors.

What is the value of the first triangle number to have over five hundred divisors?
*/

/*
Right away I get the sense that there might be a fast solution using math.
The brute force solution is straightforward enough. Using object-oriented design,
build a function to generate the sequence of triangle numbers, build a function to
return the divisors of a number input, and feed the first function into the second
one until one with 501 divisors is found.

There should be a fast solution, and perhaps it can be found by analizing the divisors
not only of triangle numbers, but of all numbers. I'll build a brute force solution
first and then come back for the fast solution.

UPDATE:
As suspected, the brute force method is effective for small target values (less than
200), but takes ages to calculate for target quantities of divisors much higher.
Finding the triangle number with more than 400 divisors, on my machine, took over 3 minutes, and finding the triangle number with more than 500 divisors took almost 12 minutes. A faster method is needed.

*/

/*
Highest-level execution will look something like:

target = 500

while (divisors(triangles[triangles.length - 1]) <= target) {
  findNextTriangle();
}
return triangles[triangles.length - 1];

*/

  /*
  function to generate triangle numbers
  */

let findNextTriangle = (array) => {
  let currentValue = array[array.length - 1];
  currentValue += array.length + 1;
  array.push(currentValue);
  return;
}

/*
function to return an array of the divisors of an input number
*/

let divisors = (num) => {
  let result = [1];
  if (num <= 1) {
    return result;
  }
  let currentValue = 2;
  while (currentValue <= num / 2) {
    if (num % currentValue === 0) {
      result.push(currentValue);
    }
    currentValue++;
  }
  result.push(num);
  return result;
}

let highlyDivTriNum = (target) => {
  let triangles = [1];
  while (divisors(triangles[triangles.length - 1]).length <= target) {
    findNextTriangle(triangles);
  }
  return triangles[triangles.length - 1];
}

/*
highlyDivTriNum(2);
>6

highlyDivTriNum(5);
>28

highlyDivTriNum(100);
>73920

highlyDivTriNum(200);
>2031120

highlyDivTriNum(300);
>2162160

highlyDivTriNum(400);
>17907120

highlyDivTriNum(500);
>76576500

*/

module.exports = {findNextTriangle, divisors, highlyDivTriNum};