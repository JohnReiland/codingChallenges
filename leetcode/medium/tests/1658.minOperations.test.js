const { minOperations } = require("../1658.minOperations");

describe("minOperations()", () => {
  test("minOperations([1,1,4,2,3], 5) should be 2", () => {
    expect(minOperations([1, 1, 4, 2, 3], 5)).toBe(2);
  });

  test("minOperations([5,6,7,8,9], 4) should be -1", () => {
    expect(minOperations([5, 6, 7, 8, 9], 4)).toBe(-1);
  });

  test("minOperations([3,2,20,1,1,3], 10) should be 5", () => {
    expect(minOperations([3, 2, 20, 1, 1, 3], 10)).toBe(5);
  });

  test.skip("minOperations(nums, x) should be result", () => {
    expect(minOperations(nums, x)).toBe(result);
  });
});
