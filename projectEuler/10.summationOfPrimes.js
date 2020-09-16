/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

/*
I've build helper functions to find prime numbers before, so I'm getting better at doing that.
I don't believe there's any math shortcut to finding the sum of primes for a given number,
but I can design this to memoize both found primes and the sum of all primes for a given prime,
so all future queries will be much faster.

The basic design will be to build an array of primes, and use that array to find new primes,
continuing until the target value is reached. To keep track of the running sum, I'll maintain
another array with the corresponding values. To quickly retrieve a value from the second array,
I'll implement a binary search which finds the highest prime under the given target, and then
returns the value from the corresponding index in the second array.

The returnSum function I first implemented was poorly designed, and didn't work reliably.
I need to analyze this task further.
What I have is a sorted list of prime numbers, with the highest value known to be no less
than the target number - 1. I will be given a target number. If the highest value is less
that the target number, I should return the array length - 1.
If not, I should return the index of the highest prime that is less than the target.
As the array might be quite large, this index should be found using a binary search.
*/

let summationOfPrimes = (target) => {
  if (!summationOfPrimes.primes) {
    summationOfPrimes.primes = [2];
    summationOfPrimes.sums = [2];
  }

  // helper function returns true if num is prime
  let isPrime = (num) => {
    for (let i = 0; i < summationOfPrimes.primes.length; i++) {
      if (num % summationOfPrimes.primes[i] === 0) {
        return false;
      }
    }
    return true;
  };

  // helper function finds first prime higher than all in primes array
  let findNextPrime = () => {
    let currentValue =
      summationOfPrimes.primes[summationOfPrimes.primes.length - 1] + 1;
    while (!isPrime(currentValue)) {
      currentValue++;
    }
    summationOfPrimes.primes.push(currentValue);
    summationOfPrimes.sums.push(
      summationOfPrimes.sums[summationOfPrimes.sums.length - 1] + currentValue
    );
  };

  // helper function returns index of largest prime in array below target (employs binary search)
  let indexOfargestPrimeBelowTarget = (target) => {
    if (
      summationOfPrimes.primes[summationOfPrimes.primes.length - 1] < target
    ) {
      return summationOfPrimes.primes.length - 1;
    }
    let left = 0;
    let right = summationOfPrimes.primes.length - 1;
    let test;
    while (left + 1 < right) {
      test = Math.floor((left + right) / 2);
      if (summationOfPrimes.primes[test] >= target) {
        right = test;
      } else if (summationOfPrimes.primes[test + 1] >= target) {
        return test;
      } else {
        left = test;
      }
    }
    return left;
  };

  // MAIN EXECUTION START

  // Extend primes and sums arrays only if needed
  while (
    summationOfPrimes.primes[summationOfPrimes.primes.length - 1] <
    target - 1
  ) {
    findNextPrime();
  }
  // Use index of largest prime blow target to return sum of all primes below target
  return summationOfPrimes.sums[indexOfLargestPrimeBelowTarget(target)];
};

/*
summationOfPrimes(3);
>2

summationOfPrimes(6);
>10

summationOfPrimes(100);
>1060

summationOfPrimes(1000000);
>37550402023

summationOfPrimes(2000000);
>142913828922
*/
