const { getSkyline } = require("../218.getSkyline");

describe("getSkyline()", () => {
  test("getSkyline([ [2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8] ]) should be [ [2, 10], [3, 15], [7, 12], [12, 0], [15, 10], [20, 8], [24, 0] ]", () => {
    expect(
      getSkyline([
        [2, 9, 10],
        [3, 7, 15],
        [5, 12, 12],
        [15, 20, 10],
        [19, 24, 8],
      ])
    ).toStrictEqual([
      [2, 10],
      [3, 15],
      [7, 12],
      [12, 0],
      [15, 10],
      [20, 8],
      [24, 0],
    ]);
  });

  test.skip("getSkyline(buildings) should be result", () => {
    expect(getSkyline(buildings)).toStrictEqual(result);
  });
});
