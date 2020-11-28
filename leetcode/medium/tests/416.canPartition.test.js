const { canMake, canPartition } = require("../416.canPartition");

describe("canMake()", () => {
  test("canMake([1, 2, 3, 4, 5, 6, 7], 5) should be true", () => {
    expect(canMake([1, 2, 3, 4, 5, 6, 7], 5)).toBe(true);
  });

  test("canMake([3, 5, 6, 9], 15) should be true", () => {
    expect(canMake([3, 5, 6, 9], 15)).toBe(true);
  });

  test.skip("canMake(array, target) should be result", () => {
    expect(canMake(array, target)).toBe(result);
  });
});

describe("canPartition()", () => {
  test("canPartition([1, 2, 3, 5]) should be false", () => {
    expect(canPartition([1, 2, 3, 5])).toBe(false);
  });

  test("canPartition([5, 5, 15, 24, 24, 27]) should be false", () => {
    expect(canPartition([5, 5, 15, 24, 24, 27])).toBe(false);
  });

  test("canPartition([1, 5, 11, 5]) should be true", () => {
    expect(canPartition([1, 5, 11, 5])).toBe(true);
  });

  test("canPartition([1, 5, 11, 5]) should be true", () => {
    expect(canPartition([1, 5, 11, 5])).toBe(true);
  });

  test("canPartition([24, 25, 26, 25]) should be true", () => {
    expect(canPartition([24, 25, 26, 25])).toBe(true);
  });

  test.skip("canPartition(value) should be result", () => {
    expect(canPartition(value)).toBe(result);
  });
});
