const { validateStackSequences } = require("../946.validateStackSequences");

describe("validateStackSequences()", () => {
  test("validateStackSequences([1,2,3,4,5], [4,5,3,2,1]) should be true", () => {
    expect(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])).toBe(true);
  });

  test("validateStackSequences([1,2,3,4,5], [4,3,5,1,2]) should be false", () => {
    expect(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])).toBe(
      false
    );
  });

  test.skip("validateStackSequences(pushed, popped) should be result", () => {
    expect(validateStackSequences(pushed, popped)).toBe(result);
  });
});
