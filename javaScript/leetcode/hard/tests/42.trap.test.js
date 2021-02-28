const { trap } = require("../42.trap");

describe("trap()", () => {
  test("trap([0,1,0,2,1,0,1,3,2,1,2,1]) should be 6", () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  });

  test("trap([4,2,0,3,2,5]) should be 9", () => {
    expect(trap([4, 2, 0, 3, 2, 5])).toBe(9);
  });

  test("trap([3, 98, 0, 8, 6, 5, 4, 5, 63, 98, 0, 8, 6, 5, 4, 5, 6]) should be 12", () => {
    expect(trap([3, 98, 0, 8, 6, 5, 4, 5, 6])).toBe(12);
  });
});
