const { minDepth, TreeNode } = require("../111.minDepth");

describe("minDepth()", () => {
  const root1 = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
  );
  test("minDepth(root1) should be 2", () => {
    expect(minDepth(root1)).toBe(2);
  });

  const root2 = new TreeNode(
    2,
    null,
    new TreeNode(
      3,
      null,
      new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6)))
    )
  );
  test("minDepth(root2) should be 5", () => {
    expect(minDepth(root2)).toBe(5);
  });

  test.skip("minDepth(root) should be result", () => {
    expect(minDepth(root)).toBe(result);
  });
});
