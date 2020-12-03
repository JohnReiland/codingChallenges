const {
  TreeNode,
  sortedArrayToBST,
  increasingBST,
} = require("../897.increasingBST");

describe("increasingBST()", () => {
  const root1 = sortedArrayToBST([
    5,
    3,
    6,
    2,
    4,
    null,
    8,
    1,
    null,
    null,
    null,
    7,
    9,
  ]);
  const result1 = sortedArrayToBST([
    1,
    null,
    2,
    null,
    3,
    null,
    4,
    null,
    5,
    null,
    6,
    null,
    7,
    null,
    8,
    null,
    9,
  ]);
  test("increasingBST(root1) should be result1", () => {
    expect(increasingBST(root1)).toStrictEqual(result1);
  });

  const root2 = sortedArrayToBST([5, 1, 7]);
  const result2 = sortedArrayToBST([1, null, 5, null, 7]);
  test("increasingBST(root2) should be result2", () => {
    expect(increasingBST(root2)).toStrictEqual(result2);
  });

  test.skip("increasingBST(root) should be result", () => {
    expect(increasingBST(root)).toStrictEqual(result);
  });
});
