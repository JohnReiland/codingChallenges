const { maxOperations } = require("../1679.maxOperations");

describe("maxOperations()", () => {
  test("maxOperations([1,2,3,4], 5) should be 2", () => {
    expect(maxOperations([1, 2, 3, 4], 5)).toBe(2);
  });

  test("maxOperations([3,1,3,4,3], 6) should be 1", () => {
    expect(maxOperations([3, 1, 3, 4, 3], 6)).toBe(1);
  });

  test.skip("maxOperations(nums, k) should be result", () => {
    expect(maxOperations(nums, k)).toBe(result);
  });
});
