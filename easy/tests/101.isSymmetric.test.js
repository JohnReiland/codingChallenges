const { TreeNode, isSymmetric } = require('../101.isSymmetric');

describe('isSymmetric', () => {
  const tree1 = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)));

  test('isSymmetric(tree1A) should be true', () => {
    expect(isSymmetric(tree1)).toBe(true);
  })
})