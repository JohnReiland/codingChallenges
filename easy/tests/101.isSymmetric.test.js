const { TreeNode, treeToArray, arrayIsSymmetric, isSymmetric } = require('../101.isSymmetric');

describe('arrayIsSymmetric', () => {
  test('arrayIsSummetric([1,2,2,1]) should be true', () => {
    expect(arrayIsSymmetric([1,2,2,1])).toBe(true);
  })

  test('arrayIsSummetric([1,2,2,2]) should be false', () => {
    expect(arrayIsSymmetric([1,2,2,2])).toBe(false);
  })
})

describe('treeToArray', () => {
  const tree1 = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)));
  test('treeToArray(tree1) should be [1, 2, 2, 3, 4, 4, 3]', () => {
    expect(treeToArray(tree1)).toStrictEqual([1, 2, 2, 3, 4, 4, 3]);
  })

  const tree2 = new TreeNode(1, new TreeNode(2, null, new TreeNode(3)), new TreeNode(2, null, new TreeNode(3)));
  test('treeToArray(tree2) should be [1, 2, 2, null, 3, null, 3]', () => {
    expect(treeToArray(tree2)).toStrictEqual([1, 2, 2, null, 3, null, 3]);
  })
});

describe('isSymmetric', () => {
  const tree1 = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)));
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