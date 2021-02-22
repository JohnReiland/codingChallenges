/*
Given a string and a string dictionary, find the longest string in the
dictionary that can be formed by deleting some characters of the given string.
If there are more than one possible results, return the longest word with the
smallest lexicographical order. If there is no possible result, return the empty
string.

Example 1:
Input:
s = "abpcplea", d = ["ale","apple","monkey","plea"]
Output: 
"apple"

Example 2:
Input:
s = "abpcplea", d = ["a","b","c"]
Output: 
"a"

Note:
All the strings in the input will only contain lower-case letters.
The size of the dictionary won't exceed 1,000.
The length of all the strings in the input won't exceed 1,000.
*/

const isSmaller = (champion, challenger) => {
  let result = true;
  for (let i = 0; i < challenger.length; i++) {
    if (challenger[i] < champion[i]) {
      break;
    } else if (challenger[i] > champion[i]) {
      result = false;
      break;
    }
  }
  return result;
};

const canBeMadeFrom = (whole, part) => {
  let result = true;
  let pointer = 0;
  for (let i = 0; i < part.length; i++, pointer++) {
    while (whole[pointer] && whole[pointer] !== part[i]) {
      pointer++;
    }
    if (!whole[pointer]) {
      result = false;
      break;
    }
  }
  return result;
};

const findLongestWord = (string, dictionary) => {
  let result = "";
  for (let i = 0; i < dictionary.length; i++) {
    if (
      (dictionary[i].length > result.length ||
        (dictionary[i].length === result.length &&
          isSmaller(result, dictionary[i]))) &&
      canBeMadeFrom(string, dictionary[i])
    ) {
      result = dictionary[i];
    }
  }
  return result;
};

module.exports = { findLongestWord };
