const { isAnagram } = require("../242.isAnagram");

describe("isAnagram()", () => {
  test(`isAnagram("string", "test") should be true`, () => {
    expect(isAnagram("string", "test")).toBe(true);
  });

  test(`isAnagram("string", "test") should be false`, () => {
    expect(isAnagram("string", "test")).toBe(false);
  });

  test(`isAnagram("string", "test") should be result`, () => {
    expect(isAnagram("string", "test")).toBe(result);
  });
});
