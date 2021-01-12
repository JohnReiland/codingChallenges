const { addTwoNumbers, ListNode } = require("../2.addTwoNumbers");

describe("addTwoNumbers()", () => {
  const l1A = new ListNode(2, new ListNode(4, new ListNode(3)));
  const l2A = new ListNode(5, new ListNode(6, new ListNode(4)));
  const resultA = new ListNode(7, new ListNode(0, new ListNode(8)));
  test("addTwoNumbers([2,4,3], [5,6,4]) should be [7,0,8]", () => {
    expect(addTwoNumbers(l1A, l2A)).toStrictEqual(resultA);
  });

  const l1B = new ListNode(0);
  const l2B = new ListNode(0);
  const resultB = new ListNode(0);
  test("addTwoNumbers([0], [0]) should be [0]", () => {
    expect(addTwoNumbers(l1B, l2B)).toStrictEqual(resultB);
  });

  const l1C = new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
      )
    )
  );
  const l2C = new ListNode(
    9,
    new ListNode(9, new ListNode(9, new ListNode(9)))
  );
  const resultC = new ListNode(
    8,
    new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))
        )
      )
    )
  );
  test("addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]) should be [8,9,9,9,0,0,0,1]", () => {
    expect(addTwoNumbers(l1C, l2C)).toStrictEqual(resultC);
  });

  test.skip("addTwoNumbers(l1, l2) should be result", () => {
    expect(addTwoNumbers(l1, l2)).toStrictEqual(result);
  });
});
