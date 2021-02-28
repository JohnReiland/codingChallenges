const { TreeNode, increasingBST } = require("../897.increasingBST");

const sortedArrayToBST = (nums) => {
  if (nums == null || !nums.length) {
    return null;
  }
  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1, nums.length));
  return root;
};

const sortedArrayToAllRightBST = (nums) => {
  const result = nums.length ? new TreeNode(nums[0]) : new TreeNode(0);
  let current = result;
  for (let i = 1; i < nums.length; i++) {
    current.right = new TreeNode(nums[i]);
    current = current.right;
  }
  return result;
};

describe("sortedArrayToBST()", () => {
  const result1 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
  test("sortedArrayToBST([1, 2, 3]) should be [1, 2, 3]", () => {
    expect(sortedArrayToBST([1, 2, 3])).toStrictEqual(result1);
  });
});

describe("sortedArrayToAllRightBST()", () => {
  const result2 = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
  test("sortedArrayToAllRightBST([1, 2, 3]) should be [1, 2, 3]", () => {
    expect(sortedArrayToAllRightBST([1, 2, 3])).toStrictEqual(result2);
  });
});

describe("increasingBST()", () => {
  const root1 = sortedArrayToBST([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const result3 = sortedArrayToAllRightBST([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  test("increasingBST(root1) should be result3", () => {
    expect(increasingBST(root1)).toStrictEqual(result3);
  });

  const root2 = sortedArrayToBST([1, 5, 7]);
  const result4 = sortedArrayToAllRightBST([1, 5, 7]);
  test("increasingBST(root2) should be result4", () => {
    expect(increasingBST(root2)).toStrictEqual(result4);
  });
});
