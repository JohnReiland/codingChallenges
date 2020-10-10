/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3

This will end up being very similar to 100, isSameTree. Like that challenge,
this will use a function which converts a tree to an array. Unlike that
challenge, two arrays won't need to be compared to each other. Instead, the
array will be tested to see if it conforms to the shape of a symmetrical binary
tree, with values beyond the first grouped into blocks of doubling size (first
two values, then four, then eight, etc.), and the symmetry of these blocks
tested. If any block is found no to be symmetrical, then the tree is not
symmetrical. If all blocks are symmetrical, then the tree is as well.

Helpers will be a function to convert a binary tree to an array, and a function
to test whether such an array conforms to the shapy of a symmetrical tree.

Final function will look something like:

let isSymmetric = (tree) => {
  return arrayIsSymmetric(treeToArray(tree));
}

UPDATE:
I'm having much too much difficulty with this. It can't be as complicated as I'm
making it. I'm going to start over from stratch.

None of this work converting trees to arrays and back is necessary for this.
It's useful to be able to do it, but not needed for this challenege. All that's
needed is a way to navigate the tree in an ordered way, and two pointers
navigating the tree in a mirrored fashion. If ever the vals of their nodes don't
match, the tree isn't symetrical.

The sticking point for me was the root having no mirror node (or being its own
mirror node), which prevented me from wrapping my head around a solution. As
soon as I seperated the recursive part of the challenge from the root it was no
problem.

*/

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

let isSymmetricRec = (left, right = left) => {
  if (left === null && right === null) {
    return true;
  }
  if (left === null || right === null) {
    return false;
  }
  if (left.val !== right.val) {
    return false;
  }
  return isSymmetricRec(left.left, right.right) &&
  isSymmetricRec(left.right, right.left);
}

let isSymmetric = (tree) => {
  if (!tree) {
    return true;
  }
  if (!tree.left && !tree.right) {
    return true;
  }
  if (!tree.left || !tree.right) {
    return false;
  }
  return isSymmetricRec(tree.left, tree.right);
}

/*

  const tree1 = new TreeNode(1,
    new TreeNode(2, 
      new TreeNode(3),
      new TreeNode(4)),
    new TreeNode(2,
      new TreeNode(4),
      new TreeNode(3)));
// [1,2,2,3,4,4,3]

isSymmetric(tree1);
>true


  const tree2 = new TreeNode(1,
    new TreeNode(2, 
      null,
      new TreeNode(3)),
    new TreeNode(2,
      null,
      new TreeNode(3)));
// [1,2,2,null,3,null,3]

isSymmetric(tree2);
>false


  const tree3 = new TreeNode(2,
    new TreeNode(3,
      new TreeNode(4,
        null,
        null),
      new TreeNode(5,
        new TreeNode(8),
        new TreeNode(9))),
    new TreeNode(3,
      new TreeNode(5,
        new TreeNode(9),
        new TreeNode(8)),
      new TreeNode(4)));
// [2,3,3,4,5,5,4,null,null,8,9,9,8]

isSymmetric(tree3);
>true
*/

module.exports = { TreeNode, isSymmetric };