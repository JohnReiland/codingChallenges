const { divide } = require("../29.divide");

describe("divide()", () => {
  test("divide(10, 3) should be 3", () => {
    expect(divide(10, 3)).toBe(3);
  });

  test("divide(7, -3) should be -2", () => {
    expect(divide(7, -3)).toBe(-2);
  });

  test("divide(0, 1) should be 0", () => {
    expect(divide(0, 1)).toBe(0);
  });

  test("divide(1, 1) should be 1", () => {
    expect(divide(1, 1)).toBe(1);
  });

  test.skip("divide(dividend, divisor) should be result", () => {
    expect(divide(dividend, divisor)).toBe(result);
  });
});
