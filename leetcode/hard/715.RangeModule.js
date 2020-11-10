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

/*
Initial thoughts:
Very interesting. A significant amount of time might need to be spent just
deciding on the best data structure to use.

Some aspects from different data structures that seem well suited:
One feature of a doubly-linked list is that, when you adjust two nodes to point
at each other, all nodes between them are removed for free. They stop becoming
accessable, and are deleted automatically by garbage collection. Imagine having
a numbner of nodes in a doubly-linked list, keeping track of the borders of
added or removed ranges, and then calling an addRange function that covers most
of them. It would be ideal to remove the ranges eclipsed by the new addRange in
constant time.

One problem with using a doubly-linked list, however, is finding out how a new
addRange or removeRange call interacts with the existing set of ranges. If a new
range is value x, and there is no range bordering x, how can the node nearest to
x be quickly found? A binary search?

Doing research I've discovered a data structure that's new to me, the interval
tree. This is perfect. Each node keeps track of a range. New nodes are able to
find their proper place in the tree in log(n) time, and removing a node removes
the entire subtree beneath it in constant time. Solving the challenge will
require a familiarity with interval trees I don't yet have, but I think I'm
ready to start playing with it and learning.
*/

function Node(from, to) {
  this.from = from;
  this.to = to;
  this.left = null;
  this.right = null;
}

function RangeModule() {
  this.root = null;
}

RangeModule.prototype.addRange = function (left, right) {
  /*
  if this.root === null
    this.root = new Node(left, right)
  else
    integrate new range into tree, starting at root


  Possible scenarios:
  new range overlaps existing range(s)
    modify existing range(s) to max size of all

  new range doesn't overlap existing range
    insert new range into interval tree
  */
  return null;
};

RangeModule.prototype.queryRange = function (left, right) {
  /*
    let currentNode = this.root
    while currentNode !== null
      search for data to answer query
  */
};

RangeModule.prototype.removeRange = function (left, right) {
  /*
  if this.root !== null
    integrate new range into tree, starting at root

  Possible scenarios:
  new range overlaps existing range(s)
    modify existing range to min size, or delete range, or modify and create new

  new range doesn't overlap existing range
    do nothing
  */
  return null;
};

RangeModule.prototype.balanceTree = function () {
  return null;
};
/*

*/

/** 
Your RangeModule object will be instantiated and called as such:
var obj = new RangeModule()
obj.addRange(left,right)
var param_2 = obj.queryRange(left,right)
obj.removeRange(left,right)
*/

module.exports = { RangeModule };
