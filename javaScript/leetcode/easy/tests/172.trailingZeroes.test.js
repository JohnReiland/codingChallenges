const { trailingZeroes } = require("../172.trailingZeroes");

describe("trailingZeroes()", () => {
  test("trailingZeroes(3) should be 0", () => {
    expect(trailingZeroes(3)).toBe(0);
  });

  test("trailingZeroes(5) should be 1", () => {
    expect(trailingZeroes(5)).toBe(1);
  });

  test("trailingZeroes(0) should be 0", () => {
    expect(trailingZeroes(0)).toBe(0);
  });

  test.skip("trailingZeroes(num) should be result", () => {
    expect(trailingZeroes(num)).toBe(result);
  });
});
