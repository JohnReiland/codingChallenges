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
Time complexity will be linear with respect to string, times linear with
respect to patten, in a worse-case scenario. When the pattern fails to match on
the first character, it's still a linear time complexity.

I don't see any way around looking at every character in the string and
considering at each step whether the string is still a valid match for the
pattern, as, depending on the pattern, a single char in the string that goes
against the pattern can be enough to make it fail.

I think different patterns require different search methods. Some possible
patterns, how they can be described with words, and how they could be searched:

Pattern: .
Description: any single char
Notes: length === 1

Pattern: a
Description: a single char, "a"
Notes: length === 1, first char

Pattern: .a
Description: any single char, followed by "a"
Notes: length === 2, last value

Pattern: .. 
Description: exactly two chars
Notes: length === 2

Pattern: a.
Description: "a", followed by any single char
Notes: length === 2, first value



Pattern: aa
Description: exactly two "a"s
Notes: length === 2, first value, last value

Pattern: a.a
Description: "a", followed by any single char, followed by "a"
Notes: length === 3, first value, last value 

Pattern: a..a
Description: "a", followed by exactly two chars, followed by "a"
Notes: length === 4, first value, last value



Pattern: .a.
Description: any single char, followed by "a", followed by any single char
Notes: length === 3, second value

Pattern: .aa.
Description: any single char, followed by exactly two "a"s, followed by any
single char
Notes: length === 4, second value, third value

Pattern: .a.a.
Description: any single char, followed by "a", followed by any single char,
followed by "a", followed by any single char
Notes: length === 5, second value, forth value



Pattern: a*
Description: zero or more "a"s 
Notes: every value until at least one non-"a"

Pattern: .*
Description: zero or more of any char
Notes: true

Pattern: .*a
Description: zero or more of any char, followed by "a"
Notes: length >= 1, last value

Pattern: .*.
Description: zero or more of any char, followed by any single char
Notes: length >= 1

Pattern: a.*
Description: "a", followed by zero or more of any char
Notes: length >= 1, first value

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
on remainder of string (length >= 1, first char)


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

This makes me feel that, when the pattern contains multiple [][]*, where the
first [] is not ., that the solution will be recursive, searching the string for
the first [], then invoking isMatch() on the rest of the string with the
remaining unmatched part of the pattern. Whenever the end of the string is
reached without the pattern being found, isMatch() returns false, and the search
continues from the invokation above it, until the first invokation returns true
or false.

Consider the pattern a.*b.*a
Analizing the given pattern for shortcuts yields:
length >=3, first char, last char

These initial tests all must pass. Any test failing results in a return of
false.

Assuming these initial tests all pass, isMatch() should then be called with
the pattern  .*b.* , with instructions to begin after the first value of the
string, end before the last value of the string, and that any time it fetches
the length of the string, it should subtract 2 from it.
Analizing this new pattern for shortcuts yields:
length>=1, every char until at least one "b"

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


*/

let isMatch = (string, pattern) => {};

module.exports = { isMatch };
