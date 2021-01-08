const { arrayStringsAreEqual } = require("../1662.arrayStringsAreEqual");

describe("arrayStringsAreEqual()", () => {
  test(`arrayStringsAreEqual(["ab", "c"], ["a", "bc"]) should be true`, () => {
    expect(arrayStringsAreEqual(["ab", "c"], ["a", "bc"])).toBe(true);
  });

  test(`arrayStringsAreEqual(["a", "cb"], ["ab", "c"]) should be false`, () => {
    expect(arrayStringsAreEqual(["a", "cb"], ["ab", "c"])).toBe(false);
  });

  test(`arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]) should be true`, () => {
    expect(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"])).toBe(true);
  });

  test.skip(`arrayStringsAreEqual(word1, word2) should be result`, () => {
    expect(arrayStringsAreEqual(word1, word2)).toBe(result);
  });
});
