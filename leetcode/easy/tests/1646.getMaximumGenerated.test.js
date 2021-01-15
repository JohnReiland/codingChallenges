const { getMaximumGenerated } = require("../1646.getMaximumGenerated");

describe("getMaximumGenerated()", () => {
  test("getMaximumGenerated(0) should be 0", () => {
    expect(getMaximumGenerated(0)).toBe(0);
  });
  test("getMaximumGenerated(1) should be 1", () => {
    expect(getMaximumGenerated(1)).toBe(1);
  });

  test("getMaximumGenerated(2) should be 1", () => {
    expect(getMaximumGenerated(2)).toBe(1);
  });

  test("getMaximumGenerated(3) should be 2", () => {
    expect(getMaximumGenerated(3)).toBe(2);
  });
  test("getMaximumGenerated(4) should be 2", () => {
    expect(getMaximumGenerated(4)).toBe(2);
  });
  test("getMaximumGenerated(5) should be 3", () => {
    expect(getMaximumGenerated(5)).toBe(3);
  });
  test("getMaximumGenerated(6) should be 3", () => {
    expect(getMaximumGenerated(6)).toBe(3);
  });

  test("getMaximumGenerated(7) should be 3", () => {
    expect(getMaximumGenerated(7)).toBe(3);
  });

  test("getMaximumGenerated(8) should be 3", () => {
    expect(getMaximumGenerated(8)).toBe(3);
  });

  test("getMaximumGenerated(9) should be 4", () => {
    expect(getMaximumGenerated(9)).toBe(4);
  });

  test("getMaximumGenerated(10) should be 4", () => {
    expect(getMaximumGenerated(10)).toBe(4);
  });

  test("getMaximumGenerated(39) should be 11", () => {
    expect(getMaximumGenerated(39)).toBe(11);
  });

  test.skip("getMaximumGenerated(int) should be result", () => {
    expect(getMaximumGenerated(int)).toBe(result);
  });
});
