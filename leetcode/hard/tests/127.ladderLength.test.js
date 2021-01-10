const { ladderLength } = require("../127.ladderLength");

describe("ladderLength()", () => {
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
