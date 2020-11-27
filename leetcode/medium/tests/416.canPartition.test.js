const { sumArray, canPartition } = require("../416.canPartition");

describe("sumArray()", () => {
  test("sumArray[1, 2, 3, 4] should be 10", () => {
    expect(sumArray([1, 2, 3, 4])).toBe(10);
  });

  test("sumArray[] should be 0", () => {
    expect(sumArray([])).toBe(0);
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

  test("canPartition([24, 25, 26, 25]) should be true", () => {
    expect(canPartition([24, 25, 26, 25])).toBe(true);
  });

  test.skip("canPartition(value) should be result", () => {
    expect(canPartition(value)).toBe(result);
  });
});
