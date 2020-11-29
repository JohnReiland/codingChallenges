const { canReach } = require("../1306.canReach");

describe("canReach()", () => {
  test("canReach([4, 2, 3, 0, 3, 1, 2], 5) should be true", () => {
    expect(canReach([4, 2, 3, 0, 3, 1, 2], 5)).toBe(true);
  });

  test("canReach([4, 2, 3, 0, 3, 1, 2], 0) should be true", () => {
    expect(canReach([4, 2, 3, 0, 3, 1, 2], 0)).toBe(true);
  });

  test("canReach([3, 0, 2, 1, 2], 2) should be false", () => {
    expect(canReach([3, 0, 2, 1, 2], 2)).toBe(false);
  });

  test.skip("canReach(arr, start) should be result", () => {
    expect(canReach(arr, start)).toBe(result);
  });
});
