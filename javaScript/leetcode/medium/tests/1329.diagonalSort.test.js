const { diagonalSort } = require("../1329.diagonalSort");

describe("diagonalSort()", () => {
  test("diagonalSort([[3,3,1,1],[2,2,1,2],[1,1,1,2]]) should be [[1,1,1,1],[1,2,2,2],[1,2,3,3]]", () => {
    expect(
      diagonalSort([
        [3, 3, 1, 1],
        [2, 2, 1, 2],
        [1, 1, 1, 2],
      ])
    ).toStrictEqual([
      [1, 1, 1, 1],
      [1, 2, 2, 2],
      [1, 2, 3, 3],
    ]);
  });

  test.skip("diagonalSort(mat) should be result", () => {
    expect(diagonalSort(mat)).toStrictEqual(result);
  });
});
