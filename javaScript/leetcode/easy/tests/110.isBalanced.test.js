const { TreeNode, isBalanced } = require("../110.isBalanced");

describe("isBalanced()", () => {
  const root1 = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
  );
  test("isBalanced(root1) should be true", () => {
    expect(isBalanced(root1)).toBe(true);
  });

  const root2 = new TreeNode(
    1,
    new TreeNode(
      2,
      new TreeNode(3, new TreeNode(4), new TreeNode(4)),
      new TreeNode(3)
    ),
    new TreeNode(2)
  );
  test("isBalanced(root2) should be false", () => {
    expect(isBalanced(root2)).toBe(false);
  });

  const root3 = new TreeNode();
  test("isBalanced(root3) should be true", () => {
    expect(isBalanced(root3)).toBe(true);
  });

  test.skip("isBalanced(root) should be result", () => {
    expect(isBalanced(root)).toBe(result);
  });
});
