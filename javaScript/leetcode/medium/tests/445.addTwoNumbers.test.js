const {
  ListNode,
  bigIntToList,
  listToBigInt,
  addTwoNumbers,
} = require("../445.addTwoNumbers");

describe("bigIntToList()", () => {
  test("bigIntToList(1).val should be 1", () => {
    expect(bigIntToList(1).val).toBe(1);
  });

  test("bigIntToList(12).val should be 1", () => {
    expect(bigIntToList(12).val).toBe(1);
  });

  test("bigIntToList(12).next.val should be 2", () => {
    expect(bigIntToList(12).next.val).toBe(2);
  });

  test("bigIntToList(12).next.next should be null", () => {
    expect(bigIntToList(12).next.next).toBe(null);
  });
});

describe("listToBigInt()", () => {
  let list1 = bigIntToList(123);
  test("listToBigInt(list1) should be 123", () => {
    expect(listToBigInt(list1)).toBe(123n);
  });

  let list2 = bigIntToList(0);
  test("listToBigInt(list2) should be 0", () => {
    expect(listToBigInt(list2)).toBe(0n);
  });
});

describe("addTwoNumbers()", () => {
  let l1 = bigIntToList(7243);
  let l2 = bigIntToList(564);
  test("listToBigInt(addTwoNumbers(l1, l2)) should be 7807n", () => {
    expect(listToBigInt(addTwoNumbers(l1, l2))).toBe(7807n);
  });
});

describe("addTwoNumbers()", () => {
  let l1 = bigIntToList(
    2432432432432432432432432432432432432432432432432432432432439n
  );
  let l2 = bigIntToList(
    5642432432432432432432432432432432432432432432432432432439999n
  );
  test("listToBigInt(addTwoNumbers(l1, l2)) should be 8074864864864864864864864864864864864864864864864864864872438n", () => {
    expect(listToBigInt(addTwoNumbers(l1, l2))).toBe(
      8074864864864864864864864864864864864864864864864864864872438n
    );
  });
});

describe.skip("functionName()", () => {
  test("functionName(value) should be result", () => {
    expect(functionName(value)).toBe(result);
  });
});
