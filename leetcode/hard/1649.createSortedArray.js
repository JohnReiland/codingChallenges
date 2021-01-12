/*
Given an integer array instructions, you are asked to create a sorted array from
the elements in instructions. You start with an empty container nums. For each
element from left to right in instructions, insert it into nums. The cost of
each insertion is the minimum of the following:

The number of elements currently in nums that are strictly less than
instructions[i].
The number of elements currently in nums that are strictly greater than
instructions[i].
For example, if inserting element 3 into nums = [1,2,3,5], the cost of insertion
is min(2, 1) (elements 1 and 2 are less than 3, element 5 is greater than 3) and
nums will become [1,2,3,3,5].

Return the total cost to insert all elements from instructions into nums. Since
the answer may be large, return it modulo 10^9 + 7

Example 1:
Input: instructions = [1,5,6,2]
Output: 1
Explanation: Begin with nums = [].
Insert 1 with cost min(0, 0) = 0, now nums = [1].
Insert 5 with cost min(1, 0) = 0, now nums = [1,5].
Insert 6 with cost min(2, 0) = 0, now nums = [1,5,6].
Insert 2 with cost min(1, 2) = 1, now nums = [1,2,5,6].
The total cost is 0 + 0 + 0 + 1 = 1.

Example 2:
Input: instructions = [1,2,3,6,5,4]
Output: 3
Explanation: Begin with nums = [].
Insert 1 with cost min(0, 0) = 0, now nums = [1].
Insert 2 with cost min(1, 0) = 0, now nums = [1,2].
Insert 3 with cost min(2, 0) = 0, now nums = [1,2,3].
Insert 6 with cost min(3, 0) = 0, now nums = [1,2,3,6].
Insert 5 with cost min(3, 1) = 1, now nums = [1,2,3,5,6].
Insert 4 with cost min(3, 2) = 2, now nums = [1,2,3,4,5,6].
The total cost is 0 + 0 + 0 + 0 + 1 + 2 = 3.

Example 3:
Input: instructions = [1,3,3,3,2,4,2,1,2]
Output: 4
Explanation: Begin with nums = [].
Insert 1 with cost min(0, 0) = 0, now nums = [1].
Insert 3 with cost min(1, 0) = 0, now nums = [1,3].
Insert 3 with cost min(1, 0) = 0, now nums = [1,3,3].
Insert 3 with cost min(1, 0) = 0, now nums = [1,3,3,3].
Insert 2 with cost min(1, 3) = 1, now nums = [1,2,3,3,3].
Insert 4 with cost min(5, 0) = 0, now nums = [1,2,3,3,3,4].
​​​​​​​Insert 2 with cost min(1, 4) = 1, now nums = [1,2,2,3,3,3,4].
​​​​​​​Insert 1 with cost min(0, 6) = 0, now nums = [1,1,2,2,3,3,3,4].
​​​​​​​Insert 2 with cost min(2, 4) = 2, now nums = [1,1,2,2,2,3,3,3,4].
The total cost is 0 + 0 + 0 + 0 + 1 + 0 + 1 + 0 + 2 = 4.
*/

/*
When the name of the challenge is "Create Sorted Array Through Instructions,"
and the challenge description says to build a sorted array, but the only output
is an integer, the first thing that pops into my head is whether a sorted array
is really the fastest way to do this. I suspect a binary search tree will be
faster. Insertion can be done in log(n), cost can be calculated in log(n), I
think it's the way to go.

So, step one, implement a BST that includes a count property, so duplicate
values just stack on top of each other.
With that done, for each element of instructions:
  insert element into the BST, noting the count of that value after insertion.
  add to total cost:
    the smaller of:
      the summed counts of all values smaller than element (recursive function)
      (the total number of inserted values - count of most recent value) - above
*/

/*
UPDATE:
This one was a heck of a lot harder than it seemed on the outset. The input size
demanded a very efficient solution to pass, but I got there in the end. A binary
search tree was not fast enough. A self-balancing binary search tree wasn't
either. It took a self-balancing binary tree that kept track of its max value
in each branch as well as the total number of leaf nodes descended from each
branch. That, in the end, WAS fast enough. Whew!
*/

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
  this.subCount = 0;
  this.max = val;
  this.count = 1;
  this.height = 1;
}

Node.prototype.insert = (val) => {
  let result = [this, 1];
  if (this.val === val) {
    this.count++;
    result[1] = this.count;
  } else {
    let direction = val < this.val ? "left" : "right";
    if (!this[direction]) {
      this[direction] = new Node(val);
      this.setMax();
      this.subCount++;
    } else {
      [this[direction], result[1]] = this[direction].insert(val);
      this.subCount++;
      this.setMax();
      result[0] = this.balanceTree();
    }
    this.setHeight();
  }
  return result;
};

Node.prototype.setSubCount = () => {
  this.subCount =
    (this.left ? this.left.count + this.left.subCount : 0) +
    (this.right ? this.right.count + this.right.subCount : 0);
};

Node.prototype.setMax = () => {
  this.max = this.right ? this.right.max : this.val;
};

Node.prototype.setHeight = () => {
  this.height =
    Math.max(
      this.left ? this.left.height : 0,
      this.right ? this.right.height : 0
    ) + 1;
};

Node.prototype.tilt = () => {
  return (
    (this.left ? this.left.height : 0) - (this.right ? this.right.height : 0)
  );
};

Node.prototype.balanceTree = () => {
  let result = this;
  let type;
  let balance = this.tilt();
  if (balance < -1) {
    if (this.right.tilt() > 0) {
      type = "LR";
    } else {
      type = "LL";
    }
  } else if (balance > 1) {
    if (this.left.tilt() < 0) {
      type = "RL";
    } else {
      type = "RR";
    }
  }
  if (type) {
    result = this.rotate(type);
  }
  return result;
};

Node.prototype.update = () => {
  this.setMax();
  this.setSubCount();
  this.setHeight();
};

Node.prototype.rotate = (type) => {
  switch (type) {
    case "LL": {
      let rightNode = this.right;
      this.right = rightNode.left;
      rightNode.left = this;
      this.update();
      rightNode.update();
      return rightNode;
    }
    case "LR": {
      let rightNode = this.right;
      let leftNode = rightNode.left;
      rightNode.left = leftNode.right;
      this.right = leftNode.left;
      leftNode.left = this;
      leftNode.right = rightNode;
      this.update();
      rightNode.update();
      leftNode.update();
      return leftNode;
    }
    case "RL": {
      let leftNode = this.left;
      let rightNode = leftNode.right;
      leftNode.right = rightNode.left;
      this.left = rightNode.right;
      rightNode.right = this;
      rightNode.left = leftNode;
      this.update();
      leftNode.update();
      rightNode.update();
      return rightNode;
    }
    case "RR": {
      let leftNode = this.left;
      this.left = leftNode.right;
      leftNode.right = this;
      this.update();
      leftNode.update();
      return leftNode;
    }
    default: {
      return;
    }
  }
};

Node.prototype.smaller = (val) => {
  let result = 0;
  if (this.left) {
    if (val > this.left.max) {
      result += this.left.subCount + this.left.count;
    } else {
      result += this.left.smaller(val);
    }
  }
  if (val > this.val) {
    result += this.count;
    if (this.right) {
      result += this.right.smaller(val);
    }
  }
  return result;
};

function Tree() {
  this.root = null;
}

Tree.prototype.insert = (val) => {
  let result = 1;
  if (this.root === null) {
    this.root = new Node(val);
  } else {
    [this.root, result] = this.root.insert(val);
  }
  return result;
};

Tree.prototype.smaller = (val) => {
  return this.root.smaller(val);
};

const createSortedArray = (instructions) => {
  const BST = new Tree();
  let result = 0;
  for (let i = 0; i < instructions.length; i++) {
    const count = BST.insert(instructions[i]);
    const smaller = BST.smaller(instructions[i]);
    result += Math.min(smaller, i + 1 - count - smaller);
  }
  return result % (Math.pow(10, 9) + 7);
};

module.exports = { Node, Tree, createSortedArray };
