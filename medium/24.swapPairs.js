/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/*

Given a linked list, swap every two adjacent nodes and return its head.

You may *not* modify the values in the list's nodes, only nodes itself may be changed.

Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.

 * @param {ListNode} head
 * @return {ListNode}
 */

/*
Naive solution

if head.next is null
  return head

let currentPair be head
let result be head.next
let hold

while currentPair is not null AND currentPair.next is not null
  hold is currentPair.next.next
  currentPair.next.next is currentPair
  currentPair.next is hold
  currentPair is hold
return result
*/

var swapPairs = function(head) {

if (head === null || head.next === null) {
  return head;
}

let currentPair = head;
let result = currentPair.next;
let holdHead;
let holdTail;

while (currentPair !== null && currentPair.next !== null) {
    if (holdHead !== undefined) {
        holdHead.next = currentPair.next;
    }
    holdTail = currentPair.next.next;
    currentPair.next.next = currentPair;
    currentPair.next = holdTail;
    holdHead = currentPair;
    currentPair = holdTail;
}
return result;
};