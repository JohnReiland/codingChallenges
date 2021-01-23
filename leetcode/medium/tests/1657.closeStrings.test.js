const { closeStrings } = require("../1657.closeStrings");

describe("closeStrings()", () => {
  test(`closeStrings("abc", "bca") should be true`, () => {
    expect(closeStrings("abc", "bca")).toBe(true);
  });

  test(`closeStrings("a", "aa") should be false`, () => {
    expect(closeStrings("a", "aa")).toBe(false);
  });

  test(`closeStrings("cabbba", "abbccc") should be false`, () => {
    expect(closeStrings("cabbba", "abbccc")).toBe(false);
  });

  test(`closeStrings("cabbba", "aabbss") should be result`, () => {
    expect(closeStrings("cabbba", "aabbss")).toBe(result);
  });

  test.skip(`closeStrings("word1", "word2") should be result`, () => {
    expect(closeStrings("word1", "word2")).toBe(result);
  });
});
