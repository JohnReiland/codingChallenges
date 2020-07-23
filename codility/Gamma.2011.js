/*
In this problem we consider only strings consisting of lower-case English letters (a−z).

A string is a palindrome if it reads exactly the same from left to right as it does from right to left. For example, these strings are palindromes:

aza
abba
abacaba
These strings are not palindromes:

zaza
abcd
abacada
Given a string S of length N, a slice of S is a substring of S specified by a pair of integers (p, q), such that 0 ≤ p < q < N. A slice (p, q) of string S is palindromic if the string consisting of letters S[p], S[p+1], ..., S[q] is a palindrome. For example, in a string S = abbacada:

slice (0, 3) is palindromic because abba is a palindrome,
slice (6, 7) is not palindromic because da is not a palindrome,
slice (2, 5) is not palindromic because baca is not a palindrome,
slice (1, 2) is palindromic because bb is a palindrome.
Write a function

function solution(S);

that, given a string S of length N letters, returns the number of palindromic slices of S. The function should return −1 if this number is greater than 100,000,000.

For example, for string S = baababa the function should return 6, because exactly six of its slices are palindromic; namely: (0, 3), (1, 2), (2, 4), (2, 6), (3, 5), (4, 6).

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..20,000];
string S consists only of lowercase letters (a−z).
*/

/*
I'm trying something new for this challenge, which is meant to be timed.
The time allotted for this challenge is 120 minutes, and I won't be doing
any work on it prior to starting a timer. Then I'll do two 25-minute blocks
with 5 minute breaks after (standard pomodoro method). For the remaining 60
minutes, I'll let myself decide to either take 5-minute break after the first
25 minutes, or work through to the end without a break.
*/

/*
This is a little daunting to me, because I've had experience working with
palindrome identification before, and it's surprisingly complex.
For one thing, pelidromes take two shapes. they are either of even length,
and so have a certain number of characters forward and then those same
characters in reverse order, or they are of odd length, and so there is
a single character in the middle which can be any character at all.

Identifying all pallindromic slices will present new challenges, as strings
of like characters very quickly create very high numbers of potential
palindromes.

aa is 1 (aa)
aaa is 3 (aa, aa, aaa)
aaaa is 6 (aa, aa, aa, aaa, aaa, aaaa)
aaaaa is 10 (aa, aa, aa, aa, aaa, aaa, aaa, aaaa, aaaa, aaaaa)

Thus strings of like characters grow as pyramid numbers.

But palindromes can also be made up of other palidromes.
cabac is 2 (aba, cabac)
cabaccabac is 9 (cc, aba, aba, acca, cabac, cabac, baccab, abaccaba, cabaccabac)

Looking for all of these efficently within a string that is potentially 20k
characters long presents another challenge. Everything prior to character 10,000
needs to be considered as potentially the start of a very long palindrome.

It won't do to build isPalindrome() and feed every possible slice into it,
counting those that return true; the number of possible slices grows too quickly.
Specifically, it grows as triangle numbers.

The formula for knowing the nth triangle number is (n(n+1))/2, so in a string 20k
characters long, there are over 200 million possible slices.

Some savings can be found in that only certain slices need to be checked for being
palindromic. They are:

Every running pair of characters (if they match, they are palindromic)
Every running three characters (if the outer two match, the group is palindromic)
The characters on the ends of every found palindrome (if they match, the palindrome
is part of a larger palidrome).

Examining the above, it seems I'll only ever be comparing two characters, and I'll
only ever be concerned whether they match. Can this be exploited somehow?

It occurs to me that rather than brute force every potential palindrome, there might
be savings in identifying palindromes at the largest level. Knowing that a string is
a palindrome might make it faster to find palindromic slices within it, as any
palindromic slices found up to and including one half the length of the string count
twice, and the second half of the string doesn't need to be checked for palindromes
that reside entirely in the second half.

This can be used as follows. While progressing through the string, identifying
palindromic slices, the locations of these palindromes could be stored, so that when
a large palindrome is discovered (which by necessity extends far past the current
index of the string being checked for pair and triplet palindromes), the number of
palindroms found a certain number of characters behind the current index is already
known, and thus can be skipped. How would this look in execution?
cabaccabac

0 ca
0 cab
1 ab
1 aba - 1 found, expanding
  cabac - 2 found, can't expand, extends from 3 to 4, the number of palindromic
          slices from 3 to 4 will be the same as the number from 0 to 1: 0
          skip to 3.5
3 acc
4 cc - 3 found, expanding
  acca - 4 found, expanding
  baccab - 5 found, expanding
  abaccaba - 6 found, expanding
  cabaccabac - 7 found, can't expand, extends from 5 to 9, the number of palindromic
               slices from 5 to 9 will be the same as the number from 0 to 4: 2
               skip to 10
9 found

There is savings, but will it pay for the added bookeeping? It depends how many long
palindromes there are.

Too much time has been spent exploring this. I need to make a brute force algorithm
that searches intelligently. If there's time, I'll implement my savings.

I think it's easier to make two tests, one looking for even palindromes, one for odd.

UPDATE:
I have a working brute force method that works for strings of medium length, but it
can't handle strings even 5k in length. Hopefully this is due to a limit in the length
of test data, which reports invalid input.

I don't think there is time to implement the look-forward approach, but the way I would
implement it is to create an array keeping track of the palindromic slices found, stored
but the first value of the slice with an array of the second values For the example
given ('abbacada') the array would look like:

[
    [3],
    [2],
    [],
    [5],
    [],
    [7],
    [],
    []
]

Thus when a new palindromic slice is found, extending far ahead of the current index,
that many indices behind the index can be used to know how many palindromic slices
will be found between the index and the extent of the newly found slice.
My intuition says that there is a problem with this where new palindrimes that look
past that extent will be missed, but still I feel there is savings to be found here.

UPDATE_2:
I submitted my solution and got a final score of 64. Disappointing.
I think that I made a huge mistage in not implementing my knowledge of triangular
numbers, which would have allowed for fast counting of large blocks of like characters.
I will implement it tomorrow, though time has already expired.
*/

let string = 'jsirtrisj';

let countEven = (index) => {
  let left = index;
  let right = index + 1;
  let result = 0;
  while (string[left] === string[right] && string[right] !== undefined) {
      result++;
      if (result > 100000000) {
          return -1;
      }
      left--;
      right++;
  }
  return result;
}

let countOdd = (index) => {
      let left = index;
  let right = index + 2;
  let result = 0;
  while (string[left] === string[right] && string[right] !== undefined) {
      result++;
      left--;
      right++;
  }
  return result;
}

let countPalindromicSlices = (string) => {
  let result = 0;
  for (let i = 0; i < string.length; i++) {
      result += countEven(i);
      result += countOdd(i);
  }
  return result;
}

module.exports = {string, countEven, countOdd, countPalindromicSlices};