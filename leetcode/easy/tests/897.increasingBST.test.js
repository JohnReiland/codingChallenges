const {
  TreeNode,
  sortedArrayToBST,
  sortedArrayToAllRightBST,
  increasingBST,
} = require("../897.increasingBST");

describe("sortedArrayToAllRightBST()", () => {
  const result1 = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
  test("sortedArrayToAllRightBST([1, 2, 3]) should be [1, 2, 3]", () => {
    expect(sortedArrayToAllRightBST([1, 2, 3])).toStrictEqual(result1);
  });

  test.skip("sortedArrayToAllRightBST(array1) should be result", () => {
    expect(sortedArrayToAllRightBST(array1)).toStrictEqual(result);
  });
});

describe("increasingBST()", () => {
  const root0 = sortedArrayToBST([1, 5, 7]);
  test("root0 should equal root0", () => {
    expect(root0).toStrictEqual(root0);
  });

  const root1 = sortedArrayToBST([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const result1 = sortedArrayToAllRightBST([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  test("increasingBST(root1) should be result1", () => {
    expect(increasingBST(root1)).toStrictEqual(result1);
  });

  const root2 = sortedArrayToBST([1, 5, 7]);
  const result2 = sortedArrayToAllRightBST([1, 5, 7]);
  test("increasingBST(root2) should be result2", () => {
    expect(increasingBST(root2)).toStrictEqual(result2);
  });

  test.skip("increasingBST(root) should be result", () => {
    expect(increasingBST(root)).toStrictEqual(result);
  });
});
