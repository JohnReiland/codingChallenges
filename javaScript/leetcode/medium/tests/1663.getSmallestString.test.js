const { getSmallestString } = require("../1663.getSmallestString");

describe("getSmallestString()", () => {
  test(`getSmallestString(3, 27), should be "aay"`, () => {
    expect(getSmallestString(3, 27)).toBe("aay");
  });

  test(`getSmallestString(5, 73), should be "aaszz"`, () => {
    expect(getSmallestString(5, 73)).toBe("aaszz");
  });

  test.skip(`getSmallestString(num, k), should be "result"`, () => {
    expect(getSmallestString(num, k)).toBe("result");
  });
});
