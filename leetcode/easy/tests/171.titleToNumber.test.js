const { titleToNumber } = require("../171.titleToNumber");

describe("titleToNumber()", () => {
  test(`titleToNumber("A") should be 1`, () => {
    expect(titleToNumber("A")).toBe(1);
  });

  test(`titleToNumber("AB") should be 28`, () => {
    expect(titleToNumber("AB")).toBe(28);
  });

  test(`titleToNumber("ZY") should be 701`, () => {
    expect(titleToNumber("ZY")).toBe(701);
  });

  test.skip(`titleToNumber(string) should be result`, () => {
    expect(titleToNumber(string)).toBe(result);
  });
});
