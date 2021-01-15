const { getMaximumGenerated } = require("../1646.getMaximumGenerated");

describe("getMaximumGenerated()", () => {
  test("getMaximumGenerated(7) should be 3", () => {
    expect(getMaximumGenerated(7)).toBe(3);
  });

  test("getMaximumGenerated(2) should be 1", () => {
    expect(getMaximumGenerated(2)).toBe(1);
  });

  test("getMaximumGenerated(3) should be 2", () => {
    expect(getMaximumGenerated(3)).toBe(2);
  });

  test.skip("getMaximumGenerated(int) should be result", () => {
    expect(getMaximumGenerated(int)).toBe(result);
  });
});
