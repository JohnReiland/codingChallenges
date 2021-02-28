/*
Given an array where elements are sorted in ascending order, convert it to a
height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in
which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following
height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
*/

/*
I'm not sure if I understand the challenge correctly, as it seems like it should
be trivially easy. Take the middle-most index of the array (or one of the two
middle-most in the event of an array with an even number of elements) and make
that the root of the tree. For each index before it in the array, make its
value the left leaf of the index after it. For each index after, make its
value the right leaf of the index before it. 

Unless I'm misunderstanding the challenge, this should result in a valid
solution.

UPDATE: I did misunderstand the challenge. It needs to be height-balanced, with
no node having a child tree more than one node longer than the other.
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

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

module.exports = { sortedArrayToBST, TreeNode };
