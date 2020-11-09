/*
You are given two non-empty linked lists representing two non-negative integers.
The most significant digit comes first and each of their nodes contain a single
digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the 
umber 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists
is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7
*/

let bigIntToList = (bigInt) => {
  let string = bigInt.toString();
  let result = new ListNode(parseInt(string[0], 10));
  let currentNode = result;
  for (let i = 1; i < string.length; i++) {
    currentNode.next = new ListNode(parseInt(string[i], 10));
    currentNode = currentNode.next;
  }
  return result;
};

let listToBigInt = (list) => {
  let result = "";
  result += list.val;
  let currentNode = list;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
    result += currentNode.val;
  }
  return BigInt(result);
};

let addTwoNumbers = (l1, l2) => {
  return bigIntToList(listToBigInt(l1) + listToBigInt(l2));
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

module.exports = { ListNode, bigIntToList, listToBigInt, addTwoNumbers };
