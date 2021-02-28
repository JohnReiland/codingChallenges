const { searchMatrix } = require("../240.searchMatrix");

describe("searchMatrix()", () => {
  test("searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5) should be true", () => {
    expect(
      searchMatrix(
        [
          [1, 4, 7, 11, 15],
          [2, 5, 8, 12, 19],
          [3, 6, 9, 16, 22],
          [10, 13, 14, 17, 24],
          [18, 21, 23, 26, 30],
        ],
        5
      )
    ).toBe(true);
  });

  test("searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 20) should be false", () => {
    expect(
      searchMatrix(
        [
          [1, 4, 7, 11, 15],
          [2, 5, 8, 12, 19],
          [3, 6, 9, 16, 22],
          [10, 13, 14, 17, 24],
          [18, 21, 23, 26, 30],
        ],
        20
      )
    ).toBe(false);
  });

  test.skip("searchMatrix(matrix, target) should be result", () => {
    expect(searchMatrix(matrix, target)).toBe(result);
  });
});
