/*
Two strings are considered close if you can attain one from the other using the
following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another
existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close,
and false otherwise.

Example 1:
Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"

Example 2:
Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any
number of operations.

Example 3:
Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"

Example 4:
Input: word1 = "cabbba", word2 = "aabbss"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any
amount of operations.

Constraints:
1 <= word1.length, word2.length <= 10^5
word1 and word2 contain only lowercase English letters.
*/

<<<<<<< HEAD
/*
So this is definitely a case where building out a system to brute force the
solution is possible, but it's much more effective to glean the rules that can
be derived from the details of the challenge, and use that to uncover a faster
solution.

The first operation effectively means that the order of characters in a string
doesn't matter.

The second operation effectively means that which characters are present or not
present in a string matters, and what counts exist for instances of various
characters in a string matters, but any one count for any one character doesn't
matter.

A string therefore has two traits relevant for analysis: The characters of which
it's made up, and the various counts of instances of characters. If these two
traits match for two different strings, those strings are close.
*/

const traits = (word) => {
  const count = {};
  const chars = [];
  for (let i = 0; i < word.length; i++) {
    if (count[word[i]]) {
      count[word[i]]++;
    } else {
      chars.push(word[i]);
      count[word[i]] = 1;
    }
  }
  const result = [[], []];
  for (let i = 0; i < chars.length; i++) {
    result[0].push(chars[i]);
    result[1].push(count[chars[i]]);
  }
  result[0].sort();
  result[1].sort();
  return result;
};

const closeStrings = (word1, word2) => {
  let result = false;
  if (word1.length === word2.length) {
    result = true;
    const traits1 = traits(word1);
    const traits2 = traits(word2);
    for (let i = 0; i < traits1[0].length; i++) {
      if (traits1[0][i] !== traits2[0][i]) {
        result = false;
        break;
      }
    }
    if (result) {
      for (let i = 0; i < traits1[1].length; i++) {
        if (traits1[1][i] !== traits2[1][i]) {
          result = false;
          break;
        }
      }
    }
  }
  return result;
};
=======
const closeStrings = (word1, word2) => {};
>>>>>>> ee00582a8badad2405914b3dbb52519434411173

module.exports = { closeStrings };
