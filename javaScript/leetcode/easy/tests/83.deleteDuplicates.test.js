const { TestScheduler } = require("jest");
const { deleteDuplicates, ListNode } = require("../83.deleteDuplicates");

describe("deleteDuplicates", () => {
  const test1 = {
    val: 1,
    next: {
      val: 1,
      next: {
        val: 2,
        next: null,
      },
    },
  };

  const result1 = {
    val: 1,
    next: {
      val: 2,
      next: null,
    },
  };

  test("deleteDuplicates(1->1->2) should be 1->2", () => {
    expect(deleteDuplicates(test1)).toEqual(result1);
  });

  const test2 = {
    val: 1,
    next: {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 3,
            next: null,
          },
        },
      },
    },
  };

  const result2 = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: null,
      },
    },
  };

  test("deleteDuplicates(1->1->2) should be 1->2", () => {
    expect(deleteDuplicates(test2)).toEqual(result2);
  });
});
