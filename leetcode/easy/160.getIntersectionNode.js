/*
Write a program to find the node at which the intersection of two singly linked
lists begins.

Example 1:
Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2,
skipB = 3
Output: Reference of the node with value = 8
Input Explanation: The intersected node's value is 8 (note that this must not be
0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5].
From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the
intersected node in A; There are 3 nodes before the intersected node in B.

Example 2:
Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3,
skipB = 1
Output: Reference of the node with value = 2
Input Explanation: The intersected node's value is 2 (note that this must not be
0 if the two lists intersect). From the head of A, it reads as [1,9,1,2,4].
From the head of B, it reads as [3,2,4]. There are 3 nodes before the
intersected node in A; There are 1 node before the intersected node in B.

Example 3:
Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: null
Input Explanation: From the head of A, it reads as [2,6,4]. From the head of B,
it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0,
while skipA and skipB can be arbitrary values.
Explanation: The two lists do not intersect, so return null.

Notes:
If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function
returns.
You may assume there are no cycles anywhere in the entire linked structure.
Each value on each linked list is in the range [1, 10^9].
Your code should preferably run in O(n) time and use only O(1) memory.
*/

/*
Lots of parallels between this challenge and my personal favorite challenge,
141, hasCycle. No immediate solution occurs to me unless I misunderstand what is
meant by O(n) time. A soution that requires much more memory than O(1) but
should be the fastest solution would be a Map. Nodes would be added to the Map
one at a time from each list. As soon as a node is found which already exists in
the Map, it would be returned. If none is found, null is returned.

UPDATE:
This solution passes, but isn't as fast of a solution as I expected. I'll study
other solutions to learn new ways of looking at the challenge.
*/

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

const getIntersectionNode = (headA, headB) => {
  const map = new Map();
  let result = null;
  let nodeA = headA;
  let nodeB = headB;
  if (nodeA && nodeB) {
    while (nodeA || nodeB) {
      if (nodeA) {
        if (map.has(nodeA)) {
          result = nodeA;
          break;
        } else {
          map.set(nodeA, true);
          nodeA = nodeA.next;
        }
      }
      if (nodeB) {
        if (map.has(nodeB)) {
          result = nodeB;
          break;
        } else {
          map.set(nodeB, true);
          nodeB = nodeB.next;
        }
      }
    }
  }
  return result;
};

module.exports = { ListNode, getIntersectionNode };
