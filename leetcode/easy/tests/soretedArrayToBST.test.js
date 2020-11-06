const { sortedArrayToBST, TreeNode } = require("../108.sortedArrayToBST");

describe("sortedArrayTOBST", () => {
  const tree1 = new TreeNode(
    0,
    new TreeNode(-3, new TreeNode(-10)),
    new TreeNode(9, new TreeNode(5))
  );
  test("sortedArrayToBST([-10, -3, 0, 5, 9]) should be tree1", () => {
    expect(sortedArrayToBST([-10, -3, 0, 5, 9])).toBe(tree1);
  });
});
