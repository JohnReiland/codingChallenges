const { longestSubstring } = require("../395.longestSubstring");

describe("longestSubstring()", () => {
  test(`longestSubstring("aaabb", 3) should be 3`, () => {
    expect(longestSubstring("aaabb", 3)).toBe(3);
  });

  test(`longestSubstring("aaabb", 2) should be 5`, () => {
    expect(longestSubstring("aaabb", 2)).toBe(5);
  });

  test(`longestSubstring("ababbc", 2) should be 5`, () => {
    expect(longestSubstring("ababbc", 2)).toBe(5);
  });

  test(`longestSubstring("cababb", 2) should be 5`, () => {
    expect(longestSubstring("cababb", 2)).toBe(5);
  });

  test(`longestSubstring("ababbc", 12) should be 0`, () => {
    expect(longestSubstring("ababbc", 12)).toBe(0);
  });

  test(`longestSubstring("", 1) should be 0`, () => {
    expect(longestSubstring("", 1)).toBe(0);
  });

  test(`longestSubstring("klidgfhkhbdfglibdshjwkjqaorjhnvgnjmfjhgavsdofgadlirgbidafvghydsufbge", 2) should be 17`, () => {
    expect(
      longestSubstring(
        "klidgfhkhbdfglibdshjwkjqaorjhnvgnjmfjhgavsdofgadlirgbidafvghydsufbge",
        2
      )
    ).toBe(17);
  });

  test(`longestSubstring("bchhbbdefghiaaacb", 3) should be 3`, () => {
    expect(longestSubstring("bchhbbdefghiaaacb", 3)).toBe(3);
  });

  test.skip(`longestSubstring("value", kalue) should be result`, () => {
    expect(longestSubstring("value", kalue)).toBe(result);
  });
});
