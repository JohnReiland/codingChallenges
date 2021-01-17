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

const countVowelStrings = (int) => {};

module.exports = { countVowelStrings };
