const { levelOrderBottom, TreeNode } = require("../107.levelOrderBottom");

describe("levelOrderBottom", () => {
  const tree0 = undefined;
  test("levelOrderBottom(tree0) should be []", () => {
    expect(levelOrderBottom(tree0)).toStrictEqual([]);
  });

  const tree1 = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
  );
  test("levelOrderBottom(tree1) should be [[15, 7], [9, 20], [3]]", () => {
    expect(levelOrderBottom(tree1)).toStrictEqual([[15, 7], [9, 20], [3]]);
  });

  const tree2 = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7, new TreeNode(11)))
  );
  test("levelOrderBottom(tree2) should be [[11], [15, 7], [9, 20], [3]]", () => {
    expect(levelOrderBottom(tree2)).toStrictEqual([
      [11],
      [15, 7],
      [9, 20],
      [3],
    ]);
  });

  const tree3 = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4)),
    new TreeNode(3, new TreeNode(5))
  );
  test("levelOrderBottom(tree3) should be [[4,5],[2,3],[1]]", () => {
    expect(levelOrderBottom(tree3)).toStrictEqual([[4, 5], [2, 3], [1]]);
  });
});
