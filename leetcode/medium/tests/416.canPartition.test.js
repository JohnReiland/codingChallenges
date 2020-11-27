const { canPartition } = require("../416.canPartition");

describe("canPartition()", () => {
  test("canPartition([1,5,11,5]) should be true", () => {
    expect(canPartition([1, 5, 11, 5])).toBe(true);
  });

  test("canPartition([1,2,3,5]) should be false", () => {
    expect(canPartition([1, 2, 3, 5])).toBe(false);
  });

  test.skip("canPartition(value) should be result", () => {
    expect(canPartition(value)).toBe(result);
  });
});
