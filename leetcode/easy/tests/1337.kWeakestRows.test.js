const { kWeakestRows } = require("../1337.kWeakestRows");

describe("kWeakestRows()", () => {
  const mat1 = [
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ];
  test("kWeakestRows(mat1, 3) should be [2,0,3]", () => {
    expect(kWeakestRows(mat1, 3)).toStrictEqual([2, 0, 3]);
  });

  const mat2 = [
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ];
  test("kWeakestRows(mat2, 2) should be [0,2]", () => {
    expect(kWeakestRows(mat2, 2)).toStrictEqual([0, 2]);
  });

  test.skip("kWeakestRows(mat, kTarget) should be result", () => {
    expect(kWeakestRows(mat, kTarget)).toStrictEqual(result);
  });
});
