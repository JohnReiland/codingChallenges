/*
  You are given two non-empty linked lists representing two non-negative integers.
  The digits are stored in reverse order and each of their nodes contain a single digit.
  Add the two numbers and return it as a linked list.
  You may assume the two numbers do not contain any leading zero, except the number 0 itself.

  Example:

  Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
  Output: 7 -> 0 -> 8
  Explanation: 342 + 465 = 807.

  Definition for singly-linked list.
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }

  l1 = {
    val : 2,
    next : {
      val : 4,
      next : {
        val : 3,
        next : null
      }
    }
  }

  l2 = {
    val : 5,
    next : {
      val : 6,
      next : {
        val : 4,
        next : null
      }
    }
  }

 */
/*
  @param {ListNode} l1
  @param {ListNode} l2
  @return {ListNode}
 */

var addTwoNumbers = (l1, l2) => {
  const convertListToInt = (list) => {
    let currentNode = list;
    let value = currentNode.val.toString();
    while (currentNode.next !== null) {
      value = currentNode.next.val.toString() + value;
      currentNode = currentNode.next;
    }
    return parseInt(value, 10);
  }

  const convertIntToList = (int) => {
    let resultNode = {
      val : null,
      next : null
    };
    let currentNode = resultNode;



  }

  let sum = convertListToInt(l1) + convertListToInt(l2);
};