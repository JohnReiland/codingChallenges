/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root
node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 2

Example 2:
Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5

Constraints:
The number of nodes in the tree is in the range [0, 10^5].
-1000 <= Node.val <= 1000
*/

/*
I think the most important savings to grab when looking through a BST for its
minimum depth is to stop considering a child branch when its depth is found to
be equal or greater than the depth of its sibling.

Can this savings perhaps be found automatically by using a breadth-first search?
I suspect so.

I always find it difficult to design breadth-first searches recursively, and
iterative designs are generally faster anyway, so I'll use an iterative
approach.

First the root node will be pushed to an array of nodes to use as a queue for
testing whether or not they are leaves. While the array is not empty, nodes are
popped off it and tested to see if they're leaves. If one is, the current depth
is returned. Else, that node's children are pushed to a standby array. When the
main array is empty, if no leaves have been found, the standby array becomes the
main array, and the current depth is incremented.
*/

const minDepth = (root) => {
  let result = 1;
  let main = [root];
  while (true) {
    let standby = [];
    while (main.length) {
      let currentNode = main.pop();
      if (!currentNode.left && !currentNode.right) {
        return result;
      }
      if (currentNode.right) {
        standby.push(currentNode.right);
      }
      if (currentNode.left) {
        standby.push(currentNode.left);
      }
    }
    result++;
    main = standby;
  }
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

module.exports = { minDepth, TreeNode };
