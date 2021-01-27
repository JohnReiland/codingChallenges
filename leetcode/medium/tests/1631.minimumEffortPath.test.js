const { minimumEffortPath } = require("../1631.minimumEffortPath");

describe("minimumEffortPath()", () => {
  test("minimumEffortPath([[1,2,2],[3,8,2],[5,3,5]]) should be 2", () => {
    expect(
      minimumEffortPath([
        [1, 2, 2],
        [3, 8, 2],
        [5, 3, 5],
      ])
    ).toBe(2);
  });

  test("minimumEffortPath([[1,2,3],[3,8,4],[5,3,5]]) should be 1", () => {
    expect(
      minimumEffortPath([
        [1, 2, 3],
        [3, 8, 4],
        [5, 3, 5],
      ])
    ).toBe(1);
  });

  test("minimumEffortPath([[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]) should be 0", () => {
    expect(
      minimumEffortPath([
        [1, 2, 1, 1, 1],
        [1, 2, 1, 2, 1],
        [1, 2, 1, 2, 1],
        [1, 2, 1, 2, 1],
        [1, 1, 1, 2, 1],
      ])
    ).toBe(0);
  });

  test.skip("minimumEffortPath(heights) should be result", () => {
    expect(minimumEffortPath(heights)).toBe(result);
  });
});
