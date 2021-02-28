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
is a match for the pattern is to examine the pattern and identify shortcuts
which can be used to quickly tell that the string is not a match.

If the pattern contains something other than a series of []*, length can be
used.
If it doesn't start or end with []*, values at, or a certain distance from, the
start or end of the string can be used.

Some patterns can be simplified to other patterns, others cannot.
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
string, and end before the last value of the string.
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
"search elements," which are either blocks of characters and/or dot "."
wildcards, length-unknowm runs of a known character, or length-unknown runs of
any character.

Thus, the search pattern ab*a.*ba*ca.*b
would be separated into [a, b*, a, .*, b, a*, ca, .*, b].
There are no []* elements adjacent to .* elements, so no absorbtion occurs.
The sum of all fixed-length blocks is 6.
First, the string length would be tested to see if it is >= 6.
The first value of the string would be tested to see if it is "a".
The last value of the string would be tested to see if it is "b".

If all these tests pass, isMatch() would be called on what remains of the
string, with the search element array [b*, a, .*, b, a*, ca, .*].
The last element is .* and cannot be used to quickly rule out a string.
The first element is b* and so the first non-"b" value can be tested further.

The string would be tested until the first non-"b" value is found. isMatch()
would be called on what remains of the string, with the search element array
[a, .*, b, a*, ca, .*].
The first value of the string would be tested to see if it is "a".

If this test passes, isMatch() would be called on what remains of the string,
with the search element array [.*, b, a*, ca, .*].
.* at both ends of the search element array is kind of a worst-case scenario.
It means every value of what remains of the string will need to be searched to
rule out the possibility that a match exists, and if the search element array
still contains []* values, then testing may need to resume on failures.
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
area has been reached.

In short, .* on both ends of the search element array is bad, because then each
index of the string must be touched until a match is found, or EVERY index to
prove there is no match, and if the array contains []* values besides, then one
failure may no longer be sufficent to prove the string is not a match, and
so many indicies of the string may need to be touched multiple times.

Also to be noted is the way dot "." wildcards "distribute" into adjacent []*
elements.
Consider the search pattern a*.b.*
it's not correct to ONLY test whether the second non-"a" value is "b", as "a"
is a valid value for "."
Instead, the second VALUE should be tested to see if it's "b". If so, the string
passes.
If not, THEN the second non-"a" value can be tested to see if it's "b" (this may
end up testing the same value). If it's still not "b", the string truly fails.

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
// above incorporated into main function, to limit # of times pattern is read
*/

/*
This will be solved by recursing, but in order to do so, the right number of
retries and backsteps need to be found.

A RETRY is when a recursive isMatch() call returns NULL (invalid char) and
is called again with a stringStart value 1 HIGHER than the previous call.

A BACKSTEP is when a recursive isMatch() call returns FALSE (end of string)
and is called again with a stringStart value 1 LOWER than the previous call.

The number of retries allowed is the number of chars read prior to failing
the last []* element. This is because 0 of them are assumed to belong to the
[]* element at first, but all of them may belong to it.

The number of backsteps allowed is the LESSER number between the number of
retries and the number of dots encountered before the first non-dot
value in a fixed-length element (example of this illustrated below)

[.] [a*] [..] [b*] [..gh]
                      ^ g is the first non-dot value in a fixed-length element

This is because a dot adjacent to a []* element allows all chars, including
the char allowed in the []*. However, the char allowed in the []* can't be
used to detect the end of that element's representation in the string. The
first non-dot value in a fixed-length element must be used. It is assumed to
be in the correct position first, but if the string is not a match with this
interpretation, it might be because this value actually should be attributed
to one of the dots. It therefore is tested in each position until a match is
found or no more remain. It also cannot be more than the number of retries,
because that number is equal to the number of chars read prior to failing
the last []* element, and if (for example) no chars fit the []* element,
then the first char read MUST belong in the first dot; there are no chars in
the []* element to "pull forward" into the dots.
*/

let isMatch = (string, pattern) => {
  let buildPatternArray = () => {
    // convert pattern to pattern element array
    for (let i = 0; i < pattern.length; i++) {
      if (pattern[i + 1] === "*") {
        patternArray.push(pattern.substr(i, 2));
        i++;
      } else {
        patternArray.push(pattern[i]);
      }
    }
  };

  let leanPatternArrayForward = (patternArrayStart, patternArrayEnd) => {
    for (let i = patternArrayEnd; i >= patternArrayStart; i--) {
      if (patternArray[i][1] === "*") {
        while (
          i + 1 <= patternArrayEnd &&
          patternArray[i + 1] &&
          patternArray[i][0] === patternArray[i + 1]
        ) {
          [patternArray[i], patternArray[i + 1]] = [
            patternArray[i + 1],
            patternArray[i],
          ];
          i++;
        }
      }
    }
  };

  let leanPatternArrayBack = (patternArrayStart, patternArrayEnd) => {
    for (let i = patternArrayStart; i <= patternArrayEnd; i++) {
      if (patternArray[i][1] === "*") {
        while (
          i - 1 >= patternArrayStart &&
          patternArray[i - 1] &&
          patternArray[i][0] === patternArray[i - 1]
        ) {
          [patternArray[i - 1], patternArray[i]] = [
            patternArray[i],
            patternArray[i - 1],
          ];
          i--;
        }
      }
    }
  };

  let leanDotStarsForward = () => {
    for (let i = patternArrayEnd; i >= patternArrayStart; i--) {
      if (patternArray[i] === ".*") {
        while (i + 1 <= patternArrayEnd && patternArray[i + 1] === ".") {
          [patternArray[i], patternArray[i + 1]] = [
            patternArray[i + 1],
            patternArray[i],
          ];
          i++;
        }
      }
    }
  };

  let leanDotStarsBack = () => {
    for (let i = patternArrayStart; i <= patternArrayEnd; i++) {
      if (patternArray[i] === ".*") {
        while (i - 1 >= patternArrayStart && patternArray[i - 1] === ".") {
          [patternArray[i - 1], patternArray[i]] = [
            patternArray[i],
            patternArray[i - 1],
          ];
          i--;
        }
      }
    }
  };

  let reducePatternArray = () => {
    // clear patternArray of redundant elements
    for (let i = patternArrayStart; i <= patternArrayEnd; i++) {
      if (patternArray[i] === ".*") {
        // (.* elements absorb adjacent []* elements)
        while (
          i - 1 >= patternArrayStart &&
          patternArray[i - 1] &&
          patternArray[i - 1][1] === "*"
        ) {
          patternArray.splice(i - 1, 1);
          patternArrayEnd--;
          i--;
        }
        while (
          i + 1 <= patternArrayEnd &&
          patternArray[i + 1] &&
          patternArray[i + 1][1] === "*"
        ) {
          patternArray.splice(i + 1, 1);
          patternArrayEnd--;
        }
      } else if (patternArray[i][1] === "*") {
        // (non-dot []* elements absorbs alike adjacent []* elements)
        while (
          i + 1 <= patternArrayEnd &&
          patternArray[i + 1] &&
          patternArray[i + 1] === patternArray[i]
        ) {
          patternArray.splice(i + 1, 1);
          patternArrayEnd--;
        }
      }
    }
  };

  let fixedLengthFirst = (
    stringStart,
    stringEnd,
    patternArrayStart,
    patternArrayEnd
  ) => {
    while (
      patternArrayStart <= patternArrayEnd &&
      patternArray[patternArrayStart][1] !== "*"
    ) {
      if (stringStart > stringEnd) {
        return false;
      }
      if (
        string[stringStart] !== patternArray[patternArrayStart] &&
        patternArray[patternArrayStart] !== "."
      ) {
        return null;
      }
      stringStart++;
      patternArrayStart++;
    }
    return recurse(stringStart, stringEnd, patternArrayStart, patternArrayEnd);
  };

  let fixedLengthLast = (
    stringStart,
    stringEnd,
    patternArrayStart,
    patternArrayEnd
  ) => {
    while (
      patternArrayStart <= patternArrayEnd &&
      patternArray[patternArrayEnd][1] !== "*"
    ) {
      if (stringStart > stringEnd) {
        return false;
      }
      if (
        string[stringEnd] !== patternArray[patternArrayEnd] &&
        patternArray[patternArrayEnd] !== "."
      ) {
        return null;
      }
      stringEnd--;
      patternArrayEnd--;
    }
    return recurse(stringStart, stringEnd, patternArrayStart, patternArrayEnd);
  };

  let variableLengthCharFirst = (
    stringStart,
    stringEnd,
    patternArrayStart,
    patternArrayEnd
  ) => {
    // make array of base chars for all adjacent []* elements
    let baseList = [];
    while (
      patternArrayStart <= patternArrayEnd &&
      patternArray[patternArrayStart][1] === "*" &&
      patternArray[patternArrayStart][0] !== "."
    ) {
      baseList.push(patternArray[patternArrayStart][0]);
      patternArrayStart++;
    }
    if (patternArrayStart > patternArrayEnd) {
      // all elements were []*
      while (stringStart <= stringEnd) {
        while (string[stringStart] !== baseList[0] && baseList[0]) {
          baseList.shift();
        }
        if (!baseList[0]) {
          return false;
        }
        stringStart++;
      }
      return true;
    }

    let result = recurse(
      stringStart,
      stringEnd,
      patternArrayStart,
      patternArrayEnd
    );

    while (result === null && baseList[0]) {
      if (string[stringStart] === baseList[0]) {
        stringStart++;
        result = recurse(
          stringStart,
          stringEnd,
          patternArrayStart,
          patternArrayEnd
        );
      } else {
        baseList.shift();
      }
    }

    return result;
  };

  let variableLengthCharLast = (
    stringStart,
    stringEnd,
    patternArrayStart,
    patternArrayEnd
  ) => {
    // make array of base chars for first element and adjacent []* elements
    let baseList = [];
    while (
      patternArrayEnd >= patternArrayStart &&
      patternArray[patternArrayEnd][1] === "*" &&
      patternArray[patternArrayEnd][0] !== "."
    ) {
      baseList.push(patternArray[patternArrayEnd][0]);
      patternArrayEnd--;
    }

    if (patternArrayStart > patternArrayEnd) {
      // all elements were []*
      while (stringStart <= stringEnd) {
        while (string[stringEnd] !== baseList[0] && baseList[0]) {
          baseList.shift();
        }
        if (!baseList[0]) {
          return false;
        }
        stringEnd--;
      }
      return true;
    }

    let result = recurse(
      stringStart,
      stringEnd,
      patternArrayStart,
      patternArrayEnd
    );
    while (result === null && baseList[0]) {
      if (string[stringEnd] === baseList[0]) {
        stringEnd--;
        result = recurse(
          stringStart,
          stringEnd,
          patternArrayStart,
          patternArrayEnd
        );
      } else {
        baseList.shift();
      }
    }
    return result;
  };

  let variableLengthDots = (
    stringStart,
    stringEnd,
    patternArrayStart,
    patternArrayEnd
  ) => {
    // if first and last pattern element are the same element, string matches
    if (patternArrayStart === patternArrayEnd) {
      return true;
    }
    // identify needle to search through string for
    let i = patternArrayStart;
    let needle = null;
    let dotCount = 0;
    while (i <= patternArrayEnd) {
      if (patternArray[i][1] !== "*") {
        if (patternArray[i] === ".") {
          dotCount++;
        } else {
          needle = patternArray[i];
          break;
        }
      }
      i++;
    }

    if (needle === null) {
      // the only fixed-length elements are dots
      // if # dots > unread string length, string doesn't match
      // otherwise, it does
      return dotCount > stringEnd + 1 - stringStart ? false : true;
    }

    // search for the needle
    stringStart += dotCount; // only need to search past # chars needed for dots
    while (stringStart <= stringEnd && string[stringStart] !== needle) {
      stringStart++;
    }

    if (stringStart > stringEnd) {
      // if needle not found by end of string string doesn't match
      return false;
    }

    stringStart -= dotCount; // rewind for recurse, so 1st char goes in 1st dot
    patternArrayStart++; // resolve the .* element

    let result = recurse(
      stringStart,
      stringEnd,
      patternArrayStart,
      patternArrayEnd
    );

    // needed because wrong turns are allowed to hide in .* elements
    while (result === null) {
      stringStart++;
      while (stringStart <= stringEnd && string[stringStart] !== needle) {
        stringStart++;
      }
      if (stringStart > stringEnd) {
        return false;
      }

      result = recurse(
        stringStart,
        stringEnd,
        patternArrayStart,
        patternArrayEnd
      );
    }
    return result;
  };

  let recurse = (
    stringStart,
    stringEnd,
    patternArrayStart,
    patternArrayEnd
  ) => {
    if (patternArrayStart > patternArrayEnd) {
      return stringStart > stringEnd ? true : false;
    }

    leanPatternArrayForward(patternArrayStart, patternArrayEnd);
    if (
      // first element in pattern element array is fixed-length
      patternArrayStart <= patternArrayEnd &&
      patternArray[patternArrayStart][1] !== "*"
    ) {
      return fixedLengthFirst(
        stringStart,
        stringEnd,
        patternArrayStart,
        patternArrayEnd
      );
    }

    leanPatternArrayBack(patternArrayStart, patternArrayEnd);
    if (
      // last element in pattern element array is fixed-length
      patternArrayStart <= patternArrayEnd &&
      patternArray[patternArrayEnd][1] !== "*"
    ) {
      return fixedLengthLast(
        stringStart,
        stringEnd,
        patternArrayStart,
        patternArrayEnd
      );
    }

    if (
      // first element in pattern element array is []*
      patternArrayStart <= patternArrayEnd &&
      patternArray[patternArrayStart][0] !== "." &&
      stringStart <= stringEnd
    ) {
      return variableLengthCharFirst(
        stringStart,
        stringEnd,
        patternArrayStart,
        patternArrayEnd
      );
    }

    if (
      // last element in pattern element array is []*]
      patternArrayStart <= patternArrayEnd &&
      patternArray[patternArrayEnd][0] !== "." &&
      stringStart <= stringEnd
    ) {
      return variableLengthCharLast(
        stringStart,
        stringEnd,
        patternArrayStart,
        patternArrayEnd
      );
    }

    if (patternArrayStart <= patternArrayEnd) {
      // first and last element are both .* (possibly same element)
      return variableLengthDots(
        stringStart,
        stringEnd,
        patternArrayStart,
        patternArrayEnd
      );
    }
  };

  // MAIN EXECUTION START
  let patternArray = [];
  buildPatternArray();

  let patternArrayStart = 0;
  let patternArrayEnd = patternArray.length - 1;
  let previousLength = patternArray.length + 1;
  while (patternArray.length < previousLength) {
    previousLength = patternArray.length;
    leanPatternArrayForward(patternArrayStart, patternArrayEnd);
    reducePatternArray();
    leanDotStarsBack();
    reducePatternArray();
    leanPatternArrayBack(patternArrayStart, patternArrayEnd);
    reducePatternArray();
    leanDotStarsForward();
    reducePatternArray();
  }
  let stringStart = 0;
  let stringEnd = string.length - 1;
  // top level recurse call
  let result = recurse(
    stringStart,
    stringEnd,
    patternArrayStart,
    patternArrayEnd
  );

  return result === true ? true : false; // null and false both return false
};

module.exports = { isMatch };
