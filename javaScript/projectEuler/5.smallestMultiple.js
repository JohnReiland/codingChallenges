/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

/*
Playing around with a calculator after reading the prompt for this challenge, a few things became clear:
* The solution will best be found by identifying a method for adding the correct factors to a list and
  then multiplying all factors.
* Every prime number within the range of numbers must be included in the list of factors.
* Non-prime numbers that can be made by multiplying factors already in the list need not add new factors
  to it.

I suspect this is best solved with a helper function that returns the prime factors of a given number.
Then, for each value from one to the target number, if that value is prime, it is added to the list of
factors. If the value is not prime, the prime factors for that value are found, and compared to factors
already on the list. If all of the factors are already present in the list, and present as many times as
in the prime factors result, no additional factors need be added to the list. Otherwise, additional
instances of primes already on the list are added.

Illustration:
method(10); // find the smallest positive number that is evenly divisible by all numbers from 1 to 10

(all numbers are divisible by 1, so 1 need never be considered)

list of factors: []

2 is prime. It is added to the list
  list of factors: [2]

3 is prime. It is added to the list
list of factors: [2, 3]

4 is not prime. Its prime factors are [2, 2]
  As there is only one 2 in the list, another 2 must be added
  list of factors: [2, 3, 2]

5 is prime. It is added to the list
  list of factors: [2, 3, 2, 5]

6 is not prime. Its prime factors are [2, 3]
  As both of these factors are already in the list, no more must be added
  list of factors: [2, 3, 2, 5]

7 is prime. It is added to the list
  list of factors: [2, 3, 2, 5, 7]

8 is not prime. Its prime factors are [2, 2, 2]
  As there are only two 2s in the list, another 2 must be added
  list of factors: [2, 3, 2, 5, 7, 2]

9 is not prime. Its prime factors are [3, 3]
  As there is only one 3 in the list, another 3 must be added
  list of factors: [2, 3, 2, 5, 7, 2, 3]

10 is not prime. Its prime factors are [2, 5]
As both of these factors are already in the list, no more must be added
  list of factors: [2, 3, 2, 5, 7, 2, 3]

Multiplying all values in the list yields the product 2520
*/

/*
Missing Element helper function
let missingElement = (array1, array2) => {
    array1.sort((a, b) => a - b); // [2, 2, 2, 3, 5, 7]
    array2.sort((a, b) => a - b); // [3, 3]
    for (let i = 0, j = 0; i < array2.length; i++, j++) {
      if (array2[i] === array1[j]) {
        continue;
      } else if (array1[j] > array2[i]) {
        return array2[i];
      } else {
        while (array1[j] < array2[i]) {
          j++;
        }
      }
    }
    return 1;
  }

missingElement([2, 3], [2, 2]);             // array2 is factors of 4
>2

missingElement([2, 2, 2, 3, 5, 7], [3, 3]); // array 2 is factors of 9
>3
*/

/* Higher Solution
let smallestMultiple = (num) => {
  let result = 1;
  let resultFactors = [];
  let primes = [];
  let isPrime = (num) => {
    for (let i = 0; i < resultFactors.length; i++) {
      if (num % resultFactors[i] === 0 && resultFactors[i] !== 1) {
        return false;
      }
    }
    primes.push(num);
    return true;
  }
  let factors = (num) => {
    let currentValue = num;
    let result = [];
    for (let i = 0; i < primes.length; i++) {
      if (currentValue % primes[i] === 0) {
        result.push(primes[i]);
        currentValue /= primes[i];
        if (currentValue === 1) {
          return result;
        }
        i--;
      }
    }
    return result;
  }
  let missingElement = (array1, array2) => {
    array1.sort((a, b) => a - b); // [2, 2, 2, 3, 5, 7]
    array2.sort((a, b) => a - b); // [3, 3]
    for (let i = 0, j = 0; i < array2.length; i++, j++) {
      if (array2[i] === array1[j]) {
        continue;
      } else if (array1[j] > array2[i]) {
        return array2[i];
      } else {
        while (array1[j] < array2[i]) {
          j++;
        }
      }
    }
    return 1;
  }
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      resultFactors.push(i);
    } else {
      resultFactors.push(missingElement(resultFactors, factors(i)));
    }
  }
  for (let i = 0; i < resultFactors.length; i++) {
    result*= resultFactors[i];
  }
  return result;
}

smallestMultiple(6);
>60

smallestMultiple(10);
>2520

smallestMultiple(20);
>232792560

*/
