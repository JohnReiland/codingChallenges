const {
  ListNode,
  listLength,
  getIntersectionNode,
} = require("../160.getIntersectionNode");

describe("getIntersectionNode()", () => {
  const headA1 = new ListNode(
    4,
    new ListNode(1, new ListNode(8, new ListNode(4, new ListNode(5))))
  );
  const headB1 = new ListNode(
    5,
    new ListNode(6, new ListNode(1, headA1.next.next))
  );
  const result1 = headA1.next.next;
  test("getIntersectionNode(headA1, headB1) should be result", () => {
    expect(getIntersectionNode(headA1, headB1)).toBe(result1);
  });

  const headA2 = new ListNode(
    1,
    new ListNode(9, new ListNode(1, new ListNode(2, new ListNode(4))))
  );
  const headB2 = new ListNode(3, headA2.next.next.next);
  const result2 = headB2.next;
  test("getIntersectionNode(headA2, headB2) should be result2", () => {
    expect(getIntersectionNode(headA2, headB2)).toBe(result2);
  });

  const headA3 = new ListNode(2, new ListNode(6, new ListNode(4)));
  const headB3 = new ListNode(1, new ListNode(5));
  test("getIntersectionNode(headA3, headB3) should be null", () => {
    expect(getIntersectionNode(headA3, headB3)).toBe(null);
  });

  test.skip("getIntersectionNode(headA, headB) should be result", () => {
    expect(getIntersectionNode(headA, headB)).toBe(result);
  });
});
