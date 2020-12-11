const { removeDuplicates } = require("../80.removeDuplicates");

describe("removeDuplicates()", () => {
  const nums1 = [1, 1, 1, 2, 2, 3];
  const result1 = [1, 1, 2, 2, 3];
  test("removeDuplicates([1, 1, 1, 2, 2, 3]) should be [1, 1, 2, 2, 3]", () => {
    expect(nums1.slice(0, removeDuplicates([nums1]))).toStrictEqual(result1);
  });

  const nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
  const result2 = [0, 0, 1, 1, 2, 3, 3];
  test("removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]) should be [0, 0, 1, 1, 2, 3, 3]", () => {
    expect(nums2.slice(0, removeDuplicates(nums2))).toStrictEqual(result2);
  });

  test.skip("removeDuplicates(nums) should be result", () => {
    expect(nums.slice(0, removeDuplicates(nums))).toStrictEqual(result);
  });
});
