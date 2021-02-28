const { scoreOfParentheses } = require("../865.scoreOfParentheses");

describe("scoreOfParentheses()", () => {
  test(`scoreOfParentheses("()") should be 1`, () => {
    expect(scoreOfParentheses("()")).toBe(1);
  });

  test(`scoreOfParentheses("(())") should be 2`, () => {
    expect(scoreOfParentheses("(())")).toBe(2);
  });

  test(`scoreOfParentheses("()()") should be 2`, () => {
    expect(scoreOfParentheses("()()")).toBe(2);
  });

  test(`scoreOfParentheses("(()(()))") should be 6`, () => {
    expect(scoreOfParentheses("(()(()))")).toBe(6);
  });

  test.skip(`scoreOfParentheses("string") should be result`, () => {
    expect(scoreOfParentheses("string")).toBe(result);
  });
});
