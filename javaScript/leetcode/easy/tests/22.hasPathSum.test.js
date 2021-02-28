const { hasPathSum, TreeNode } = require("../22.hasPathSum");

describe("hasPathSum()", () => {
  const root1 = new TreeNode(
    5,
    new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
    new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
  );
  test("hasPathSum(root1, 22) should be true", () => {
    expect(hasPathSum(root1, 22)).toBe(true);
  });

  const root2 = new TreeNode(1, new TreeNode(2));

  test("hasPathSum(root2, 1) should be false", () => {
    expect(hasPathSum(root2, 1)).toBe(false);
  });

  test.skip("hasPathSum(root, sum1) should be result", () => {
    expect(hasPathSum(root, sum1)).toBe(result);
  });
});
