const {
  isSameTree,
  TreeNode,
  arraysAreAlike,
  treeToArray,
} = require("../100.isSameTree");

describe("arraysAreAlike", () => {
  test("arrasAreAlike([1, 2, 3], [1, 2, 3]) should be true", () => {
    expect(arraysAreAlike([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  test("arrasAreAlike([1, 2, 3], [4, 5, 6]) should be false", () => {
    expect(arraysAreAlike([1, 2, 3], [4, 5, 6])).toBe(false);
  });

  test("arrasAreAlike([1, 2], [1, , 2]) should be false", () => {
    expect(arraysAreAlike([1, 2], [1, , 2])).toBe(false);
  });

  test("arrasAreAlike([], []) should be true", () => {
    expect(arraysAreAlike([], [])).toBe(true);
  });
});

describe("treeToArray", () => {
  const example1A = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  test("treeToArray(example1A) should be [1, 2, 3]", () => {
    expect(treeToArray(example1A)).toEqual([1, 2, 3]);
  });

  const example2A = new TreeNode(1, new TreeNode(2));
  test("treeToArray(example2A) should be [1, 2]", () => {
    expect(treeToArray(example2A)).toEqual([1, 2]);
  });

  const example2B = new TreeNode(1, null, new TreeNode(2));
  test("treeToArray(example2B) should be [1, null, 2]", () => {
    expect(treeToArray(example2B)).toEqual([1, null, 2]);
  });
});

describe("isSameTree", () => {
  const example1A = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  const example1B = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  test("isSameTree(example1A, example1B) should be true", () => {
    expect(isSameTree(example1A, example1B)).toBe(true);
  });

  const example2A = new TreeNode(1, new TreeNode(2));
  const example2B = new TreeNode(1, new TreeNode(null), new TreeNode(2));
  test("isSameTree(example2A, example2B) should be false", () => {
    expect(isSameTree(example2A, example2B)).toBe(false);
  });

  const example3A = new TreeNode(1, new TreeNode(2), new TreeNode(1));
  const example3B = new TreeNode(1, new TreeNode(1), new TreeNode(2));
  test("isSameTree(example3A, example3B) should be false", () => {
    expect(isSameTree(example3A, example3B)).toBe(false);
  });

  const example4A = new TreeNode();
  const example4B = new TreeNode();
  test("isSameTree(example4A, example4B) should be true", () => {
    expect(isSameTree(example4A, example4B)).toBe(true);
  });
});
