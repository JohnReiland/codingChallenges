const { findMedianSortedArrays } = require("../4.findMedianSortedArrays");

describe("findMedianSortedArrays()", () => {
  test("findMedianSortedArrays([1,3], [2]) shoule be 2", () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  });

  test("findMedianSortedArrays([1,2], [3,4]) shoule be 2.5", () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  });

  test("findMedianSortedArrays([0,0], [0,0]) shoule be 0", () => {
    expect(findMedianSortedArrays([0, 0], [0, 0])).toBe(0);
  });

  test("findMedianSortedArrays([], [1]) shoule be 1", () => {
    expect(findMedianSortedArrays([], [1])).toBe(1);
  });

  test("findMedianSortedArrays([2], []) shoule be 2", () => {
    expect(findMedianSortedArrays([2], [])).toBe(2);
  });

  test.skip("findMedianSortedArrays(array1, array2) shoule be result", () => {
    expect(findMedianSortedArrays(array1, array2)).toBe(result);
  });
});
