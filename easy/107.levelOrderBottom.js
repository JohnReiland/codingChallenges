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

/*
I can see that an elegant solution using a recursive function is possible. I'll
figure that out soon, but first I want a brute force solution. To do that I'll
create an array and push values to it, then reverse its values into a new array
and return that.
*/

let levelOrderBottom = (node) => {};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

module.exports = { levelOrderBottom, TreeNode };
