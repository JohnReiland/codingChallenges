const { longestPalindrome } = require("../5.longestPalindrome");

describe("longestPalindrome()", () => {
  test(`longestPalindrome("babad") should be "bab"`, () => {
    expect(longestPalindrome("babad")).toBe("bab");
  });

  test(`longestPalindrome("cbbd") should be "bb"`, () => {
    expect(longestPalindrome("cbbd")).toBe("bb");
  });

  test(`longestPalindrome("a") should be "a"`, () => {
    expect(longestPalindrome("a")).toBe("a");
  });

  test(`longestPalindrome("ac") should be "a"`, () => {
    expect(longestPalindrome("ac")).toBe("a");
  });

  test.skip(`longestPalindrome("string") should be "result"`, () => {
    expect(longestPalindrome("string")).toBe("result");
  });
});
