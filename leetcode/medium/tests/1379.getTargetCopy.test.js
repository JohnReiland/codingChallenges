const { getTargetCopy, TreeNode } = require("../1379.getTargetCopy");

describe("getTargetCopy()", () => {
  const original1 = new TreeNode(
    7,
    new TreeNode(4),
    new TreeNode(3, new TreeNode(6), new TreeNode(19))
  );
  const cloned1 = new TreeNode(
    7,
    new TreeNode(4),
    new TreeNode(3, new TreeNode(6), new TreeNode(19))
  );
  const target1 = original1.right;
  const result1 = cloned1.right;
  test("getTargetCopy(original1, cloned1, target1) should be result1", () => {
    expect(getTargetCopy(original1, cloned1, target1)).toStrictEqual(result1);
  });

  const original2 = new TreeNode(7);
  const cloned2 = new TreeNode(7);
  const target2 = original2;
  const result2 = cloned2;
  test("getTargetCopy(original2, cloned2, target2) should be result2", () => {
    expect(getTargetCopy(original2, cloned2, target2)).toStrictEqual(result2);
  });

  const original3 = new TreeNode(
    8,
    null,
    new TreeNode(
      6,
      null,
      new TreeNode(
        5,
        null,
        new TreeNode(
          4,
          null,
          new TreeNode(3, null, new TreeNode(2, null, new TreeNode(1)))
        )
      )
    )
  );
  const cloned3 = new TreeNode(
    8,
    null,
    new TreeNode(
      6,
      null,
      new TreeNode(
        5,
        null,
        new TreeNode(
          4,
          null,
          new TreeNode(3, null, new TreeNode(2, null, new TreeNode(1)))
        )
      )
    )
  );
  const target3 = original3.right.right.right;
  const result3 = cloned3.right.right.right;
  test("getTargetCopy(original3, cloned3, target3) should be result3", () => {
    expect(getTargetCopy(original3, cloned3, target3)).toStrictEqual(result3);
  });

  const original4 = new TreeNode(
    1,
    new TreeNode(
      2,
      new TreeNode(4, new TreeNode(8), new TreeNode(9)),
      new TreeNode(5, new TreeNode(10))
    ),
    new TreeNode(3, new TreeNode(6), new TreeNode(7))
  );
  const cloned4 = new TreeNode(
    1,
    new TreeNode(
      2,
      new TreeNode(4, new TreeNode(8), new TreeNode(9)),
      new TreeNode(5, new TreeNode(10))
    ),
    new TreeNode(3, new TreeNode(6), new TreeNode(7))
  );
  const target4 = original4.left.right;
  const result4 = cloned4.left.right;
  test("getTargetCopy(original4, cloned4, target4) should be result4", () => {
    expect(getTargetCopy(original4, cloned4, target4)).toStrictEqual(result4);
  });

  const original5 = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
  const cloned5 = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
  const target5 = original5.left;
  const result5 = cloned5.left;
  test("getTargetCopy(original5, cloned5, target5) should be result5", () => {
    expect(getTargetCopy(original5, cloned5, target5)).toStrictEqual(result5);
  });

  test.skip("getTargetCopy(original1, cloned1, target1) should be result1", () => {
    expect(getTargetCopy(original1, cloned1, target1)).toStrictEqual(result1);
  });
});
