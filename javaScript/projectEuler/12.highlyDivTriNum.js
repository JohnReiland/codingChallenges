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
Finding the triangle number with more than 400 divisors, on my machine, took over 3
minutes, and finding the triangle number with more than 500 divisors took almost 12
minutes. A faster method is needed.

I created a list of divisors for all natural numbers, but I didn't see anything that would
help predict that, for example, 12 would  have 6 divisors, which is 2 more divisors than any
number that comes before it. Since each number, once encountered, can be found as a divisor
on numbers following it, at a frequency equal to its size, looking for a number with a lot
of divisors is a bit like looking for a point where a lot of waves happen to overlap. But
knowing this doesn't immedieatly help me to percieve a way to predict such an overlap. My
continuing the insertion of numbers by the frequency of their value, I can find the divisors
of the next numbers without really considering the numbers. But I still don't see how it
helps me predict a value with a large number of divisors without testing each individual value.

UPDATE_2:
After looking online, I learned that there is some sort of relationship between the ordinal
of a triangle number and the number of diviors it will have. This presents an opporunity to
more quickly calculate the number of divisors a number will have, without taking the time to
find those divisors and count them. I saw the math, but didn't examine it too closely, as I
want to understand it deeply by working it out by myself, if possible. Rather than consider
all natural numbers, I'll consider only triangle numbers, and the relationship between the
number of divisors a number has vs its ordinal as a triangle number.

UPDATE_3
Reading more into the math side of things, the relationship between the ordinal of the
triangle number and its number of divisors is complex. It's not something easily seen,
at least by me. The fast method for finding the number of divisors for a given ordinal
of triangle numbers (the nth triangle number), depends on whether n is even or odd.
If n is even, then the number of divisors in the nth triangle number is equal to the
number of divisors in n/2, multiplied by the number of divisors in n+1.

So without even knowing the 100th triangle number, we can know that its number of divisors
is equal to the number of divisors of 50, times the number of divisors of 101.
The divisors of 50 are 1, 2, 5, 10, 25, 50 (6). 101 is prime. Its divisors are 1, 101 (2).
This the 100th triangle number will have 12 divisors.

Is this true? Well, the 100th triangle number is 5050. The divisors of 5050 are 1, 2, 5, 10,
25, 50, 101, 202, 505, 1010, 2525, 5050 (12). It works!

This will be exceedingly fast. To find the solution, I don't need to generate a list of triangle
numbers, and I don't need to find the divisors of that number. I can directly calculate the
number of divisors until I find one greater than the target, then find that triangle number
directly using (n(n+1)) / 2.

It bothers me that I don't understand WHY the number of divisors for a triangle number can
be found this way, but I can explore that more deeply another time.
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
Not Needed for Fast Method!

let findNextTriangle = (array) => {
  let currentValue = array[array.length - 1];
  currentValue += array.length + 1;
  array.push(currentValue);
  return;
}
 */

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
};

/*
main function
BRUTE FORCE METHOD

let highlyDivTriNum = (target) => {
  let triangles = [1];
  while (divisors(triangles[triangles.length - 1]).length <= target) {
    findNextTriangle(triangles);
  }
  return triangles[triangles.length - 1];
}
*/

/*
function to return the number of divisors of the nth triangle number
*/

let divisorsOfNthTriNum = (n) => {
  if (n % 2 === 0) {
    return divisors(n / 2).length * divisors(n + 1).length;
  } else {
    return divisors(n).length * divisors((n + 1) / 2).length;
  }
};

/*
main function
FAST METHOD
*/

let highlyDivTriNum = (target) => {
  let n = 1;
  while (divisorsOfNthTriNum(n) <= target) {
    n++;
  }
  return (n * (n + 1)) / 2;
};

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

module.exports = { divisors, divisorsOfNthTriNum, highlyDivTriNum };
