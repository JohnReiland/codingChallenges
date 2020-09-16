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
  var reverseString = (string) => {
    let result = "";
    for (let i = string.length - 1; i >= 0; i--) {
      result = result + string[i];
    }
    return result;
  };

  var listToString = (list) => {
    let result = list.val.toString();
    let currentNode = list;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      result = result + currentNode.val.toString();
    }
    return reverseString(result);
  };

  var addTwoStrings = (s1, s2) => {
    let result = "";
    let sum;
    let carried = 0;
    let places = s1.length < s2.length ? s2.length : s1.length;
    for (let i = 0; i < places; i++) {
      if (s1[s1.length - 1 - i] === undefined) {
        sum = parseInt(s2[s2.length - 1 - i], 10) + carried;
      } else if (s2[s2.length - 1 - i] === undefined) {
        sum = parseInt(s1[s1.length - 1 - i], 10) + carried;
      } else {
        sum =
          parseInt(s1[s1.length - 1 - i], 10) +
          parseInt(s2[s2.length - 1 - i], 10) +
          carried;
      }
      carried = 0;
      if (sum > 9) {
        carried = sum - (sum % 10);
        sum = sum - carried;
        carried = carried / 10;
      }
      result = sum.toString() + result;
    }
    if (carried !== 0) {
      result = carried.toString() + result;
    }
    return result;
  };

  var stringToList = (string) => {
    let prepared = reverseString(string);
    let result = {
      val: parseInt(prepared[0], 10),
      next: null,
    };
    let currentNode = result;
    for (let i = 1; i < prepared.length; i++) {
      currentNode.next = {
        val: null,
        next: null,
      };
      currentNode = currentNode.next;
      currentNode.val = parseInt(prepared[i], 10);
    }
    return result;
  };

  return stringToList(addTwoStrings(listToString(l1), listToString(l2)));
};
