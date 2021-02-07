/*
Given a string s and a character c that occurs in s, return an array of integers
answer where answer.length == s.length and answer[i] is the shortest distance
from s[i] to the character c in s.

Example 1:
Input: s = "loveleetcode", c = "e"
Output: [3,2,1,0,1,0,0,1,2,2,1,0]

Example 2:
Input: s = "aaab", c = "b"
Output: [3,2,1,0]

Constraints:
1 <= s.length <= 10^4
s[i] and c are lowercase English letters.
c occurs at least once in s.
*/

const shortestToChar = (string, character) => {
  const result = Array(string.length);
  let hit = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      hit.push(i);
    }
  }
  let distance = 0;
  while (hit.length) {
    let next = [];
    for (let i = 0; i < hit.length; i++) {
      if (result[hit[i]] === undefined) {
        result[hit[i]] = distance;
      }
    }
    for (let i = 0; i < hit.length; i++) {
      if (hit[i] > 0 && result[hit[i] - 1] === undefined) {
        next.push(hit[i] - 1);
      }
      if (hit[i] < result.length - 1 && result[hit[i] + 1] === undefined) {
        next.push(hit[i] + 1);
      }
    }
    hit = next;
    next = [];
    distance++;
  }
  return result;
};

module.exports = { shortestToChar };
