const { psuedoWords, ladderLength } = require("../127.ladderLength");

describe("psuedoWords()", () => {
  test(`psuedoWords("string") should be ["*tring", "s*ring", "st*ing", "str*ng", "stri*g", "strin*"]`, () => {
    expect(psuedoWords("string")).toStrictEqual([
      "*tring",
      "s*ring",
      "st*ing",
      "str*ng",
      "stri*g",
      "strin*",
    ]);
  });

  test.skip(`psuedoWords("string") should be result`, () => {
    expect(psuedoWords("string")).toStrictEqual(result);
  });
});

describe("ladderLength()", () => {
  test(`ladderLength("hit", "hot", ["hot", "dot", "dog", "lot", "log", "cog"]) should be 2`, () => {
    expect(
      ladderLength("hit", "hot", ["hot", "dot", "dog", "lot", "log", "cog"])
    ).toBe(2);
  });

  test(`ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]) should be 5`, () => {
    expect(
      ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
    ).toBe(5);
  });

  test(`ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"]) should be 0`, () => {
    expect(
      ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])
    ).toBe(0);
  });

  test.skip(`ladderLength("beginWord", "endWord", wordList) should be result`, () => {
    expect(ladderLength("beginWord", "endWord", wordList)).toBe(result);
  });
});
