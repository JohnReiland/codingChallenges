const { deleteDuplicates, ListNode } = require("../82.deleteDuplicates");

describe("deleteDuplicates()", () => {
  const head1 = new ListNode(
    1,
    new ListNode(
      2,
      new ListNode(
        3,
        new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5))))
      )
    )
  );
  const result1 = new ListNode(1, new ListNode(2, new ListNode(5)));
  test("deleteDuplicates(head1) should be result1", () => {
    expect(deleteDuplicates(head1)).toStrictEqual(result1);
  });

  const head2 = new ListNode(
    1,
    new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3))))
  );
  const result2 = new ListNode(2, new ListNode(3));
  test("deleteDuplicates(head2) should be result2", () => {
    expect(deleteDuplicates(head2)).toStrictEqual(result2);
  });

  test.skip("deleteDuplicates(head) should be result", () => {
    expect(deleteDuplicates(head)).toStrictEqual(result);
  });
});
