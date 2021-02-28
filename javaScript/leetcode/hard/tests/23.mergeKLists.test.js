const { ListNode, mergeKLists } = require("../23.mergeKLists");

describe("mergeKLists()", () => {
  const listsArr1 = [
    new ListNode(1, new ListNode(4, new ListNode(5))),
    new ListNode(1, new ListNode(3, new ListNode(4))),
    new ListNode(2, new ListNode(6)),
  ];
  const result1 = new ListNode(
    1,
    new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          3,
          new ListNode(4, new ListNode(4, new ListNode(5, new ListNode(6))))
        )
      )
    )
  );
  test("mergeKLists(listsArr1) should be result1", () => {
    expect(mergeKLists(listsArr1)).toStrictEqual(result1);
  });

  const listsArr2 = [];
  test("mergeKLists(listsArr2) should be null", () => {
    expect(mergeKLists(listsArr2)).toStrictEqual(null);
  });

  test.skip("mergeKLists(listsArr) should be result", () => {
    expect(mergeKLists(listsArr)).toStrictEqual(result);
  });
});
