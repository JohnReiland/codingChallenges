/*
Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:

Input: 1->1->2
Output: 1->2
Example 2:

Input: 1->1->2->3->3
Output: 1->2->3
*/

/*
This should be dead simple. Have a left and right hand. The right hand takes the
first node and passes it to the left. Then it takes the next node. Whenever the
node it takes has the same value as the one in the left hand, it take the next
node without passing to the left hand. When a node wife a different value is
found the left hand's next is made the node in the right hand. 

When the end of the list is reached, output the head.
*/

/*
UPDATE:
One detail I didn't see in the initial design was the necessity for the next
value of the last node to be explicitly made null. This is only necessary when
the last unique value in the list has duplicates, but is absolutely necessary.
*/

let deleteDuplicates = (head) => {
  if (!head) {
    return head;
  }
  let left = head;
  while (left.next !== null) {
    let right = left.next;
    while (right && right.val === left.val) {
      right = right.next;
    }
    if (right) {
      left.next = right;
      left = left.next;
    } else {
      left.next = null;
    }
  }
  return head;
};

let ListNode = (val, next) => {
  this.val = val === undefined ? 0 : val;
  is.next = next === undefined ? null : next;
};

/*
deleteDuplicates([1,1,2]);
>[1,2]

deleteDuplicates([1,1,2,3,3]);
>[1,2,3]
*/

module.exports = { deleteDuplicates, ListNode };
