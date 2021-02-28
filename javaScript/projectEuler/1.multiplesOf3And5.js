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


The higher approach uses math insights to jump almost
directly to the solution.

*/

/*
BRUTE FORCE SOLUTION

let multiplesOf3And5 = (number) => {
  let result = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }

  return result;
}

multiplesOf3And5(10);
>> 23

multiplesOf3And5(100);
>> 2318

multiplesOf3And5(1000);
>> 233168

*/

/*
HIGHER SOLUTION

I suspect there's a faster way to calculate the sum of all values
under a target number which are themselves multiples of a chosen
value.

Knowing this method, the problem would be solved something along
the lines of method(1000, 3) + method(1000, 5) - method(1000, 15),
the purpose of the third step being to remove values returned by
both uses of the method (and so counted twice).

The way to arrive at the sum directly isn't immediately clear
to me. I need to analyze some examples.

How would I calculate this by hand?
method(10, 3)

10 / 3 = 3 remainder 1. The value I want is 3 * 3 plus 3 * 2 plus 3 * 1.
This value is 18. Put another way, the value I want is 3 times 3 * 2 * 1,
or using factorial notation, 3 * 3!. This offers the needed shortcut.

I'm surprised to learn there's no factorial support native to js.
I'll need to make my own.

Factorial for positive integers is calculated by taking the input value
and multiplying it by one less than that value, continuing to decrement
and multiply until multiplying by one. The result is then returned.

I MADE A MISTAKE! I want NOT factorial, but Triangular! T3 instead of 3!.
I made this mistake because 3! happens to equal T3 (both are 6).
T4, however, is 10, while 4! is 24, and the divergance accelerates quickly.

After solving using the higher appraoch, I added additional inputs to allow
for solving with different multiples, with default parameters set to 3 and 5.
*/

let multiplesOf3And5 = (target, number1 = 3, number2 = 5) => {
  let triangular = (number) => {
    return (number * (number + 1)) / 2;
  };
  let summedMultiplesOfValue = (target, number) => {
    let result = Math.floor((target - 1) / number);
    result = number * triangular(result);
    return result;
  };
  return (
    summedMultiplesOfValue(target, number1) +
    summedMultiplesOfValue(target, number2) -
    summedMultiplesOfValue(target, number1 * number2)
  );
};

module.exports = multiplesOf3And5;

/*
multiplesOf3And5(10);
>>23

multiplesOf3And5(100);
>>2318

multiplesOf3And5(1000);
>>233168

multiplesOf3And5(10000000000);
>>23333333331666670000

multiplesOf3And5(10000, 4, 7);
>>17847858

multiplesOf3And5(1000000, 11, 13);
>>80419919580

*/
