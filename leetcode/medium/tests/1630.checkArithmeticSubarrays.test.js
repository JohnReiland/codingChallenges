const {
  checkArithmeticSubarrays,
} = require("../1630.checkArithmeticSubarrays");

describe("checkArithmeticSubarrays()", () => {
  test("checkArithmeticSubarrays([4,6,5,9,3,7], [0,0,2], [2,3,5]) should be [true,false,true]", () => {
    expect(
      checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5])
    ).toStrictEqual([true, false, true]);
  });

  test("checkArithmeticSubarrays([-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], [0,1,6,4,8,7], [4,4,9,7,9,10]) should be [false,true,false,false,true,true]", () => {
    expect(
      checkArithmeticSubarrays(
        [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10],
        [0, 1, 6, 4, 8, 7],
        [4, 4, 9, 7, 9, 10]
      )
    ).toStrictEqual([false, true, false, false, true, true]);
  });

  test("checkArithmeticSubarrays([0,1],  [0],  [1]) should be [true]", () => {
    expect(checkArithmeticSubarrays([0, 1], [0], [1])).toStrictEqual([true]);
  });
});
