/*
Given a string string and an integer k, return the length of the longest
substring of string such that the frequency of each character in this substring
is less than or equal to k.

Example 1:
Input: s = "aaabb", k = 3
Output: 3
Explanation: The longest substring is "aaa", as 'a' is repeated 3 times.

Example 2:
Input: s = "ababbc", k = 2
Output: 5
Explanation: The longest substring is "ababb", as 'a' is repeated 2 times and
'b' is repeated 3 times.

Constraints:

1 <= s.length <= 10^4
s consists of only lowercase English letters.
1 <= k <= 10^5
*/

/*
Time complexity will be linear or worse, as every value must be touched, to know
what character it is and how many times it occurs.

I suspect I can get away with 2(n), one pass to identify characters that appear
k or more times, a second pass to find the longest substring containing only
those chars.

UPDATE:
I misunderstood the challenge. While the above produces valid results for the
examples given, the substring itself must contain k or more of each character
which makes up the substring. Thus, calling longestSubstring, on the longest
substring, should return the length of the string.
This might work as a solution, as each potential substring can be passed through
a new call of longestSubstring. The value returned is the length of the largest
valid substring in that potential substring. The largest value returned of all
potential substrings is the length of the longest valid substring in the string.
*/

const longestSubstring = (string, k) => {
  let result = 0;
  if (k <= string.length) {
    const counts = {};
    const valid = new Set();
    for (let i = 0; i < string.length; i++) {
      counts[string[i]] =
        counts[string[i]] === undefined ? 1 : counts[string[i]] + 1;
      if (counts[string[i]] >= k) {
        valid.add(string[i]);
      }
    }
    if (valid.size === Object.keys(counts).length) {
      return string.length;
    }
    let substringArray = [];
    let currentSubstring = "";
    for (let i = 0; i < string.length; i++) {
      if (valid.has(string[i])) {
        currentSubstring += string[i];
      } else {
        if (currentSubstring.length >= k) {
          substringArray.push(currentSubstring);
        }
        currentSubstring = "";
      }
    }
    if (currentSubstring.length >= k) {
      substringArray.push(currentSubstring);
    }

    if (substringArray.length) {
      let validSubstringLengths = substringArray.map((string) =>
        longestSubstring(string, k)
      );
      result = validSubstringLengths.reduce(function (a, b) {
        return Math.max(a, b);
      });
    }
  }
  return result;
};

module.exports = { longestSubstring };
