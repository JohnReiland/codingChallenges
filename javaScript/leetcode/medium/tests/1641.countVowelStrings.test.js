const { countVowelStrings } = require("../1641.countVowelStrings");

describe("countVowelStrings()", () => {
  test("countVowelStrings(1) should be 5", () => {
    expect(countVowelStrings(1)).toBe(5);
  });

  test("countVowelStrings(2) should be 15", () => {
    expect(countVowelStrings(2)).toBe(15);
  });

  test("countVowelStrings(33) should be 66045", () => {
    expect(countVowelStrings(33)).toBe(66045);
  });

  test.skip("countVowelStrings(int) should be result", () => {
    expect(countVowelStrings(int)).toBe(result);
  });
});
