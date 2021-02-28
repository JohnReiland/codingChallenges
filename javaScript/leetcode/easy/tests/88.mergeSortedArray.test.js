const { TestScheduler } = require("jest");
const { merge } = require("../88.mergeSortedArray");

describe("merge", () => {
  const test1 = [1, 2, 3, 0, 0, 0];
  const m1 = 3;
  const test2 = [2, 5, 6];
  const n1 = 3;

  const result1 = [1, 2, 2, 3, 5, 6];

  test("merge(test1, m1, test2, n1) should be result1", () => {
    expect(merge(test1, m1, test2, n1)).toEqual(result1);
  });

  const test3 = [2, 5, 6, 0, 0, 0];
  const m2 = 3;
  const test4 = [1, 2, 3];
  const n2 = 3;

  const result2 = [1, 2, 2, 3, 5, 6];

  test("merge(test3, m2, test4, n2) should be result1", () => {
    expect(merge(test3, m2, test4, n2)).toEqual(result2);
  });
});
