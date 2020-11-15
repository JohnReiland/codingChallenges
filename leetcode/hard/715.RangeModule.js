/*
A Range Module is a module that tracks ranges of numbers. Your task is to design
and implement the following interfaces in an efficient manner.

addRange(int left, int right) Adds the half-open interval [left, right),
tracking every real number in that interval. Adding an interval that partially
overlaps with currently tracked numbers should add any numbers in the interval
[left, right) that are not already tracked.

queryRange(int left, int right) Returns true if and only if every real number in
the interval [left, right) is currently being tracked.

removeRange(int left, int right) Stops tracking every real number currently
being tracked in the interval [left, right).

Example 1:
addRange(10, 20): null
removeRange(14, 16): null
queryRange(10, 14): true (Every number in [10, 14) is being tracked)
queryRange(13, 15): false (Numbers like 14, 14.03, 14.17 in [13, 15) are not
  being tracked)
queryRange(16, 17): true (The number 16 in [16, 17) is still being tracked,
  despite the remove operation)

Note:
A half open interval [left, right) denotes all real numbers left <= x < right.
0 < left < right < 10^9 in all calls to addRange, queryRange, removeRange.
The total number of calls to addRange in a single test case is at most 1000.
The total number of calls to queryRange in a single test case is at most 5000.
The total number of calls to removeRange in a single test case is at most 1000.
*/

//                 *                *                *

/*
Initial thoughts:
Very interesting. A significant amount of time might need to be spent just
deciding on the best data structure to use.

Some aspects from different data structures that seem well suited:
One feature of a doubly-linked list is that, when you adjust two nodes to point
at each other, all nodes between them are removed for free. They stop becoming
accessible, and are deleted automatically by garbage collection. Imagine having
a numbner of nodes in a doubly-linked list, keeping track of the borders of
added or removed ranges, and then calling an addRange function that covers most
of them. It would be ideal to remove the ranges eclipsed by the new addRange in
constant time.

One problem with using a doubly-linked list, however, is finding out how a new
addRange or removeRange call interacts with the existing set of ranges. If a new
range is value x, and there is no range bordering x, how can the node nearest to
x be quickly found?

Doing research I've discovered a data structure that's new to me, the interval
tree. This is perfect. It's like a binary search tree, but ach node keeps track
of a range. New nodes are able to find their proper place in the tree in log(n)
time, and removing a node removes the entire subtree beneath it in constant
time. Solving the challenge will require a familiarity with interval trees I
don't yet have, but I think I'm ready to start playing with it and learning.

Add: log(n)
Delete: log(n)
Query: log(n)
*/

function Node(lo, hi) {
  this.lo = lo;
  this.hi = hi;
  this.height = 1;
  this.left = null;
  this.right = null;
}

Node.addRange = function (currentNode, lo, hi) {
  if (hi < currentNode.lo) {
    // new range is entirely below range of currentNode, recurse left
    currentNode.left =
      currentNode.left === null
        ? new Node(lo, hi)
        : Node.addRange(currentNode.left, lo, hi);
  } else if (lo > currentNode.hi) {
    // new range is entirely above range of currentNode, recurse right
    currentNode.right =
      currentNode.right === null
        ? new Node(lo, hi)
        : Node.addRange(currentNode.right, lo, hi);
  } else {
    // new range overlaps with range of currentNode**
    if (lo < currentNode.lo) {
      // find node in left subtree that intersects lo, if any
      currentNode.left =
        currentNode.left === null ? null : Node.search(currentNode.left, lo);
      // set currentNode.lo currentNode.left.lo, if appropriate
      currentNode.lo =
        currentNode.left && currentNode.left.hi >= lo
          ? currentNode.left.lo
          : lo;
      // absorb currentNode.left, if appropriate
      currentNode.left =
        currentNode.left && currentNode.left.hi >= lo
          ? currentNode.left.left
          : currentNode.left;
    }
    if (hi > currentNode.hi) {
      // find node in left subtree that intersects hi, if any
      currentNode.right =
        currentNode.right === null ? null : Node.search(currentNode.right, hi);
      // set currentNode.hi currentNode.left.hi, if appropriate
      currentNode.hi =
        currentNode.right && currentNode.right.lo <= hi
          ? currentNode.right.hi
          : hi;
      // absorb currentNode.left, if appropriate
      currentNode.right =
        currentNode.right && currentNode.right.lo <= hi
          ? currentNode.right.right
          : currentNode.right;
    }
  }
  currentNode = Node.balanceTree(currentNode);
  currentNode.height = Node.getHeight(currentNode);
  return currentNode;
};

Node.search = function (currentNode, value) {
  if (value < currentNode.lo) {
    if (currentNode.left === null) {
      return currentNode;
    }
    currentNode.left = Node.search(currentNode.left, value);
    return currentNode.left.hi > value
      ? Node.rotate(currentNode, "RR")
      : currentNode;
  }
  if (value > currentNode.hi) {
    if (currentNode.right === null) {
      return currentNode;
    }
    currentNode.right = Node.search(currentNode.right, value);
    return currentNode.right.lo < value
      ? Node.rotate(currentNode, "LL")
      : currentNode;
  }
  return currentNode;
};

Node.getHeight = function (currentNode) {
  return (
    Math.max(
      currentNode.left ? currentNode.left.height : 0,
      currentNode.right ? currentNode.right.height : 0
    ) + 1
  );
};

Node.getBalance = function (currentNode) {
  return (
    (currentNode.left ? currentNode.left.height : 0) -
    (currentNode.right ? currentNode.right.height : 0)
  );
};

Node.balanceTree = function (currentNode) {
  let balance = Node.getBalance(currentNode);
  if (balance < -1) {
    if (Node.getBalance(currentNode.right) > 0) {
      return Node.rotate(currentNode, "LR");
    } else {
      return Node.rotate(currentNode, "LL");
    }
  }
  if (balance > 1) {
    if (Node.getBalance(currentNode.left < 0)) {
      return Node.rotate(currentNode, "RL");
    } else {
      return Node.rotate(currentNode, "RR");
    }
  }
  return currentNode;
};

Node.rotate = function (currentNode, type) {
  switch (type) {
    case "LL": {
      let rightNode = currentNode.right;
      rightNode.left = currentNode;
      currentNode.right = null;
      currentNode.height = Node.getHeight(currentNode);
      rightNode.height = Node.getHeight(rightNode);
      return rightNode;
    }
    case "LR": {
      let rightNode = currentNode.right;
      let leftNode = rightNode.left;
      rightNode.left = leftNode.right;
      currentNode.right = leftNode.left;
      leftNode.left = currentNode;
      leftNode.right = rightNode;
      currentNode.height = Node.getHeight(currentNode);
      rightNode.height = Node.getHeight(rightNode);
      leftNode.height = Node.getHeight(leftNode);
      return leftNode;
    }
    case "RL": {
      let leftNode = currentNode.left;
      let rightNode = leftNode.right;
      leftNode.right = rightNode.left;
      currentNode.left = rightNode.right;
      rightNode.right = currentNode;
      rightNode.left = leftNode;
      currentNode.height = Node.getHeight(currentNode);
      leftNode.height = Node.getHeight(leftNode);
      rightNode.height = Node.getHeight(rightNode);
      return rightNode;
    }
    case "RR": {
      let leftNode = currentNode.left;
      leftNode.right = currentNode;
      currentNode.left = null;
      currentNode.height = Node.getHeight(currentNode);
      leftNode.height = Node.getHeight(leftNode);
      return leftNode;
    }
    default: {
      return;
    }
  }
};

function RangeModule() {
  this.root = null;
}

RangeModule.prototype.addRange = function (lo, hi) {
  this.root =
    this.root === null ? new Node(lo, hi) : Node.addRange(this.root, lo, hi);
  return null;
};

RangeModule.prototype.queryRange = (lo, hi) => {};

RangeModule.prototype.removeRange = (lo, hi) => {
  return null;
};

module.exports = { Node, RangeModule };
