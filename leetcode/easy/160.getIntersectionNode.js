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

UPDATE 2:
Interesting! So, if the lists were always of the same length, it would be easy
to find the intersection in linear time and constant memory, because you could
use two pointers, one at the head of each list, and test whether they point to
the same node. When they don't, both would be advanced until the intersection or
end of the lists is found.

This can't be done with the problem given, however, because the lists can be of
different lengths, and so the pointers aren't guarenteed to arrive at the
intersection at the same time. This is why I didn't use the described technique,
but with cleverness, this obstacle can be overcome. Because two lists will, if
they intersect, share any nodes after the intersection, while it can't be
certain that they will both have the same number of nodes before any
intersection, it can be certain they will both have the same number of nodes
after it. By finding the length of both lists, the first node of the shorter
list can be compared to a number of nodes of the longer list equal to the
difference in their length. This is certain to balance any difference in the
number of nodes prior to any intersection, and so after that number of nodes
have been compared, both pointers can advance through their lists as originally
described.

The lesson to take from this is to consider whether there exist special cases of
the challenge that would be much easier to solve, and whether all cases can be
solved in a way to arrive at an equivilent form to that special case.
*/

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

/*
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
*/
const listLength = (head) => {
  let result = 0;
  let node = head;
  while (node) {
    node = node.next;
    result++;
  }
  return result;
};

const getIntersectionNode = (headA, headB) => {
  let result = null;
  if (headA && headB) {
    let lenA = listLength(headA);
    let lenB = listLength(headB);
    let nodeA = headA;
    let nodeB = headB;
    while (nodeA) {
      if (nodeA === nodeB) {
        result = nodeA;
        break;
      }
      [nodeA, nodeB, lenA, lenB] =
        lenA === lenB
          ? [nodeA.next, nodeB.next, lenA, lenB]
          : lenA > lenB
          ? [nodeA.next, nodeB, lenA - 1, lenB]
          : [nodeA, nodeB.next, lenA, lenB - 1];
    }
  }
  return result;
};

module.exports = { ListNode, listLength, getIntersectionNode };
