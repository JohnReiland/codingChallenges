const {
  shortestPathBinaryMatrix,
} = require("../1091.shortestPathBinaryMatrix");

describe("shortestPathBinaryMatrix()", () => {
  const grid1 = [
    [0, 1],
    [1, 0],
  ];
  test("shortestPathBinaryMatrix(grid1) should be 2", () => {
    expect(shortestPathBinaryMatrix(grid1)).toBe(2);
  });

  const grid2 = [
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ];
  test("shortestPathBinaryMatrix(grid2) should be 4", () => {
    expect(shortestPathBinaryMatrix(grid2)).toBe(4);
  });

  test.skip("shortestPathBinaryMatrix(grid) should be result", () => {
    expect(shortestPathBinaryMatrix(grid)).toBe(result);
  });
});
