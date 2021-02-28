/*
Given two binary trees original and cloned and given a reference to a node
target in the original tree, the cloned tree being a copy of the original tree,
return a reference to the same node as the target node but in the cloned tree.

Note that you are not allowed to change any of the two trees or the target node
and the answer must be a reference to a node in the cloned tree.

Follow up: Solve the problem if repeated values on the tree are allowed.

Example 1:
Input: tree = [7,4,3,null,null,6,19], target = 3
Output: 3
Explanation: In all examples the original and cloned trees are shown. The target
node is a green node from the original tree. The answer is the yellow node from
the cloned tree.

Example 2:
Input: tree = [7], target =  7
Output: 7

Example 3:
Input: tree = [8,null,6,null,5,null,4,null,3,null,2,null,1], target = 4
Output: 4

Example 4:
Input: tree = [1,2,3,4,5,6,7,8,9,10], target = 5
Output: 5

Example 5:
Input: tree = [1,2,null,3], target = 2
Output: 2

Constraints:
The number of nodes in the tree is in the range [1, 10^4].
The values of the nodes of the tree are unique.
target node is a node from the original tree and is not null.
*/

/*
I'm eager to create a solution that works with the follow-up challenge (Solve
the problem if repeated values on the tree are allowed), right off the bat.
Such challenges are best solved, I think, not by examining the values of any
nodes or even collections of values from collections of nodes, because it's very
difficult to tell for certain whether you're looking at the right node, or
merely one that is like it in every, or nearly every, way. The better strategy
is to compare by reference; not, "is this node like the node I'm looking for?"
but instead, "is the point in memory this references the same point in memory
that references". The latter is entirely concrete and totally reliable.

The solution, then, is very straightfoward. Create twin pointers, pointing at
the roots of the twin trees. Move them in a synchronized manner through their
respective trees, testing each node in the original to see if it is the target
node. When the target node in the original tree is found, return the twin node
found by the twin pointer.
*/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const getTargetCopy = (original, cloned, target) => {
  let currentNode;
  let currentTwin;
  const stack = [original];
  const stackTwin = [cloned];
  while (stack.length) {
    currentNode = stack.pop();
    currentTwin = stackTwin.pop();
    if (currentNode === target) {
      return currentTwin;
    }
    if (currentNode.right) {
      stack.push(currentNode.right);
      stackTwin.push(currentTwin.right);
    }
    if (currentNode.left) {
      stack.push(currentNode.left);
      stackTwin.push(currentTwin.left);
    }
  }
  return null; // target node is not in original tree; should not be possible
};

module.exports = { getTargetCopy, TreeNode };
