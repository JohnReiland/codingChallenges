const { romanToInt } = require("../13.romanToInt");

describe("romanToInt()", () => {
  test(`romanToInt("III") should be 3`, () => {
    expect(romanToInt("III")).toBe(3);
  });

  test(`romanToInt("IV") should be 4`, () => {
    expect(romanToInt("IV")).toBe(4);
  });

  test(`romanToInt("IX") should be 9`, () => {
    expect(romanToInt("IX")).toBe(9);
  });

  test(`romanToInt("LVIII") should be 58`, () => {
    expect(romanToInt("LVIII")).toBe(58);
  });

  test(`romanToInt("MCMXCIV") should be 1994`, () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });

  test.skip(`romanToInt("string") should be result`, () => {
    expect(romanToInt("string")).toBe(result);
  });
});
