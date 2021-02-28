const {
  shortestPathBinaryMatrix,
} = require("../1091.shortestPathBinaryMatrix");

describe.skip("legalMoves()", () => {
  const position1 = [0, 0];
  const visited1 = [];
  const result1 = [[0, 1]];
  test("legalMoves(position1, visited1) should be result1", () => {
    expect(legalMoves(position1, visited1)).toStrictEqual(result1);
  });

  const position2 = [0, 1];
  const visited2 = [[true]];
  const result2 = [
    [0, 2],
    [1, 2],
  ];
  test("legalMoves(position2, visited2) should be result2", () => {
    expect(legalMoves(position2, visited2)).toStrictEqual(result2);
  });
});

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
