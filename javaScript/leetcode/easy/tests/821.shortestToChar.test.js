const { shortestToChar } = require("../821.shortestToChar");

describe("shortestToChar()", () => {
  test(`shortestToChar("loveleetcode", "e") should be [3,2,1,0,1,0,0,1,2,2,1,0]`, () => {
    expect(shortestToChar("loveleetcode", "e")).toStrictEqual([
      3,
      2,
      1,
      0,
      1,
      0,
      0,
      1,
      2,
      2,
      1,
      0,
    ]);
  });

  test(`shortestToChar("aaab", "b") should be [3,2,1,0]`, () => {
    expect(shortestToChar("aaab", "b")).toStrictEqual([3, 2, 1, 0]);
  });

  test.skip(`shortestToChar(string, character) should be result`, () => {
    expect(shortestToChar(string, character)).toStrictEqual(result);
  });
});
