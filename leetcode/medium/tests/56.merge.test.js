const { merge } = require("../56.merge");

describe("merge()", () => {
  test("merge([[1,3],[2,6],[8,10],[15,18]]) should be [[1,6],[8,10],[15,18]]", () => {
    expect(
      merge([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ])
    ).toStrictEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });

  test("merge([[8,10],[1,3],[2,6],[15,18]]) should be [[1,6],[8,10],[15,18]]", () => {
    expect(
      merge([
        [8, 10],
        [1, 3],
        [2, 6],
        [15, 18],
      ])
    ).toStrictEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });

  test("merge([[1,4],[4,5]]) should be [[1,5]]", () => {
    expect(
      merge([
        [1, 4],
        [4, 5],
      ])
    ).toStrictEqual([[1, 5]]);
  });

  test("merge([[]]) should be [[]]", () => {
    expect(merge([[]])).toStrictEqual([[]]);
  });

  test("merge([[0,0],[0,0]]) should be [[0,0]]", () => {
    expect(
      merge([
        [0, 0],
        [0, 0],
      ])
    ).toStrictEqual([[0, 0]]);
  });

  test("merge([[0,0]]) should be [[0,0]]", () => {
    expect(merge([[0, 0]])).toStrictEqual([[0, 0]]);
  });

  test("merge([[1,4],[2,3]]) should be [[1,4]]", () => {
    expect(
      merge([
        [1, 4],
        [2, 3],
      ])
    ).toStrictEqual([[1, 4]]);
  });
});
