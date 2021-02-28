const { merge } = require("../88.merge");

describe("merge()", () => {
  const nums1A = [1, 2, 3, 0, 0, 0];
  const nums2A = [2, 5, 6];
  let count1A = 3;
  let count2A = 3;
  merge(nums1A, count1A, nums2A, count2A);
  test("merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3) should be [1, 2, 2, 3, 5, 6]", () => {
    expect(nums1A).toStrictEqual([1, 2, 2, 3, 5, 6]);
  });

  const nums1B = [1];
  const nums2B = [];
  let count1B = 1;
  let count2B = 0;
  merge(nums1B, count1B, nums2B, count2B);
  test("merge([1], 1, [], 0) should be [1]", () => {
    expect(nums1B).toStrictEqual([1]);
  });

  const nums1C = [0];
  const nums2C = [1];
  let count1C = 0;
  let count2C = 1;
  merge(nums1C, count1C, nums2C, count2C);
  test("merge([0], 0, [1], 1) should be [1]", () => {
    expect(nums1C).toStrictEqual([1]);
  });

  test.skip("merge(nums1, count1, nums2, count2) should be result", () => {
    expect(merge(nums1, count1, nums2, count2)).toStrictEqual(result);
  });
});
