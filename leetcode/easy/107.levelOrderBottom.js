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

let levelOrderBottom = (node, level = 0, result = []) => {
  if (!node) {
    return result;
  }
  if (!result[level]) {
    result.unshift([]);
  }
  result[result.length - (level + 1)].push(node.val);
  levelOrderBottom(node.left, level + 1, result);
  levelOrderBottom(node.right, level + 1, result);
  return result;
};

/*
const tree0 = undefined;
levelOrderBottom(tree0);
>[]

const tree1 = new TreeNode(3,
  new TreeNode(9),
  new TreeNode(20,
    new TreeNode(15), new TreeNode(7)));
levelOrderBottom(tree1);
>[[15, 7], [9, 20], [3]]

const tree2 = new TreeNode(3,
  new TreeNode(9),
  new TreeNode(20,
    new TreeNode(15), new TreeNode(7,
      new TreeNode(11))));
levelOrderBottom(tree2);
>[[11], [15, 7], [9, 20], [3]]

*/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

module.exports = { levelOrderBottom, TreeNode };
