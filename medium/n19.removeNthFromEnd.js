/*

Given a linked list, remove the n-th node from the end of list and return its head.

Example 1:
Input: 1->2->3->4->5, 2
Output: 1->2->3->5

Example 2:
Input: 1->2->3->4->5, 1
Output: 1->2->3->4

Example 3:
Input: 1->2->3->4->5, 5
Output: 2->3->4->5

Example 4:
Input: 1, 1 
Output: null?

Example :
Input: 1->2->3->4->5, 
Output: 1->2->3->4->5


 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
/*
NAIVE SOLUTION

if there's only one node
  return null

let hold be head
let tail be head

for as many times as the value of n
  tail is tail.next
if tail is null
  return head.next
while tail.next is not null
  tail is tail.next
  hold is hold.next
hold.next is hold.next.next
return head
*/
var removeNthFromEnd = function(head, n) {
  if (head.next === null) {
      return null;
  }

  let hold = head;
  let tail = head;

  for (let i = 0; i < n; i++) {
      tail = tail.next;
  }
  if (tail === null) {
      return head.next;
  }
  while (tail.next !== null) {
      tail = tail.next;
      hold = hold.next;
  }
  hold.next = hold.next.next;
  return head;
};