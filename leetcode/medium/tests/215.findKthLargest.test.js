const { findKthLargest } = require("../215.findKthLargest");

describe("findKthLargest()", () => {
  test("findKthLargest([3,2,1,5,6,4], 2) should be 5", () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
  });

  test("findKthLargest([3,2,3,1,2,4,5,5,6], 4) should be 4", () => {
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
  });

  test.skip("findKthLargest(nums, kTarget) should be result", () => {
    expect(findKthLargest(nums, kTarget)).toBe(result);
  });
});
