/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2

For example, 3^2 + 4^2 = 5^2 (9 + 16 = 25)

There exists exactly one Pythagorean triplet for which a + b + c = 1000.

Find the product abc.
*/

/*
If I'm understanding the problem correctly, this one is as much about reading instructions carefully
as it is about math skill or coding ability.

Very specifically, I'm looking for values for a, b, and c, where:
*  0 < a < b < c
* a^2 + b^2 = c^2
AND
* a + b + c = 1000

Knowing those values, I'm to find the product of a * b * c, which is a trivially easy task compared to the rest.

What's the best point of attack for this problem?
The number of values satisfying 0 < a < b < c is endless.
The number of values satisfying a + b + c = 1000 is large.
I suspect the number of values satisfying a^2 + b^2 = c^2 is comparitively small.

a < b < c puts some interesting limits on the minimum and maximum sizes of the values.
a could be as small as 1, but if it is, b can't be larger than 499, with c being 500.
a could be as large as 332, with be being 333 or 334, and c being 335 or 334, respectively.

Thus I only need consider values of a between 1 and 332, and values of b between 2 and 499
I need a list of the squares of all values between 1 and 998, and I need to consider the sum of every square from 1-332 and 2-499, identifying the values which yield sums with natural number square roots.

If the sum of those values and the square root of their product is 1000, I've found my set.
Multiply them and return the product.

It's still brute force, but it's intelligent brute force.

I'm going to design this such that the sum of a, b and c is the input, and the product, if a special pythagorean triplet exists, is the output.
If none exists, null will be returned.

As 3^2 + 4^2 = 5^2

method(12);
will yield
>60

this would be solved by first finding the squares of all values from 1 - 6
1, 4, 9, 16, 25, 36

then pairing the first third of those values (1, 4, 9, 16) with the first half of those values (1, 4, 9, 16, 25, 36), and looking for sums which are also square numbers.
    1    4    9    16

1   2    5    10   17

4   5    8    13   20

9   10   13   18   25*

16  17   20   25*  32

25  26   29   34   41

36  37   40   44   52

Above, 25 is a square number; its square root is 5, and the sum of 3, 4, and 5 is 12.
The product of 3, 4, and 5 is 60.


let specialPythagoreanTriplet = (num) => {
  let third = Math.ceil(num / 3);
  let half = Math.ceil(num / 2);
  let thirdSet = [];
  let halfSet = [];

  for (let i = 1; i <= half; i++) {
    if (i <= third) {
      thirdSet.push(i * i);
    }
    halfSet.push(i * i);
  }
  for (let i = 0; i < halfSet.length; i++) {
    for (let j = 0; j < thirdSet.length; j++) {
      if (Math.sqrt(halfSet[i]) + Math.sqrt(thirdSet[j]) + Math.sqrt(halfSet[i] + thirdSet[j]) === num) {
        return Math.sqrt(halfSet[i]) * Math.sqrt(thirdSet[j]) * Math.sqrt(halfSet[i] + thirdSet[j])
      }
    }
  }
  return null;
}

specialPythagoreanTriplet(12);
>60

specialPythagoreanTriplet(1000);
>31875000

(40000 + 140625 = 180625)
(200^2 + 375^2 = 425^2)
(200 + 375 + 425 = 1000)
(200 * 375 * 425 = 31875000)
*/





