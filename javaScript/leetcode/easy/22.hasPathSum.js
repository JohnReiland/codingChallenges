/*
Given a binary tree and a sum, determine if the tree has a root-to-leaf path
such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

Example:
Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exists a root-to-leaf path 5->4->11->2 which sums to 22.
*/

/*
Because it seems that nodes can have values not only of positive integers, but
zero and negative integers as well, there doesn't seem to be an opportunity to
stop testing a branch merely because the running sum is greater than the target
sum. As such, there's no inherent benefit to a breadth-first or depth-first
search, and a rather significant benefit of lower difficulty for a recurrsive
solution, so I'm going to go with a depth-first recursive approach.
*/

/*
If a node is a leaf node, and its value plus the running total is equal to the
target sum, return true. Else, if this.left, recurse left adding this.val to the
running total. If that returns true, return true. Else, if this.right, recurse
right, adding this.val to the running total. If that returns true, return true.
Else return false. 
*/

const hasPathSum = (root, sum, total = 0) => {
  if (!root) {
    return false;
  }
  let result = !root.left && !root.right && root.val + total === sum;
  if (!result) {
    result =
      hasPathSum(root.left, sum, total + root.val) ||
      hasPathSum(root.right, sum, total + root.val);
  }
  return result;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

module.exports = { hasPathSum, TreeNode };
