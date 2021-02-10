const { Node, copyRandomList } = require("../138.copyRandomList");

describe("copyRandomList()", () => {
  const head1 = new Node(
    7,
    new Node(13, new Node(11, new Node(10, new Node(1))))
  );
  head1.next.random = head1;
  head1.next.next.random = head1.next.next.next.next;
  head1.next.next.next.random = head1.next.next;
  head1.next.next.next.next.random = head1;
  test("copyRandomList(head1) should be a copy of head1", () => {
    expect(copyRandomList(head1)).not.toBe(head1);
    expect(copyRandomList(head1)).toStrictEqual(head1);
  });

  const head2 = new Node(1, new Node(2));
  head2.random = head2.next;
  head2.next.random = head2.next;
  test("copyRandomList(head2) should be a copy of head2", () => {
    expect(copyRandomList(head2)).not.toBe(head2);
    expect(copyRandomList(head2)).toStrictEqual(head2);
  });

  const head3 = new Node(3, new Node(3, new Node(3)));
  head3.next.random = head3;
  test("copyRandomList(head3) should be a copy of head3", () => {
    expect(copyRandomList(head3)).not.toBe(head3);
    expect(copyRandomList(head3)).toStrictEqual(head3);
  });

  const head4 = null;
  test("copyRandomList(head4) should be null", () => {
    expect(copyRandomList(head4)).toBe(null);
  });

  test.skip("copyRandomList(head) should be a copy of head", () => {
    expect(copyRandomList(head)).not.toBe(head);
    expect(copyRandomList(head)).toStrictEqual(head);
  });
});
