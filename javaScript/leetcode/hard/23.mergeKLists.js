/*
You are given an array of k linked-lists lists, each linked-list is sorted in
ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

Example 1:
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

Example 2:
Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []

Constraints:
k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= lists[i][j] <= 10^4
lists[i] is sorted in ascending order.
The sum of lists[i].length won't exceed 10^4.
*/

/*
An idea occurs to me and it's the best kind, because I can't tell if it's silly
or clever. The input will be an array of as many as 10,000 linked lists. It's
not practical to find the lowest value among all lists for each step of building
the result linked list. The range of values for each listNode, however, isn't
that large. The val of each node could be used as a key to insert the node into
an oject literal, with an array as the property of that key. When all lists have
had all their nodes inserted in this way, the object is tested for every valid
val, starting with -10^4 and going all the way to 10^4. Whenever a val works as
a key, each element in its array is added, in order, as the next ListNode in the
result array. When this is completed, the last ListNode has its next value set
to null, and the result is returned.
*/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const mergeKLists = (lists) => {
  const range = {};
  const cap = new ListNode();
  let resultNode = cap;
  for (let i = 0; i < lists.length; i++) {
    let currentNode = lists[i];
    while (currentNode) {
      if (!range[currentNode.val]) {
        range[currentNode.val] = [];
      }
      range[currentNode.val].push(currentNode);
      currentNode = currentNode.next;
    }
  }
  for (let i = -10000; i <= 10000; i++) {
    if (range[i]) {
      for (let j = 0; j < range[i].length; j++) {
        resultNode.next = range[i][j];
        resultNode = resultNode.next;
      }
    }
  }
  resultNode.next = null;
  return cap.next;
};

module.exports = { ListNode, mergeKLists };
