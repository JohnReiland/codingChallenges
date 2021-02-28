/*
Given head, the head of a linked list, determine if the linked list has a cycle
in it.

There is a cycle in a linked list if there is some node in the list that can be
reached again by continuously following the next pointer. Internally, pos is
used to denote the index of the node that tail's next pointer is connected to.
Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the
1st node (0-indexed).

Example 2:
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the
0th node.

Example 3:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.

Constraints:

The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.

Follow up: Can you solve it using O(1) (i.e. constant) memory?
*/

/*
I've encountered this challenge or one very similar to it before, and the
constant memory solution for it might be my favorite solution for any challenge.
Different minds think in different ways, and so an example of lateral thinking
to one person might not be one to another, but, to me, the constant time
solution for this challenge takes brilliant lateral thinking, and it expanded
the way I think both about lists specifically and challenge solving generally.

The linear memory solution is to create a Map to store every node, and if you
encounter the same node twice, you know instantly that the list has a cycle
(just storing the nodes' values in an object literal doesn't work, as lists can
contain duplicate values).

The constant space solution is to use two pointers, moving at different rates.
One moves fast and one moves slow. If the fast poninter reaches the end of the
list, it must not contain a cycle. If, however, the list contains a cycle, then
the slow and fast pointers will eventually be pointing at the same node. If ever
they are, then the list must contain a cycle. It's so simple and yet so clever.
*/

const hasCycle = (head) => {
  if (!head) {
    return false;
  }
  let slow = head;
  let fast = head.next;
  let wait = true;
  while (fast && slow !== fast) {
    fast = fast.next;
    [slow, wait] = wait ? [slow, !wait] : [slow.next, !wait];
  }
  return fast !== null;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

module.exports = { hasCycle, ListNode };
