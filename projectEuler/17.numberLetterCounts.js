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
"one" through "nineteen," then "twenty" through "ninety," and then just "hundred," "thousand, and "and."

I'll make the counting function accept values for start and end, inclusive, and a
helper function to return the letter value for just one number. The counting function will just pass all numbers from and inclusind the start value to and including the
end value, summing the returns as it does so, and outputing the final sum.
*/

