const { Node, BST, createSortedArray } = require("../1649.createSortedArray");

describe("createSortedArray()", () => {
  test("createSortedArray([1, 5, 6, 2]) should be 1", () => {
    expect(createSortedArray([1, 5, 6, 2])).toBe(1);
  });

  test("createSortedArray([1, 2, 3, 6, 5, 4]) should be 3", () => {
    expect(createSortedArray([1, 2, 3, 6, 5, 4])).toBe(3);
  });

  test("createSortedArray([1, 3, 3, 3, 2, 4, 2, 1, 2]) should be 4", () => {
    expect(createSortedArray([1, 3, 3, 3, 2, 4, 2, 1, 2])).toBe(4);
  });

  test("createSortedArray([1, 5, 6, 24, 6, 5, 7, 8, 9]) should be 5", () => {
    expect(createSortedArray([1, 5, 6, 24, 6, 5, 7, 8, 9])).toBe(5);
  });

  test("createSortedArray([1, 9, 2, 10, 3, 11, 4, 12, 5, 13, 6, 14, 7, 15, 8, 16]) should be 56", () => {
    expect(
      createSortedArray([1, 16, 2, 15, 3, 14, 4, 13, 5, 12, 6, 11, 7, 10, 8, 9])
    ).toBe(56);
  });

  test.skip("createSortedArray(instructions) should be result", () => {
    expect(createSortedArray(instructions)).toBe(result);
  });
});
