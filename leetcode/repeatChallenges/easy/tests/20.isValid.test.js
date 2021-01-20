const { isValid } = require("../20.isValid");

describe("isValid()", () => {
  test(`isValid("()") should be result`, () => {
    expect(isValid("()")).toBe(true);
  });

  test(`isValid("()[]{}") should be true`, () => {
    expect(isValid("()[]{}")).toBe(true);
  });

  test(`isValid("(]") should be false`, () => {
    expect(isValid("(]")).toBe(false);
  });

  test(`isValid("([)]") should be false`, () => {
    expect(isValid("([)]")).toBe(false);
  });

  test(`isValid("{[]}") should be true`, () => {
    expect(isValid("{[]}")).toBe(true);
  });

  test.skip(`isValid("string") should be result`, () => {
    expect(isValid("string")).toBe(result);
  });
});
