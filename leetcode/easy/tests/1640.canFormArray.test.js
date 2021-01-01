const { canFormArray } = require("../1640.canFormArray");

describe("canFormArray()", () => {
  test("canFormArray([85], [[85]]) should be true", () => {
    expect(canFormArray([85], [[85]])).toBe(true);
  });

  test("canFormArray([15, 88], [[88], [15]]) should be true", () => {
    expect(canFormArray([15, 88], [[88], [15]])).toBe(true);
  });

  test("canFormArray([49, 18, 16], [[16, 18, 49]]) should be false", () => {
    expect(canFormArray([49, 18, 16], [[16, 18, 49]])).toBe(false);
  });

  test("canFormArray([91, 4, 64, 78], [[78], [4, 64], [91]]) should be true", () => {
    expect(canFormArray([91, 4, 64, 78], [[78], [4, 64], [91]])).toBe(true);
  });

  test("canFormArray([1, 3, 5, 7], [[2, 4, 6, 8]]) should be false", () => {
    expect(canFormArray([1, 3, 5, 7], [[2, 4, 6, 8]])).toBe(false);
  });

  test.skip("canFormArray([arr1], [[pieces]]) should be result", () => {
    expect(canFormArray([arr1], [[pieces]])).toBe(result);
  });
});
