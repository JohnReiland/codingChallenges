/*
Given the root of a binary search tree and the lowest and highest boundaries as
low and high, trim the tree so that all its elements lies in [low, high].
Trimming the tree should not change the relative structure of the elements that
will remain in the tree (i.e., any node's descendant should remain a
descendant). It can be proven that there is a unique answer.

Return the root of the trimmed binary search tree. Note that the root may change
depending on the given bounds.

Example 1:
Input: root = [1,0,2], low = 1, high = 2
Output: [1,null,2]

Example 2:
Input: root = [3,0,4,null,2,null,null,1], low = 1, high = 3
Output: [3,2,null,1]

Example 3:
Input: root = [1], low = 1, high = 2
Output: [1]

Example 4:
Input: root = [1,null,2], low = 1, high = 3
Output: [1,null,2]

Example 5:
Input: root = [1,null,2], low = 2, high = 4
Output: [2]

Constraints:
The number of nodes in the tree in the range [1, 10^4].
0 <= Node.val <= 10^4
The value of each node in the tree is unique.
root is guaranteed to be a valid binary search tree.
0 <= low <= high <= 10^4
*/

/*
I can sort of feel a recursive solution begining to form in my mind. Sometimes
it's best for me to just go with my intuition for a bit, so long as I don't lose
too much time that way. If I don't solve the challenge exploring it like this, I
usually gain a better understanding of it and am better prepared to design a
solution.

UPDATE:
I hit on a solution fairly quickly, but it's extremely slow. I'm going to submit
it as it does pass, but will try to find a faster solution. Perhaps switching
from recursive to iterative would be a good start.
*/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const trimBST = (root, low, high) => {
  let currentNode = root;
  if (currentNode.val > high) {
    if (currentNode.left) {
      currentNode = trimBST(currentNode.left, low, high);
    } else {
      currentNode = null;
    }
  } else if (currentNode.val < low) {
    if (currentNode.right) {
      currentNode = trimBST(currentNode.right, low, high);
    } else {
      currentNode = null;
    }
  } else {
    if (currentNode.left) {
      currentNode.left = trimBST(currentNode.left, low, high);
    }
    if (currentNode.right) {
      currentNode.right = trimBST(currentNode.right, low, high);
    }
  }
  return currentNode;
};

module.exports = { TreeNode, trimBST };
