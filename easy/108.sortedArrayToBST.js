/*
<<<<<<< HEAD
Given an array where elements are sorted in ascending order, convert it to a
height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in
which the depth of the two subtrees of every node never differ by more than 1.
=======
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
>>>>>>> f8ea714e85b8739f494791f88a62da0628ad89df

Example:

Given the sorted array: [-10,-3,0,5,9],

<<<<<<< HEAD
One possible answer is: [0,-3,9,-10,null,5], which represents the following
height balanced BST:
=======
One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:
>>>>>>> f8ea714e85b8739f494791f88a62da0628ad89df

      0
     / \
   -3   9
   /   /
 -10  5
*/

<<<<<<< HEAD
/*
I'm not sure if I understand the challenge correctly, as it seems like it should
be trivially easy. Take the middle-most index of the array (or one of the two
middle-most in the event of an array with an even number of elements) and make
that the root of the tree. For each index before it in the array, make its
value the left leaf of the index after it. For each index after, make its
value the right leaf of the index before it. 

Unless I'm misunderstanding the challenge, this should result in a valid
solution.
*/

let sortedArrayToBST = (nums) => {
  if (!nums) {
    return;
  }
  let middlemostIndex = Math.floor(nums.length / 2);
  let currentIndex = middlemostIndex - 1;
  let root = new TreeNode(nums[middlemostIndex]);
  let currentNode = root;
  while (nums[currentIndex] !== undefined) {
    currentNode.left = new TreeNode(nums[currentIndex]);
    currentNode = currentNode.left;
    currentIndex--;
  }
  currentIndex = middlemostIndex + 1;
  currentNode = root;
  while (nums[currentIndex] !== undefined) {
    currentNode.right = new TreeNode(nums[currentIndex]);
    currentNode = currentNode.right;
    currentIndex++;
  }
  return root;
};
=======
let sortedArrayToBST = (nums) => {};
>>>>>>> f8ea714e85b8739f494791f88a62da0628ad89df

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

module.exports = { sortedArrayToBST, TreeNode };
