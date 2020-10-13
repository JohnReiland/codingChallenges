/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root
node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
  / \
  9  20
    /  \
  15   7

return its depth = 3.
*/

/*
This should be straightforward to accomplish with a recursive function.
The max depth for a node is equal to the greater of the max depths of each of
its children, plus one.
*/

let maxDepth = (node, depth = 0) => {
  if (!node) {
    return 0;
  }
  if (!node.left && !node.right) {
    return 1;
  }
  let left = node.left ? maxDepth(node.left) : 0;
  let right = node.right ? maxDepth(node.right) : 0;
  return left > right ? left + 1 : right + 1;
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

module.exports = { maxDepth, TreeNode };