const { findKthPositive } = require("../1539.findKthPositive");

describe("findKthPositive()", () => {
  test("findKthPositive([2, 3, 4, 7, 11], 5), should be 9", () => {
    expect(findKthPositive([2, 3, 4, 7, 11], 5)).toBe(9);
  });

  test("findKthPositive([1, 2, 3, 4], 2), should be 6", () => {
    expect(findKthPositive([1, 2, 3, 4], 2)).toBe(6);
  });

  test.skip("findKthPositive(arr, target), should be result", () => {
    expect(findKthPositive(arr, target)).toBe(result);
  });
});
