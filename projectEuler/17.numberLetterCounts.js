/*
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/

/*
This one is only unusual to me in that I don't agree with using "and" when writing
out numbers, as "and" has always been, in my experience, reserved for separating
whole numbers from fractions (ex: one and four fifths), and because of this, the
way of saying 115 (and so the way of writing out 115) that feels "right" to me is
"one hundred fifteen." But putting that aside, this shouldn't be too difficult.
I should be able to make an object literal to store the letter-values for the numbers
"one" through "nineteen," then "twenty" through "ninety," and then just "hundred,"
"thousand, and "and."

I'll make the counting function accept values for start and end, inclusive, and a
helper function to return the letter value for just one number. The counting function
will just pass all numbers from and inclusind the start value to and including the
end value, summing the returns as it does so, and outputing the final sum.

As a bonus, I think I'll include a boolean parameter to output the sum for American
usage (and ommission) of "and".

Main execution should look something like:

numberLetterCount(1, 5);
>19
*/

let chart = {
0: ["zero", 4],
1: ["one", 3],
2: ["two", 3],
3: ["three", 5],
4: ["four", 4],
5: ["five", 4],
6: ["six", 3],
7: ["seven", 5],
8: ["eight", 5],
9: ["nine", 4],
10: ["ten", 3],
11: ["eleven", 6],
12: ["twelve", 6],
13: ["thirteen", 8],
14: ["fourteen", 8],
15: ["fifteen", 7],
16: ["sixteen", 7],
17: ["seventeen", 9],
18: ["eightteen", 9],
19: ["nineteen", 8],
20: ["twenty", 6],
30: ["thirty", 6],
40: ["fourty", 6],
50: ["fifty", 5],
60: ["sixty", 5],
70: ["seventy", 7],
80: ["eighty", 6],
90: ["ninety", 6]
}

/*
chart[1][1];
>3

chart[19][1];
>8
*/



module.exports = {chart, letterCount};