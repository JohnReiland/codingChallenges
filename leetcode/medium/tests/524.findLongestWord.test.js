const { findLongestWord } = require("../524.findLongestWord");

describe("findLongestWord()", () => {
  test(`findLongestWord("abpcplea", ["ale","apple","monkey","plea"]) should be "apple"`, () => {
    expect(
      findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"])
    ).toBe("apple");
  });

  test(`findLongestWord("abpcplea", ["a","b","c"]) should be "a"`, () => {
    expect(findLongestWord("abpcplea", ["a", "b", "c"])).toBe("a");
  });

  test(`findLongestWord("aewfafwafjlwajflwajflwafj", ["apple","ewaf","awefawfwaf","awef","awefe","ewafeffewafewf"]) should be "ewaf"`, () => {
    expect(
      findLongestWord("aewfafwafjlwajflwajflwafj", [
        "apple",
        "ewaf",
        "awefawfwaf",
        "awef",
        "awefe",
        "ewafeffewafewf",
      ])
    ).toBe("ewaf");
  });

  test(`findLongestWord("abpcpla", ["ale","apple","monkey","plea"]) should be ""`, () => {
    expect(findLongestWord("abpcpla", ["ale", "apple", "monkey", "plea"])).toBe(
      ""
    );
  });

  test.skip(`findLongestWord("string", dictionary) should be "result"`, () => {
    expect(findLongestWord("string", dictionary)).toBe("result");
  });
});
