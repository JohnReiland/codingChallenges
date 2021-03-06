const {
  doesIntersect,
  findRanges,
  numberOfDiscIntersections,
} = require("../Beta.2010");

describe("doesIntersect()", () => {
  test("doesIntersect([-1, 1], [-4, 6]) should be true", () => {
    expect(doesIntersect([-1, 1], [-4, 6])).toBe(true);
  });

  test("doesIntersect([-1, 1], [2, 4]) should be false", () => {
    expect(doesIntersect([-1, 1], [2, 4])).toBe(false);
  });
});

describe("findRanges()", () => {
  test("findRanges([1, 5, 2, 1, 4, 0]) should be []", () => {
    expect(findRanges([1, 5, 2, 1, 4, 0])).toStrictEqual([
      [-1, 1],
      [-4, 6],
      [0, 4],
      [2, 4],
      [0, 8],
      [5, 5],
    ]);
  });
});

describe("numberOfDiscIntersections()", () => {
  test("numberOfDiscIntersections([1, 5, 2, 1, 4, 0]) should be 11", () => {
    expect(numberOfDiscIntersections([1, 5, 2, 1, 4, 0])).toBe(11);
  });
});
