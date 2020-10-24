const { trap } = require("../42.trap");

describe("trap()", () => {
  test("trap([0,1,0,2,1,0,1,3,2,1,2,1]) should be 6", () => {
    expect(trap([0,1,0,2,1,0,1,3,2,1,2,1])).toBe(6);
  });
});

describe("trap()", () => {
  test("trap([4,2,0,3,2,5]) should be 9", () => {
    expect(trap([4,2,0,3,2,5])).toBe(9);
  });
});

/*
describe("trap()", () => {
  test("trap(value) should be result", () => {
    expect(trap(value)).toBe(result);
  });
});
