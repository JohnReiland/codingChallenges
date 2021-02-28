const { isAnagram } = require("../242.isAnagram");

describe("isAnagram()", () => {
  test(`isAnagram("anagram", "nagaram") should be true`, () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
  });

  test(`isAnagram("rat", "car") should be false`, () => {
    expect(isAnagram("rat", "car")).toBe(false);
  });

  test.skip(`isAnagram("string", "test") should be result`, () => {
    expect(isAnagram("string", "test")).toBe(result);
  });
});
