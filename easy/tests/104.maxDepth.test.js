const { maxDepth, TreeNode } = require('../104.maxDepth');

describe('maxDepth', () => {
  const tree0 = undefined;
  test('maxDepth(tree0) should be 0', () => {
    expect(maxDepth(tree0)).toBe(0);
  })
  const tree1 = new TreeNode (3);
  test('maxDepth(tree1) should be 1', () => {
    expect(maxDepth(tree1)).toBe(1);
  })
  const tree2 = new TreeNode (3, 
    new TreeNode(9), new TreeNode(20));
  test('maxDepth(tree2) should be 2', () => {
    expect(maxDepth(tree2)).toBe(2);
  })
  const tree3 = new TreeNode (3, 
    new TreeNode(9), new TreeNode(20,
      new TreeNode(15), new TreeNode(7)));
  test('maxDepth(tree3) should be 3', () => {
    expect(maxDepth(tree3)).toBe(3);
  })
})