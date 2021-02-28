/*
Given n balloons, indexed from 0 to n-1. Each balloon is painted with a number
on it represented by array nums. You are asked to burst all of the balloons.
If you burst balloon i you will get nums[left] * nums[i] * nums[right] coins.
Here left and right are adjacent indices of i. After the burst, the left and
right then becomes adjacent.

Find the maximum coins you can collect by bursting the balloons wisely.

Example:
Input: [3,1,5,8]
Output: 167 
Explanation:
nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167

Note:
You may imagine nums[-1] = nums[n] = 1. They are not real therefore you can not
burst them.
0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100
*/

const updateNode = (node) => {
  node.gross =
    node.val *
    (node.left ? node.left.val : 1) *
    (node.right ? node.right.val : 1);
  node.costLeft =
    (node.val > 0 ? node.val - 1 : 1) *
    (node.left ? node.left.val : 1) *
    (node.left && node.left.left ? node.left.left.val : 1);
  node.costRight =
    (node.val > 0 ? node.val - 1 : 1) *
    (node.right ? node.right.val : 1) *
    (node.right && node.right.right ? node.right.right.val : 1);
  node.net = node.gross - (node.costLeft + node.costRight);
  return;
};

const doublyLinkedList = (nums) => {
  function Node(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }

  let head = new Node(nums[0]);
  let currentNode = head;
  let result = [head];
  for (let i = 1; i < nums.length; i++) {
    currentNode.right = new Node(nums[i], currentNode);
    currentNode = currentNode.right;
    result.push(currentNode);
  }
  for (let i = 0; i < result.length; i++) {
    updateNode(result[i]);
  }

  return result;
};

const maxCoins = (nums) => {
  const list = doublyLinkedList(nums);
  const value = [];
  for (let i = 1; i < list.length - 1; i++) {
    value.push(list[i]);
  }

  value.sort((a, b) => a.net + b.net);

  let result = 0;
  while (value.length) {
    let currentNode = value.pop();
    result += currentNode.gross;
    currentNode.left.right = currentNode.right;
    currentNode.right.left = currentNode.left;
    updateNode(currentNode.left);
    updateNode(currentNode.right);
    value.sort((a, b) => a.net - b.net);
  }

  result += list[0].val * list[list.length - 1].val;
  result += Math.max(list[0].val, list[list.length - 1].val);
  return result;
};

module.exports = { maxCoins };
