const { getRow } = require("../119.getRow");

describe("getRow()", () => {
  test("getRow(0) should be [1]", () => {
    expect(getRow(0)).toStrictEqual([1]);
  });

  test("getRow(1) should be [1, 1]", () => {
    expect(getRow(1)).toStrictEqual([1, 1]);
  });

  test("getRow(2) should be [1, 2, 1]", () => {
    expect(getRow(2)).toStrictEqual([1, 2, 1]);
  });

  test("getRow(3) should be [1, 3, 3, 1]", () => {
    expect(getRow(3)).toStrictEqual([1, 3, 3, 1]);
  });

  test("getRow(4) should be [1, 4, 6, 4, 1]", () => {
    expect(getRow(4)).toStrictEqual([1, 4, 6, 4, 1]);
  });

  test.skip("getRow(rowIndex) should be result", () => {
    expect(getRow(rowIndex)).toStrictEqual(result);
  });
});
