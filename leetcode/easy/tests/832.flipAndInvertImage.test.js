const { flipAndInvertImage } = require("../832.flipAndInvertImage");

describe("flipAndInvertImage()", () => {
  test("flipAndInvertImage([[1]]) should be [[0]]", () => {
    expect(flipAndInvertImage([[1]])).toStrictEqual([[0]]);
  });

  test("flipAndInvertImage([[0, 1], [1, 1]]) should be [[0, 1], [0, 0]]", () => {
    expect(
      flipAndInvertImage([
        [0, 1],
        [1, 1],
      ])
    ).toStrictEqual([
      [0, 1],
      [0, 0],
    ]);
  });

  test("flipAndInvertImage([[0, 0, 0], [0, 0, 1], [0, 1, 1]]) should be [[1, 1, 1], [0, 1, 1], [0, 0, 1]]", () => {
    expect(
      flipAndInvertImage([
        [0, 0, 0],
        [0, 0, 1],
        [0, 1, 1],
      ])
    ).toStrictEqual([
      [1, 1, 1],
      [0, 1, 1],
      [0, 0, 1],
    ]);
  });
});
