const { TreeNode, lcaDeepestLeaves } = require("../1123.lcaDeepestLeaves");

describe("lcaDeepestLeaves()", () => {
  const root1 = new TreeNode(
    3,
    new TreeNode(
      5,
      new TreeNode(6),
      new TreeNode(2, new TreeNode(7), new TreeNode(4))
    ),
    new TreeNode(1, new TreeNode(0), new TreeNode(8))
  );
  test("lcaDeepestLeaves(root1) should be root1.left.right", () => {
    expect(lcaDeepestLeaves(root1)).toStrictEqual(root1.left.right);
  });

  const root2 = new TreeNode(1);
  test("lcaDeepestLeaves(root2) should be root2", () => {
    expect(lcaDeepestLeaves(root2)).toStrictEqual(root2);
  });

  const root3 = new TreeNode(
    0,
    new TreeNode(1, null, new TreeNode(2)),
    new TreeNode(3)
  );
  test("lcaDeepestLeaves(root3) should be root3.left.right", () => {
    expect(lcaDeepestLeaves(root3)).toStrictEqual(root3.left.right);
  });

  test.skip("lcaDeepestLeaves(root) should be result", () => {
    expect(lcaDeepestLeaves(root)).toStrictEqual(result);
  });
});
