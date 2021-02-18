const { letterCasePermutation } = require("../784.letterCasePermutation");

describe("letterCasePermutation()", () => {
  test(`letterCasePermutation("a1b2") should be ["a1b2","a1B2","A1b2","A1B2"]`, () => {
    expect(letterCasePermutation("a1b2")).toEqual(
      expect.arrayContaining(["a1b2", "a1B2", "A1b2", "A1B2"])
    );
    expect(letterCasePermutation("a1b2").length).toBe(4);
  });

  test(`letterCasePermutation("3z4") should be ["3z4","3Z4"]`, () => {
    expect(letterCasePermutation("3z4")).toEqual(
      expect.arrayContaining(["3z4", "3Z4"])
    );
    expect(letterCasePermutation("3z4").length).toBe(2);
  });

  test(`letterCasePermutation("12345") should be ["12345"]`, () => {
    expect(letterCasePermutation("12345")).toEqual(
      expect.arrayContaining(["12345"])
    );
    expect(letterCasePermutation("12345").length).toBe(1);
  });

  test(`letterCasePermutation("0") should be ["0"]`, () => {
    expect(letterCasePermutation("0")).toEqual(expect.arrayContaining(["0"]));
    expect(letterCasePermutation("0").length).toBe(1);
  });

  test.skip(`letterCasePermutation("string") should be result`, () => {
    expect(letterCasePermutation("string")).toEqual(
      expect.arrayContaining(result)
    );
    expect(letterCasePermutation("string").length).toBe(result.length);
  });
});
