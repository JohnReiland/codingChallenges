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

UPDATE:
This refactor removes a lot of logic which, on reflection, isn't needed. It can
be reduced even more than this, but I feel further reduction hurts clarity.
*/

let maxDepth = (node) => {
  if (!node) {
    return 0;
  }
  let left = maxDepth(node.left);
  let right = maxDepth(node.right);
  return 1 + (left > right ? left : right);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/*
const tree0 = undefined;
maxDepth(tree0);
>0;

const tree1 = new TreeNode (3);
maxDepth(tree1)'
>1

const tree2 = new TreeNode (3, 
  new TreeNode(9),
  new TreeNode(20));
maxDepth(tree2)'
>2

const tree3 = new TreeNode (3, 
  new TreeNode(9),
  new TreeNode(20,
    new TreeNode(15),
    new TreeNode(7)));

maxDepth(tree3)'
>3
*/

module.exports = { maxDepth, TreeNode };
