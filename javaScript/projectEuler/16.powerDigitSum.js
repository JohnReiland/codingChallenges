/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 21000?
*/

/*
I think this is a disguised challenge. The real challenge is "build an exponential
function that accepts BigInt inputs." Accomplishing that, it will be trivial to
sum the digits of its output.
*/

/*
Raising something to a power is just multiplying it by itself that many times.
I'll take in the base, convert it to BigInt, multiply it by itself as many times
as the power, then return the result.

Seperately, I'll make a function to take in a BigInt, sum the digits, convert
the result to num, and return the result.

Main execution will look something like:

return sumBigInt(bigIntPow(base, power));
*/

let bigIntPow = (base, power) => {
  if (power < 1) {
    return 1n;
  }
  base = BigInt(base);
  let result = base;
  for (let i = 1; i < power; i++) {
    result *= base;
  }
  return result;
};

/*
bigIntPow(2, 3);
>8n

bigIntPow(2, 60);
>1152921504606846976n
*/

let sumBigInt = (bigInt) => {
  let result = 0n;
  let currentValue = bigInt;
  while (currentValue > 0n) {
    result += currentValue % 10n;
    currentValue -= currentValue % 10n;
    currentValue /= 10n;
  }
  return Number(result);
};

/*
sumBigInt(23n);
>5

sumBigInt(12345n);
>15
*/

// MAIN EXECUTION START

let powerDigitSum = (base, power) => {
  return sumBigInt(bigIntPow(base, power));
};

/*
powerDigitSum(2, 4);
>7

powerDigitSum(2, 5);
>5

powerDigitSum(2, 1000);
>1366
*/

module.exports = { bigIntPow, sumBigInt, powerDigitSum };
