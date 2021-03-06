const { TreeNode, rightSideView } = require("../199.rightSideView");

describe("rightSideView()", () => {
  const root = new TreeNode(
    1,
    new TreeNode(2, null, new TreeNode(5)),
    new TreeNode(3, null, new TreeNode(4))
  );
  test("rightSideView(root) should be [1, 3, 4]", () => {
    expect(rightSideView(root)).toStrictEqual([1, 3, 4]);
  });

  const root1 = new TreeNode(
    1,
    new TreeNode(2, null, new TreeNode(5)),
    new TreeNode(3)
  );
  test("rightSideView(root1) should be [1, 3, 5]", () => {
    expect(rightSideView(root1)).toStrictEqual([1, 3, 5]);
  });

  test.skip("rightSideView(root) should be result", () => {
    expect(rightSideView(root)).toStrictEqual(result);
  });
});
