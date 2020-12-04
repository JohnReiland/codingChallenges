const { kthFactor } = require("../1492.kthFactor");

describe("kthFactor()", () => {
  test("kthFactor(12, 3) should be 3", () => {
    expect(kthFactor(12, 3)).toBe(3);
  });

  test("kthFactor(7, 2) should be 7", () => {
    expect(kthFactor(7, 2)).toBe(7);
  });

  test("kthFactor(4, 4) should be -1", () => {
    expect(kthFactor(4, 4)).toBe(-1);
  });

  test("kthFactor(1, 1) should be 1", () => {
    expect(kthFactor(1, 1)).toBe(1);
  });

  test("kthFactor(1000, 3) should be 4", () => {
    expect(kthFactor(1000, 3)).toBe(4);
  });

  test.skip("kthFactor(nValue, kValue) should be result", () => {
    expect(kthFactor(nValue, kValue)).toBe(result);
  });
});
