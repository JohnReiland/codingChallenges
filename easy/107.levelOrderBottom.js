/*
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
  / \
  9  20
    /  \
  15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]
*/

let levelOrderBottom = (node, level = 0, result = [[]]) => {
  if (!node) {
    return [];
  }
  result[result.length - (level + 1)].push(node.val);
  if (!result[level + 1]) {
    result.unshift([]);
  }
  levelOrderBottom(node.left, level + 1, result);
  levelOrderBottom(node.right, level + 1, result);
  if (result[0].length === 0) {
    result.shift();
  }
  return result;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

module.exports = { levelOrderBottom, TreeNode };
