/*
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
*/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const rightSideView = (root) => {
  const result = [];
  if (root) {
    let stack = [root];
    let next = [];
    let depth = 0;
    while (stack.length) {
      let currentNode = stack.pop();
      if (currentNode.right) {
        next.unshift(currentNode.right);
      }
      if (currentNode.left) {
        next.unshift(currentNode.left);
      }
      result[depth] = result[depth] || currentNode.val;
      if (!stack.length) {
        stack = next;
        next = [];
        depth++;
      }
    }
  }
  return result;
};

module.exports = { TreeNode, rightSideView };
