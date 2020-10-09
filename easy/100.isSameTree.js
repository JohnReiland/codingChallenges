/*
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:
Input:     1         1
          / \       / \
        2   3     2   3

        [1,2,3],   [1,2,3]
Output: true

Example 2:

Input:     1         1
          /           \
        2             2

        [1,2],     [1,null,2]
Output: false

Example 3:
Input:     1         1
          / \       / \
        2   1     1   2

        [1,2,1],   [1,1,2]
Output: false

It seems to me that the obvious helper funtion takes a TreeNode and returns an
array of its values just as the shorthand appears in the example. These arrays
can then be compared to each other, and if they are deeply alike, then the
binary trees can be said to be the same, as defined by this challenge.

This will necessitate creating a helper function that can deeply compare arrays.

Final form of the function will be something like:

let isSameTree = (tree1, tree2) => {
  return arraysAreAlike(
    treeToArray(tree1),
    treeToArray(tree2)
  );
};
*/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let arraysAreAlike = (array1, array2) => {
  if (!array1 || !array2) {
    return null;
  }
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

let treeToArray = (tree) => {
  let result = [];
  if (!tree) {
    return result;
  }
  result.push(tree.val);
  if (tree.right) {
    if (tree.left) {
      let left = treeToArray(tree.left);
      result.push(...left);
    } else {
      result.push(null);
    }
    let right = treeToArray(tree.right);
    result.push(...right);
  } else if (tree.left) {
    let left = treeToArray(tree.left);
    result.push(...left);
  }
  return result;
};

let isSameTree = (tree1, tree2) => {
  return arraysAreAlike(treeToArray(tree1), treeToArray(tree2));
};

module.exports = { isSameTree, TreeNode, arraysAreAlike, treeToArray };
