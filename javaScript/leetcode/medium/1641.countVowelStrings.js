/*
Given an integer int, return the number of strings of length int that consist
only of vowels (a, e, i, o, u) and are lexicographically sorted.

A string s is lexicographically sorted if for all valid i, s[i] is the same as
or comes before s[i+1] in the alphabet.

Example 1:
Input: int = 1
Output: 5
Explanation: The 5 sorted strings that consist of vowels only are
["a","e","i","o","u"].

Example 2:
Input: int = 2
Output: 15
Explanation: The 15 sorted strings that consist of vowels only are
["aa","ae","ai","ao","au","ee","ei","eo","eu","ii","io","iu","oo","ou","uu"].
Note that "ea" is not a valid string since 'e' comes after 'a' in the alphabet.

Example 3:
Input: int = 33
Output: 66045

Constraints:
1 <= int <= 50 
*/

/*
I'm quite certain that there's a constant time solution for this challenge. I
believe it will essentially be the difference between all possible arrangements
of 5 * int elements, and the number of invalid arrangements. I think it likely
that one or both of these will make use of factorial numbers, though I don't
intuitively know how before starting.

int = 3
>35
["aaa","aae","aai","aao","aau","aee","aei","aeo","aeu","aii","aio","aiu","aoo",
"aou","auu","eee","eei","eeo","eeu","eii","eio","eiu","eoo","eou","euu","iii",
"iio","iiu","ioo","iou","iuu","ooo","oou","ouu","uuu"]

 1 +  1 + 1 + 1 + 1
 5 +  4 + 3 + 2 + 1
15 + 10 + 6 + 3 + 1

This is counting pattern that's similar to triangle numbers or tetrahedral
numbers but with 4 dimensions, hypertetrahedral numbers. Just as each of the
others have constant time methods for, given an integer n, calculating either
the nth layer of the shape, or the sum of all layers less than or equal to n, a
method for doing the same for hypertetrahedral numbers must exist.

Doing some research into figurate mathematics, I believe the patterns made by
this sort of counting are called pentatope numbers, and can be found by the
equation:
(n * (n + 1) * (n + 2) * (n + 3)) / 24
As the correct output for an input of 1 is 5, the answer is offset from
pentatope numbers by one level.
*/

const countVowelStrings = (int) => {
  return ((int + 1) * (int + 2) * (int + 3) * (int + 4)) / 24;
};

module.exports = { countVowelStrings };
