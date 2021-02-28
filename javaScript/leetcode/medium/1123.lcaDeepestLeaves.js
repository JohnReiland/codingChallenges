/*
Given the root of a binary tree, return the lowest common ancestor of its
deepest leaves.

Recall that:

The node of a binary tree is a leaf if and only if it has no children
The depth of the root of the tree is 0. if the depth of a node is d, the depth
of each of its children is d + 1.
The lowest common ancestor of a set S of nodes, is the node A with the largest
depth such that every node in S is in the subtree with root A.

Example 1:
Input: root = [3,5,1,6,2,0,8,null,null,7,4]
Output: [2,7,4]
Explanation: We return the node with value 2, colored in yellow in the diagram.
The nodes coloured in blue are the deepest leaf-nodes of the tree.
Note that nodes 6, 0, and 8 are also leaf nodes, but the depth of them is 2, but
the depth of nodes 7 and 4 is 3.

Example 2:
Input: root = [1]
Output: [1]
Explanation: The root is the deepest node in the tree, and it's the lca of
itself.

Example 3:
Input: root = [0,1,3,null,2]
Output: [2]
Explanation: The deepest leaf node in the tree is 2, the lca of one node is
itself.

Constraints:
The number of nodes in the tree will be in the range [1, 1000].
0 <= Node.val <= 1000
The values of the nodes in the tree are unique.
*/

/*
This is one of those rare great problems where a little extra time spent
thinking about a strategy for the solution can result in a lot less time and
work spent building it. The way I see it, every node has a depth in the tree,
and a node may be the deepest leaf or one of the deepest leaves, may be an
ancestor to one or more deepest leaves, or may not be any of those things.

Of the nodes that are one of those things, there will be one or more nodes that
are the only node of that depth to be one of those things. The deepest such node
is the lca.

I think a good strategy will be to identify the depth of the deepest leaves in
one pass, then identify all nodes that are the deepest leaves, or are ancestor
to one or more deepest leaf, and push them into a matrix indexed by their depth.
Testing from highest index to lowest, the first array found of length 1
contains the lca as its only element. If these steps can be combined it would
improve performance significantly, but I don't yet see how that can be
accomplished.
*/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const maxDepth = (root) => {
  let result = 0;
  let stack = [[root, 0]];
  while (stack.length) {
    let currentNode = stack.pop();
    result = Math.max(currentNode[1], result);
    if (currentNode[0].right) {
      stack.push([currentNode[0].right, currentNode[1] + 1]);
    }
    if (currentNode[0].left) {
      stack.push([currentNode[0].left, currentNode[1] + 1]);
    }
  }
  return result;
};

const lcaDeepestLeaves = (root) => {
  const max = maxDepth(root);
  const ancestors = [...Array(max + 1)].map(() => []);
  const recurse = (node, depth) => {
    let isAncestor = false;
    if (depth === max) {
      isAncestor = true;
    }
    if (node.left && recurse(node.left, depth + 1)) {
      isAncestor = true;
    }
    if (node.right && recurse(node.right, depth + 1)) {
      isAncestor = true;
    }
    if (isAncestor) {
      ancestors[depth].push(node);
    }
    return isAncestor;
  };
  recurse(root, 0, max);
  for (let i = ancestors.length - 1; i >= 0; i--) {
    if (ancestors[i].length === 1) {
      return ancestors[i][0];
    }
  }
};

module.exports = { TreeNode, maxDepth, lcaDeepestLeaves };
