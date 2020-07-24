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


SEARCH SAVINGS
Thinking more about it, there could only be palindromic slices that extend past the
extent of the found slice if those slices reach the extent of the found slice, meaning
the slices they are mirrors of must touch the start of the slice, as demonstrated:

1.
ybabcdefgfedcbabcdz
 |^|

2.
ybabcdefgfedcbabcdz
 |*     ^      |

3.
ybabcdefgfedcbabcdz
 |*     ^    |`|

4.
ybabcdefgfedcbabcdz
  *     *  |  ^  |

1. A palindrome is identified at index 2, from 1 to 3
2. A palindrome is identified at index 8, from 1 to 15
  3. A mirror of the palindrom centered on index 2 is sure to exist at index 14, from 13 to 15
  BUT: *because it extends to the end of the palindrome at index 8,* it might be larger than
  13 to 15. It must be tested, starting with 12, 16 (actual slice is from 11 to 17).

Thus, when a palindrom is found, it marks of an area of search ahead of and behind the current index.
Any palindromes found behind the current index but not touching the back of the search area will have
mirror images (no larger) in front of the current index, and can be counted without searching.
However, and palindromes found behind the current index and touching the back of the search area may
extend beyond the front of the search area. Those which have been found should be counted, and then
testing should continue on the mirror images to see if they extend further.


REPEATED CHARS

jdighwlaaaaaaaaaaaaaaakjsl

In the above string, there are no palindromes other than the series of 15 consecutive 'a's. The number
of palindromes that can be made with n consecutive identical letters is: (n(n + 1)) / 2.

EDIT: this isn't accurate, since it requires at least two consequtive letters to create a run. Therefore,
the algorithm is (n - 1 (n)) / 2.

Thus, there are 105 palindromic slices that can be made with 15 consecutive identical letters. The savings
gain from using this algorithm must be implemented, but how can I incorporated it into the brute force
search? When two consecutive identical characters are found, a new function should take over which
first uses triangle numbers to figure out how many slices exist in the run of like chars. To allow for
search savings to function, the locations and sizes of these will all still need to be recorded, just
as those of regular slices are. Then. because a run of alike chars can exist as the core of a larger
palindrome, the values on the ends of the run must be tested until unlike characters are found.

All of the above tells me that there needs to be a highly flexible palindrome counter, able to analyze
both even-length and odd-length search areas, able to start at any distance from the center, and able
to record all palindromic slices found into an array.

In short, countEven and countOdd need to be combined into a more versitile counter. Then this counter
needs to be made able to record the locations and lengths of palindromic slices it finds.

There also needs to be a new function which calculates the number of palindromic strings in a run of
like chars, and which is likewise able to record the locations and lengths of palindromic slices it
calculates to exist.

The main function needs to use the countRun function whenever it detects a run of like chars, then
switch off to the unified palindromeCount in the appropriate mode, based on whether the run length
is even or odd.

If no run is fount, then palindromeCount should run in odd mode.

In either case, when a new palindrome is found, the record should be consulted to look for closed
palindromes that can be counted (and recorded) without searching, then for open palindromes that can
be counted and recorded but also must be examined to see if they're part of larger palindromes.

UPDATE_3:
I've implemented a method to identify runs and use triangle numbers to calculate the number
of palindromic slices rather then identify them, and then resume scanning the string for
new ones.

I've put aside the idea of keeping track of found slices, even though with large, non-run
palindromes, there are savings to be found there. It's difficult to keep track of where the current index needs to be, and might have very high overhead. Depending on the nature of
the strings, I'm still convinced there is savings there, but I'm not implimenting it for
now. The savings made by identifying runs is very large. I'll see how it improves my score.

UPDATE_4:
Uploading my new code onto codility, it didn't immedieatly pass the example test.
After returning from a found run, my function was skipping too much of the string;
the last char of the run might belong to a new palindromic slice, and I had missedgs

this possibility. I'm going to submit now, hopefully this more efficent algorithm
will result in a higher score.

92! Much Improved!
*/

/*
let countEven = (string, index) => {
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


let countOdd = (string, index) => {
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
*/

/*
let count = (string, index, width = 0) => {
  let left = index;
  let right = index + 1 + width;
  let result = 0;
  while (string[left] === string[right] && string[right] !== undefined) {
    result++;
    left--;
    right++;
  }
  return result;
}


let countRun = (string, index) => {
  let run = 1;
  let testvalue = string[index];
  let testIndex = index + 1;
  while (string[testIndex] === testvalue) {
    run++;
    testIndex++;
  }
  return (((run - 1) * run) / 2);
}

*/

let countPalindromicSlices = (string) => {

  let count = (string, index, width = 0) => { // (Does not presume match with index + 1 + width)
    let left = index;
    let right = index + 1 + width;
    let result = 0;
    while (string[left] === string[right] && string[right] !== undefined) {
      result++;
      //record[left].push(right);
      left--;
      right++;
    }
    return result;
  }


  let countRun = (string, index) => { // (Does not presume match with index + 1)
    let run = 1;
    let testvalue = string[index];
    let testIndex = index + 1;
    while (string[testIndex] === testvalue) {
      run++;
      testIndex++;
      //record.push([]);
    }
    /*
    if (run > 1) {
      for (let i = index; i < index + run - 1; i++) {
        for (let j = i + 1; j < index + run; j++) {
          record[i].push(j);
        }
      }
    }
    */

    return run;
  }


  // MAIN EXECUTION START

  let result = 0;
  //let record = [];

  for (let i = 0; i < string.length; i++) {
    //record.push([]);

    if (string[i] === string[i + 1]) {

      let run = countRun(string, i);
      result += ((run - 1) * run) / 2;
      result += count(string, i - 1, run);
      i += run - 2;

    } else if (string[i] === string[i + 2]) {
      result += count(string, i, 1);
    }
    if (result > 100000000) {
      return -1;
    }
  }
  return result;
}

module.exports = {countPalindromicSlices};