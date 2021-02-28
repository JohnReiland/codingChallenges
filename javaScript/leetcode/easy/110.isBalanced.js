/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in
height by no more than 1.


Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:
Input: root = []
Output: true

Constraints:
The number of nodes in the tree is in the range [0, 5000].
-10^4 <= Node.val <= 10^4
*/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const isBalanced = (root) => {
  const recurse = (root) => {
    let result = true;
    let left = 0;
    let right = 0;
    let max = 0;
    if (root) {
      if (root.left) {
        [result, left] = recurse(root.left);
      }
      if (result && root.right) {
        [result, right] = recurse(root.right);
      }
      if (result) {
        max = Math.max(left, right);
        result = Math.abs(left - right) < 2 ? result : false;
      }
    }
    return [result, max + 1];
  };
  return recurse(root)[0];
};

module.exports = { TreeNode, isBalanced };
