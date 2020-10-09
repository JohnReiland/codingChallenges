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
After moderate success in testing, shortcomings in the design of my
treeToArray function are becoming apparent. Extensive testing is also
difficult, as binary trees must be crafted by hand. I'm going to redesign
my treeToArray function, but first, I'm going to build an arrayToTree
function to let me quickly create trees for testing.
*/

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

let treeToArrayRec = (tree) => {
  let result = [];
  if (!tree) {
    return result;
  }
  result.push(tree.val);

  let merge = [];
  let left;
  let right;
  if (tree.left) {
    left = treeToArrayRec(tree.left);
  } else {
    left = [null];
  }
  if (tree.right) {
    right = treeToArrayRec(tree.right);
  } else {
    right = [null];
  }
  if (left[0] === null && right[0] === null) {
    return result;
  }
  merge.push(left[0], right[0]);
  if (left[1]) {
    merge.push(...left[1]);
  }
  if (right[1]) {
    merge.push(...right[1]);
  }
  result.push(merge);

  return result;
}

let treeToArray = (tree) => {
  let result = [];
  let recursive = treeToArrayRec(tree);
  result.push(recursive[0], ...recursive[1]);
  return result;
}

let arrayIsSymmetric = (array) => {
  if (array.length % 2 !== 0) {
    return false;
  }
  let half = array.length / 2;
  for (let i = 0; i < half; i++) {
    if (array[i] != array[array.length - (1 + i)]) {
      return false;
    }
  }
  return true;
}

let isSymmetric = (tree) => {
  if (!tree) {
    return true;
  }
  if (tree.left === null && tree.right === null) {
    return true;
  }
  let array = treeToArray(tree);
  if (array.length < 2) {
    return true;
  }
  let width = 2;
  for (let i = 1; i < array.length;) {
    let block = [];
    while (block.length < width) {
      block.push(array[i] === undefined ? null : array[i]);
      i++;
    }
    if (!arrayIsSymmetric(block)) {
      return false;
    }
    width *= 2;
  }
  return true;
};

module.exports = { TreeNode, treeToArray, arrayIsSymmetric, isSymmetric };