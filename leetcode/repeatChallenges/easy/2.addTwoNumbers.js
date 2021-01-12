/*
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a
single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the
number 0 itself.

Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Constraints:
The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading
zeros.
*/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const addTwoNumbers = (l1, l2) => {
  const hat = new ListNode();
  const end = new ListNode();
  end.next = end;
  let currentNode = hat;
  let carry = 0;
  while (l1 !== end || l2 !== end || carry) {
    carry += l1.val + l2.val;
    currentNode.next = new ListNode(carry % 10);
    currentNode = currentNode.next;
    l1 = l1.next || end;
    l2 = l2.next || end;
    carry = (carry - currentNode.val) / 10;
  }
  return hat.next;
};

module.exports = { ListNode, addTwoNumbers };
