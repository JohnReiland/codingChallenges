/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10,001st prime number?
*/

/*
I've done something similar in the past, just as a helper function to a larger challenge.
I'm not aware of any way of identifying a number as prime without knowing all
primes that come before it. Thus, I can see no way of identifying the 10,001st prime without
first identifying the 10,000 primes that come before it.

The way I've solved this in the past is to make a helper function which, given a prime number
and within scope of a list of all primes lower than that number, uses that list to identify the
next prime. This helper function itself uses a helper function which identifies whether a given
number is prime. This new prime is then added to the list, and the process can repeat until the nth
prime is found.
*/

/*
Brute Force Solution

let nthPrime = (num) => {
  let primes = [2];
  let isPrime = (num) => {
    for (let i = 0; i < primes.length; i++) {
      if (num % primes[i] === 0) {
        return false;
      }
    }
    return true;
  }
  let pushNextPrime = () => {
    let currentValue = primes[primes.length - 1] + 1;
    while (!isPrime(currentValue)) {
      currentValue++;
    }
    primes.push(currentValue);
  }
  while (primes.length < num) {
    pushNextPrime();
  }
  return primes[primes.length - 1];
}

primes;
>[2]

pushNextPrime();
>undefined

primes;
>[2, 3]

pushNextPrime();
>undefined

pushNextPrime();
>undefined

pushNextPrime();
>undefined

pushNextPrime();
>undefined

primes;
>[2, 3, 5, 7, 11, 13]

nthPrime(1);
>2

nthPrime(10);
>29

nthPrime(100);
>541

nthPrime(1000);
>7919

nthPrime(10001);
>104743

*/

/*
Processing is so cheap these days that even calculating the 10,001st prime takes much less than a second.
It does take a perceptible amount of time, however, and calculating the 100,000th prime took, for me,
roughly 14 seconds. If it became necessary to regularly find such large value nth primes, there would be huge savings
in memoizing the list of found primes, as finding the 100,000th prime finds, by necessity, every prime between it and
the 1st. Thus, the only time new primes need ever be found would be when a larger-value nth prime is needed than has
ever been needed before.
*/

let nthPrime = (num) => {
  if (!nthPrime.primes) {
    nthPrime.primes = [2];
  }
  let isPrime = (num) => {
    for (let i = 0; i < nthPrime.primes.length; i++) {
      if (num % nthPrime.primes[i] === 0) {
        return false;
      }
    }
    return true;
  };
  let pushNextPrime = () => {
    let currentValue = nthPrime.primes[nthPrime.primes.length - 1] + 1;
    while (!isPrime(currentValue)) {
      currentValue++;
    }
    nthPrime.primes.push(currentValue);
  };
  if (nthPrime.primes[num - 1]) {
    return nthPrime.primes[num - 1];
  }
  while (nthPrime.primes.length < num) {
    pushNextPrime();
  }
  return nthPrime.primes[num - 1];
};
