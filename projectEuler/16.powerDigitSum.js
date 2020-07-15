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
}

let powerDigitSum = (base, power) => {

}

module.exports = {bigIntPow};