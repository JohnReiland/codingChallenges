const { maxArea } = require("../11.maxArea");

describe("maxArea()", () => {
  test("maxArea([1,8,6,2,5,4,8,3,7]) should be 49", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  test("maxArea([1,1]) should be 1", () => {
    expect(maxArea([1, 1])).toBe(1);
  });

  test("maxArea([4,3,2,1,4]) should be 16", () => {
    expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
  });

  test("maxArea([1,2,1]) should be 2", () => {
    expect(maxArea([1, 2, 1])).toBe(2);
  });

  test.skip("maxArea(heights) should be result", () => {
    expect(maxArea(heights)).toBe(result);
  });
});
