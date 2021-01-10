const { createSortedArray } = require("../1649.createSortedArray");

describe("createSortedArray()", () => {
  test("createSortedArray([1, 5, 6, 2]) should be result", () => {
    expect(createSortedArray([1, 5, 6, 2])).toBe(result);
  });

  test("createSortedArray([1, 2, 3, 6, 5, 4]) should be result", () => {
    expect(createSortedArray([1, 2, 3, 6, 5, 4])).toBe(result);
  });

  test("createSortedArray([1, 3, 3, 3, 2, 4, 2, 1, 2]) should be result", () => {
    expect(createSortedArray([1, 3, 3, 3, 2, 4, 2, 1, 2])).toBe(result);
  });

  test.skip("createSortedArray(instructions) should be result", () => {
    expect(createSortedArray(instructions)).toBe(result);
  });
});
