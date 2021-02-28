const { removeDuplicates } = require("../80.removeDuplicates");

describe("removeDuplicates()", () => {
  const nums1 = [1, 1, 1, 2, 2, 3];
  const result1 = [1, 1, 2, 2, 3];
  test("removeDuplicates([1, 1, 1, 2, 2, 3]) should be [1, 1, 2, 2, 3]", () => {
    expect(nums1.slice(0, removeDuplicates(nums1))).toStrictEqual(result1);
  });

  const nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
  const result2 = [0, 0, 1, 1, 2, 3, 3];
  test("removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]) should be [0, 0, 1, 1, 2, 3, 3]", () => {
    expect(nums2.slice(0, removeDuplicates(nums2))).toStrictEqual(result2);
  });

  const nums3 = [];
  const result3 = [];
  test("removeDuplicates([]) should be []", () => {
    expect(nums3.slice(0, removeDuplicates(nums3))).toStrictEqual(result3);
  });

  const nums4 = [1, 1, 1];
  const result4 = [1, 1];
  test("removeDuplicates([1, 1, 1]) should be [1, 1]", () => {
    expect(nums4.slice(0, removeDuplicates(nums4))).toStrictEqual(result4);
  });

  const nums5 = [-4, -3, -2, -2, -2, 2, 3, 3, 3, 4, 4, 4, 4];
  const result5 = [-4, -3, -2, -2, 2, 3, 3, 4, 4];
  test("removeDuplicates([-4, -3, -2, -2, -2, 2, 3, 3, 3, 4, 4, 4, 4]) should be [-4, -3, -2, -2, 2, 3, 3, 4, 4]", () => {
    expect(nums5.slice(0, removeDuplicates(nums5))).toStrictEqual(result5);
  });

  test.skip("removeDuplicates(nums) should be result", () => {
    expect(nums.slice(0, removeDuplicates(nums))).toStrictEqual(result);
  });
});
