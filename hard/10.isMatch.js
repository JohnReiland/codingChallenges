/*
Given an input string (s) and a pattern (p), implement regular expression
matching with support for '.' and '*' where: 

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Example 1:
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".

Example 2:
Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore,
by repeating 'a' once, it becomes "aa".
*/

/*
Time complexity will be linear or worse with respect to string length, times
linear or worse with respect to patten length.

Different patterns require different search methods. Some possible
patterns, how they can be described with words, and how they could be searched:

Pattern: .
Description: any single char
Notes: length === 1

Pattern: a
Description: a single char, "a"
Notes: length === 1, first value === "a"

Pattern: .a
Description: any single char, followed by "a"
Notes: length === 2, last value === "a"

Pattern: .. 
Description: exactly two chars
Notes: length === 2

Pattern: a.
Description: "a", followed by any single char
Notes: length === 2, first value === "a"



Pattern: aa
Description: exactly two "a"s
Notes: length === 2, first value === "a", last value === "a"

Pattern: a.a
Description: "a", followed by any single char, followed by "a"
Notes: length === 3, first value === "a", last value === "a"

Pattern: a..a
Description: "a", followed by exactly two chars, followed by "a"
Notes: length === 4, first value === "a", last value === "a"



Pattern: .a.
Description: any single char, followed by "a", followed by any single char
Notes: length === 3, second value === "a"

Pattern: .aa.
Description: any single char, followed by exactly two "a"s, followed by any
single char
Notes: length === 4, second value === "a", third value === "a"

Pattern: .a.a.
Description: any single char, followed by "a", followed by any single char,
followed by "a", followed by any single char
Notes: length === 5, second value === "a", forth value === "a"



Pattern: a*
Description: zero or more "a"s 
Notes: every value unless at least one non-"a"

Pattern: .*
Description: zero or more of any char
Notes: true

Pattern: .*a
Description: zero or more of any char, followed by "a"
Notes: length >= 1, last value === "a"

Pattern: .*.
Description: zero or more of any char, followed by any single char
Notes: length >= 1

Pattern: a.*
Description: "a", followed by zero or more of any char
Notes: length >= 1, first value === "a"

Pattern: .*a.*
Description: zero or more of any char, followed by "a", followed by zero or
more of any char
Notes: length >= 1, every value until at least one "a"

Pattern: .*..*
Description: zero or more of any char, followed by any single char, followed by
zero or more of any char
Notes: length >= 1



Pattern: a*b.*
Description: zero or more "a"s, followed by "b", followed by zero or more of
any char
Notes: length >= 1, every value until at least one non-"a", THEN, isMatch(b.*)
on remainder of string (length >= 1, first char === "b")

Pattern: a*.b.*
Description: zero or more "a"s, followed by any single char ("a" inclusive!),
followed by b, followed by zero of more of any char
Notes: length >= 2, every value *starting with the second* until at least one
"b"


It's becoming clear that the first step in efficently determining if the string
is a match for the pattern, is to examine the pattern and identify shortcuts
which can be used to quickly tell that the string is not a match.

If the pattern contains something other than a series of []*, length can be
used.
If it doesn't start or end with []*, values a certain distance from the
start or end of the string can be used.

Some patterns can be simplified to other patterns, others can not.
.*.* can be sinplified to just .*
but ..* cannot be simplified to just .*
because ..* has a length of 1 or more, and .* has a length of 0 or more

a*.*  and  .*a*  and  .*a*.*  can each be simplified to just .*
.* could be said to absorb adjascent []* search components.

This makes me feel that the solution will be recursive, invoking isMatch() on
portions of the original string with a portion the original pattern. Whenever
the end of the string portion is reached without the pattern being matched,
the current invokation of isMatch() returns false, which either results in the
search continuing from the invokation above it or the top invokation returning
false, depending on the nature of the pattern.

Consider the pattern a.*b.*a
Analizing the given pattern for shortcuts yields:
length >= 3, first char, last char

These initial tests all must pass. Any test failing results in a return of
false.

Assuming these initial tests all pass, isMatch() should then be called with
the pattern  .*b.* , with instructions to begin after the first value of the
string, end before the last value of the string, and with any time the length of
the string being fetched, 2 being subtracted from it.
Analizing this new pattern for shortcuts yields:
length >= 1, every char until at least one "b"

If these tests both pass, the string is a match. If either fails, it's not.


Consider the pattern aa*b.*
Analizing the given pattern for shortcuts yields:
length >= 2, first char

These initial tests both must pass. Either test failing results in a return of
false.

Assuming these initial tests pass, isMatch() should then be called with the
pattern  a*b.* ,  with instructions to begin after the first value of the
string, and that any time it fetches the length of the string, it should
subtract 1 from it.
Analyzing this new pattern for shortcuts yeilds:
length >= 1, every value until at least one "b"



All this seems to suggest an outside-in approach to testing the string for a
match to the pattern. A search pattern is first separated into an array of
"search elements," which are either blocks of characters and/or dot (.)
wildcards, length-unknowm runs of a known character, or length-unknown runs of
any character(s).

Thus, the search pattern ab*a.*ba*ca.*b
would be separated into [a, b*, a, .*, b, a*, ca, .*, b].
There are no []* elements adjacent to .* elements, so no absorbtion occurs.
The sum of all fixed-length blocks is 6.
First, the length would be tested to see if it is >= 6.
Then first and last elements of the search element array would be tested.
The first value of the string would be tested to see if it is "a".
The last value of the string would be tested to see if it is "b".

If all these tests pass, isMatch() would be called on what remains of the
string, with the search element array [b*, a, .*, b, a*, ca, .*].
The last element is .* and cannot be used to quickly rule out a string.
The first element is b* and so the first non-"b" value can be tested further.

The string would be tested until the first non-"b" value is found. isMatch()
would be called on what remains of the stringt, with the search element array
[a, .*, b, a*, ca, .*].
The last element is .* and cannot be used to quickly rule out a string.
The first value of the string would be tested to see if it is "a".

If this test passes, isMatch() would be called on what remains of the string,
with the search element array [.*, b, a*, ca, .*].
.* at both ends of the search element array is kind of a worst-case scenario.
It means every value of what remains of the string will need to be searched to
rule out the possibility that a match exists, and if the searh element array
contains []* values, then testing may need to resume on failures.
In this example, the string would be searched until the first "b" is found.
The location of this value would be noted.
Then the first non-"a" value would would be tested to see if it is "c".
IF it is,
  then the next value would be tested to see if it is "a".
ELSE
  the search for "b" would resume from the previously noted location.

HOWEVER: if there is no non-"a" value to test in what remains of the string,
the search for "b" does NOT need to resume, and the top isMatch() call can
return false.

A distinction must be made, then, between a search failing because invalidating
values have been encountered, and a search failing because the end of the search
area has been reached. If ever the end of the search area is reached without
every value getting an opportunity to be testsed, the string is certainly not a
match.

In short, .* on both ends of the search element array is bad, because then every
index of the string must be touched at least once to prove there is no match,
and if the array contains []* values besides, then one failure MAY no longer be 
sufficent to prove the string is not a match, and indicies of the string MAY
need to be touched multiple times.

Also to be noted is the way dot (.) wildcards "distribute" into adjacent []*
elements.
Consider the search pattern a*.b.*
it's not correct to test whether the second non-"a" value is "b", as "a" is a
valid value for (.).
Instead, the second value should be tested to see if it's "b". If so, the string
passes.
If not, THEN the second non-"a" value can be tested to see if it's "b" (this may
end up testing the same value). If it's not, the string fails.

How to describe this programatically:
When search element array is [a*, .b] :
If length of [a*] > 0, search for [b] || [.b]  (b OR .b)
If length of [a*] === 0, search for [.b]

When search element array is [a*, ..b] :
If length of [a*] is >= 2, search for [b] || [.b] || [..b]  (b OR .b OR ..b)
If length of [a*] === 1, search for [.b] || [..b]  (.b OR ..b)
If length of [a*] === 0, search for [..b]
*/

/*
Is it possible for the string length to be valid at first, and invalid later?
Yes, because there are wrong turns, which consume letters.

For the pattern a.*bd*ca.*
Search array is [a, .*, b, d*, ca, .*]
Minimum length is 4.
The string "abcbd" has a length 5, and is valid.

[.*, b, d*, ca, .*]
"abcbd" becomes "bcbd", length 4, minimum is 3, still valid.

[d*, ca, .*]
"bcbd" becoms "cbd" length 3, minimum is 2, still valid.
"cbd" fails to match, previous search resumes.

[.*, b, d*, ca, .*]
"bcbd" becomes "bd", length 2, minimum is 3, length invalid.
*/

/*
// build function here to identify search pattern elements and push to array
let buildArray = (pattern) => {
  let result = [];

  for (let i = 0; i < pattern.length; ) {
    if (pattern[i + 1] === "*") {
      result.push(pattern.substr(i, 2));
      i += 2;
    } else {
      let element = "";
      while (pattern[i + 1] !== "*" && i < pattern.length) {
        element = element + pattern[i];
        i++;
      }
      result.push(element);
    }
  }
  return result;
};
*/

let isMatch = (string, pattern) => {
  let patternElementArray = [];
  let lengthMinimum = 0;
  let minimumIsExact = true;

  for (let i = 0; i < pattern.length; ) {
    if (pattern[i + 1] === "*") {
      minimumIsExact = false;
      patternElementArray.push(pattern.substr(i, 2));
      i += 2;
    } else {
      let element = "";
      while (pattern[i + 1] !== "*" && i < pattern.length) {
        element = element + pattern[i];
        i++;
      }
      lengthMinimum += element.length;
      patternElementArray.push(element);
    }
  }

  if (string.length < lengthMinimum) {
    return false;
  }
  if (minimumIsExact && string.length !== lengthMinimum) {
    return false;
  }

  let recurse = (
    lengthMinimum,
    stringStart = 0,
    stringEnd = string.length,
    patternStart = 0,
    patternEnd = patternElementArray.length
  ) => {
    //
  };

  return recurse(lengthMinimum);
};

module.exports = { isMatch };
