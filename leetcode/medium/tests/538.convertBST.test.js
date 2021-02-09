const { TreeNode, convertBST } = require("../538.convertBST");

describe("convertBST()", () => {
  const root1 = new TreeNode(
    4,
    new TreeNode(1, new TreeNode(0), new TreeNode(2, null, new TreeNode(3))),
    new TreeNode(6, new TreeNode(5), new TreeNode(7, null, new TreeNode(8)))
  );
  const result1 = new TreeNode(
    30,
    new TreeNode(
      36,
      new TreeNode(36),
      new TreeNode(35, null, new TreeNode(33))
    ),
    new TreeNode(21, new TreeNode(26), new TreeNode(15, null, new TreeNode(8)))
  );
  test("convertBST(root1) should be result1", () => {
    expect(convertBST(root1)).toStrictEqual(result1);
  });

  const root2 = new TreeNode(0, null, new TreeNode(1));
  const result2 = new TreeNode(1, null, new TreeNode(1));
  test("convertBST(root2) should be result2", () => {
    expect(convertBST(root2)).toStrictEqual(result2);
  });

  const root3 = new TreeNode(1, new TreeNode(0), new TreeNode(2));
  const result3 = new TreeNode(3, new TreeNode(3), new TreeNode(2));
  test("convertBST(root3) should be result3", () => {
    expect(convertBST(root3)).toStrictEqual(result3);
  });

  const root4 = new TreeNode(
    3,
    new TreeNode(2, new TreeNode(1)),
    new TreeNode(4)
  );
  const result4 = new TreeNode(
    7,
    new TreeNode(9, new TreeNode(10)),
    new TreeNode(4)
  );
  test("convertBST(root4) should be result4", () => {
    expect(convertBST(root4)).toStrictEqual(result4);
  });

  test.skip("convertBST(root) should be result", () => {
    expect(convertBST(root)).toStrictEqual(result);
  });
});
