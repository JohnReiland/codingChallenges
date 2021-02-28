const {
  arrMedian,
  findMedianSortedArrays,
} = require("../4.findMedianSortedArrays");

describe("findMedianSortedArrays()", () => {
  test("findMedianSortedArrays([1, 3], [2]) shoule be 2", () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  });

  test("findMedianSortedArrays([1, 2], [3, 4]) shoule be 2.5", () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  });

  test("findMedianSortedArrays([1, 2], [5, 6, 7, 8]) shoule be 5.5", () => {
    expect(findMedianSortedArrays([1, 2], [5, 6, 7, 8])).toBe(5.5);
  });

  test("findMedianSortedArrays([1, 2, 3], [5, 6, 7, 8]) shoule be 5", () => {
    expect(findMedianSortedArrays([1, 2, 3], [5, 6, 7, 8])).toBe(5);
  });

  test("findMedianSortedArrays([1, 2, 3, 4], [6, 7, 8]) shoule be 4", () => {
    expect(findMedianSortedArrays([1, 2, 3, 4], [6, 7, 8])).toBe(4);
  });

  test("findMedianSortedArrays([1, 2, 3, 20, 21, 22, 23, 24, 25], [0, 5, 10, 15, 20, 25, 30]) shoule be 20", () => {
    expect(
      findMedianSortedArrays(
        [1, 2, 3, 20, 21, 22, 23, 24, 25],
        [0, 5, 10, 15, 20, 25, 30]
      )
    ).toBe(20);
  });

  test("findMedianSortedArrays([1, 2], [1]) shoule be 1", () => {
    expect(findMedianSortedArrays([1, 2], [1])).toBe(1);
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

describe.skip("arrMedian()", () => {
  test("arrMedian([1, 2, 3]) shoule be 2", () => {
    expect(arrMedian([1, 2, 3])).toBe(2);
  });

  test("arrMedian([1, 2]) shoule be 1.5", () => {
    expect(arrMedian([1, 2])).toBe(1.5);
  });

  test("arrMedian([1]) shoule be 1", () => {
    expect(arrMedian([1])).toBe(1);
  });
});
