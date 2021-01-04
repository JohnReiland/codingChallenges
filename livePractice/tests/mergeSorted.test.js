const { mergeTwoLists } = require("../mergeSorted");

describe("mergeTwoLists()", () => {
  test("mergeTwoLists([1,2,4], [1,3,4]) should be [1,1,2,3,4,4]", () => {
    expect(mergeTwoLists([1, 2, 4], [1, 3, 4])).toStrictEqual([
      1,
      1,
      2,
      3,
      4,
      4,
    ]);
  });

  test("mergeTwoLists([], []) should be []", () => {
    expect(mergeTwoLists([], [])).toStrictEqual([]);
  });

  test("mergeTwoLists([], [0]) should be [0]", () => {
    expect(mergeTwoLists([], [0])).toStrictEqual([0]);
  });

  test.skip("mergeTwoLists(l1, l2) should be result", () => {
    expect(mergeTwoLists(l1, l2)).toStrictEqual(result);
  });
});
