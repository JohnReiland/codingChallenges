const { TreeNode, trimBST } = require("../669.trimBST");

describe("trimBST()", () => {
  const root1 = new TreeNode(1, new TreeNode(0), new TreeNode(2));
  const result1 = new TreeNode(1, null, new TreeNode(2));
  test("trimBST(root1, 1, 2) should be result1", () => {
    expect(trimBST(root1, 1, 2)).toStrictEqual(result1);
  });

  const root2 = new TreeNode(
    3,
    new TreeNode(0, null, new TreeNode(2, new TreeNode(1))),
    new TreeNode(4)
  );
  const result2 = new TreeNode(3, new TreeNode(2, new TreeNode(1)));
  test("trimBST(root2, 1, 3) should be result2", () => {
    expect(trimBST(root2, 1, 3)).toStrictEqual(result2);
  });

  const root3 = new TreeNode(1);
  const result3 = new TreeNode(1);
  test("trimBST(root3, 1, 2) should be result3", () => {
    expect(trimBST(root3, 1, 2)).toStrictEqual(result3);
  });

  const root4 = new TreeNode(1, null, new TreeNode(2));
  const result4 = new TreeNode(1, null, new TreeNode(2));
  test("trimBST(root4, 1, 3) should be result4", () => {
    expect(trimBST(root4, 1, 3)).toStrictEqual(result4);
  });

  const root5 = new TreeNode(1, null, new TreeNode(2));
  const result5 = new TreeNode(2);
  test("trimBST(root5, 2, 4) should be result5", () => {
    expect(trimBST(root5, 2, 4)).toStrictEqual(result5);
  });

  test.skip("trimBST(root, low, high) should be result", () => {
    expect(trimBST(root, low, high)).toStrictEqual(result);
  });
});
