const { TestScheduler } = require("jest");
const { merge } = require("../88.mergeSortedArray");

describe("merge", () => {
  const test1 = [1, 2, 3, 0, 0, 0];
  const m = 3;
  const test2 = [2, 5, 6];
  const n = 3;

  const result1 = [1, 2, 2, 3, 5, 6];

  test("merge(test1, m, test2, n) should be result1", () => {
    expect(merge(test1, m, test2, n)).toEqual(result1);
  });
});
