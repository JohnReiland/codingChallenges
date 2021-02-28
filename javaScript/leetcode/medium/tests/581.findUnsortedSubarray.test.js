const { findUnsortedSubarray } = require("../581.findUnsortedSubarray");

describe("findUnsortedSubarray()", () => {
  test("findUnsortedSubarray([2,6,4,8,10,9,15]) should be 5", () => {
    expect(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])).toBe(5);
  });

  test("findUnsortedSubarray([1,2,3,4]) should be 0", () => {
    expect(findUnsortedSubarray([1, 2, 3, 4])).toBe(0);
  });

  test("findUnsortedSubarray([1]) should be 0", () => {
    expect(findUnsortedSubarray([1])).toBe(0);
  });

  test.skip("findUnsortedSubarray(nums) should be result", () => {
    expect(findUnsortedSubarray(nums)).toBe(result);
  });
});
