/*

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/

/*
Straightaway, I can see what's wanted is a helper function that, given a number,
returns an array of that number's prime factors in ascending order.
The solution, then, would look like:
  let result = method(number);
  return result[result.length - 1];

To create the helper function is its own challenge. I see a brute force method, though
a better method might exist.

The brute force method for creating the prime factor helper function would work by having
another helper function which, when run, considers the value of a variable and returns the
next prime number. So given 2 it would return 3; given 3 it would return 5, etc.
EDIT: I can see now it is advantageous to keep an array of all primes found. Refactoring to
use this.

Then the input number would be tested to see whether it evenly divides into a given prime.
If it does, that prime is added to the result array and the number being considered is divided
by that prime. This continues until the number being tested is equal or less than the current prime.
The result array is then returned.
*/

/*
BRUTE FORCE SOLUTION FOR PRIME FACTORIZATION HELPER FUNCTION


let largestPrimeFactor = (number) => {
  let prime = [2];
  let isPrime = (number) => {
    for (let i = 0; i < prime.length; i++) {
      if (number % prime[i] === 0) {
        return false;
      }
    }
    return true;
  }
  let findNextPrime = () => {
    let current = prime[prime.length - 1];
    current++;
    while (isPrime(current) === false) {
      current++;
    }
    prime.push(current);
  }
  let primeFactors = (number) => {
    let currentValue = number;
    let result = [];
    while (currentValue >= prime[prime.length - 1]) {
      if (currentValue % prime[prime.length - 1] === 0) {
        result.push(prime[prime.length - 1]);
        currentValue /= prime[prime.length - 1];
      }
      findNextPrime();
    }
    return result;
  }
  let result = primeFactors(number);
  return result[result.length - 1];
}

prime;
>[2]

findNextPrime();
>undefined
prime;
>[2, 3]

findNextPrime();
>undefined
findNextPrime();
>undefined
findNextPrime();
>undefined
findNextPrime();
>undefined
findNextPrime();
>undefined
findNextPrime();
>undefined
findNextPrime();
>undefined
prime;
>[2, 3, 5, 7, 11, 13, 17, 19, 23]

primeFactors(65);
>[5,13]

largestPrimeFactor(65);
>13

largestPrimeFactor(13195);
>29

largestPrimeFactor(600851475143);
>6857
*/
