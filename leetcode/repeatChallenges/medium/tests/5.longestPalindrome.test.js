const {
  oddPalindromeAtInd,
  longestPalindrome,
  evenPalindromeAtInd,
} = require("../5.longestPalindrome");

describe("oddPalindromeAtInd()", () => {
  test(`oddPalindromeAtInd("babad", 0) should be 1`, () => {
    expect(oddPalindromeAtInd("babad", 0)).toBe(1);
  });

  test(`oddPalindromeAtInd("babad", 1) should be 3`, () => {
    expect(oddPalindromeAtInd("babad", 1)).toBe(3);
  });

  test.skip(`oddPalindromeAtInd("string", index) should be result`, () => {
    expect(oddPalindromeAtInd("string", index)).toBe(result);
  });
});

describe("evenPalindromeAtInd()", () => {
  test(`evenPalindromeAtInd("cbbd", 0) should be 0`, () => {
    expect(evenPalindromeAtInd("cbbd", 0)).toBe(0);
  });

  test(`evenPalindromeAtInd("cbbd", 1) should be 2`, () => {
    expect(evenPalindromeAtInd("cbbd", 1)).toBe(2);
  });

  test.skip(`evenPalindromeAtInd("string", index) should be result`, () => {
    expect(evenPalindromeAtInd("string", index)).toBe(result);
  });
});

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
