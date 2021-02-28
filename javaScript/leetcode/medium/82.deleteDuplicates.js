/*
Given the head of a sorted linked list, delete all nodes that have duplicate
numbers, leaving only distinct numbers from the original list. Return the linked
list sorted as well.

Example 1:
Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]

Example 2:
Input: head = [1,1,1,2,3]
Output: [2,3]

Constraints:
The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
*/
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const deleteDuplicates = (head) => {
  if (!head) {
    return null;
  }
  let hat = new ListNode(null, head);
  let currentNode = hat;
  while (currentNode.next !== null && currentNode.next.next !== null) {
    if (currentNode.next.val === currentNode.next.next.val) {
      while (
        currentNode.next.next &&
        currentNode.next.next.val === currentNode.next.val
      ) {
        currentNode.next.next = currentNode.next.next.next;
      }
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }
  return hat.next;
};

module.exports = { deleteDuplicates, ListNode };
