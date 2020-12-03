/*
Given the root of a binary search tree, rearrange the tree in in-order so that
the leftmost node in the tree is now the root of the tree, and every node has no
left child and only one right child.


Example 1:
Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

Example 2:
Input: root = [5,1,7]
Output: [1,null,5,null,7]


Constraints:

The number of nodes in the given tree will be in the range [1, 100].
0 <= Node.val <= 1000
*/

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

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const increasingBST = (root) => {
  const result = new TreeNode();
  const recurse = (node, current) => {
    if (node.left) {
      current = recurse(node.left, current);
    }
    if (current) {
      current.right = new TreeNode(node.val);
      current = current.right;
    } else {
      current = result;
      current.val = node.val;
    }
    if (node.right) {
      current = recurse(node.right, current);
    }
    return current;
  };
  recurse(root);
  return result;
};

module.exports = {
  TreeNode,
  sortedArrayToBST,
  sortedArrayToAllRightBST,
  increasingBST,
};
