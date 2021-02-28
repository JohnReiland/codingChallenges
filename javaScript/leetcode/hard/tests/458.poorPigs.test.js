const { poorPigs } = require("../458.poorPigs");

describe("poorPigs()", () => {
  test("poorPigs(1000, 15, 60) should be 5", () => {
    expect(poorPigs(1000, 15, 60)).toBe(5);
  });

  test("poorPigs(10000, 15, 60) should be 5", () => {
    expect(poorPigs(1000, 15, 60)).toBe(5);
  });
});
