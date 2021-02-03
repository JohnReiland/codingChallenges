const { ListNode, hasCycle } = require("../141.hasCycle");

describe("hasCycle()", () => {
  const head1 = new ListNode(
    3,
    new ListNode(2, new ListNode(0, new ListNode(-4)))
  );
  head1.next.next.next.next = head1.next;
  test("hasCycle(head1) should be true", () => {
    expect(hasCycle(head1)).toBe(true);
  });

  const head2 = new ListNode(1, new ListNode(2));
  head2.next.next = head2;
  test("hasCycle(head2) should be true", () => {
    expect(hasCycle(head2)).toBe(true);
  });

  const head3 = new ListNode(1);
  test("hasCycle(head3) should be false", () => {
    expect(hasCycle(head3)).toBe(false);
  });

  const head4 = new ListNode(1);
  head4.next = head4;
  test("hasCycle(head4) should be true", () => {
    expect(hasCycle(head4)).toBe(true);
  });

  test.skip("hasCycle(head) should be result", () => {
    expect(hasCycle(head)).toBe(result);
  });
});
