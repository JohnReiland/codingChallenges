const { decrypt } = require("../1115.decrypt");

describe("decrypt()", () => {
  test("decrypt([5,7,1,4], 3) should be [12,10,16,13]", () => {
    expect(decrypt([5, 7, 1, 4], 3)).toStrictEqual([12, 10, 16, 13]);
  });

  test("decrypt([1,2,3,4], 0) should be [0,0,0,0]", () => {
    expect(decrypt([1, 2, 3, 4], 0)).toStrictEqual([0, 0, 0, 0]);
  });

  test("decrypt([2,4,9,3],-2) should be [12,5,6,13]", () => {
    expect(decrypt([2, 4, 9, 3], -2)).toStrictEqual([12, 5, 6, 13]);
  });
});
