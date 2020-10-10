const { TreeNode, isSymmetric } = require('../101.isSymmetric');

describe('isSymmetric', () => {
  const tree1 = new TreeNode(1,
    new TreeNode(2, 
      new TreeNode(3),
      new TreeNode(4)),
    new TreeNode(2,
      new TreeNode(4),
      new TreeNode(3)));
  

  const tree2 = new TreeNode(2,
    new TreeNode(3,
      new TreeNode(4,
        null, null),
      new TreeNode(5,
        new TreeNode(8),
        new TreeNode(9))),
    new TreeNode(3,
      new TreeNode(5,
        new TreeNode(9),
        new TreeNode(8)),
      new TreeNode(4)));

  test('isSymmetric(tree1) should be true', () => {
    expect(isSymmetric(tree1)).toBe(true);
  })

  test('isSymmetric(tree2) should be true', () => {
    expect(isSymmetric(tree2)).toBe(true);
  })
});