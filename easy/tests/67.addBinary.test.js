const { addBinary } = require("../67.addBinary");

describe("addBinary()", () => {
  test("addBinary('11', '1' should be '100'", () => {
    expect(addBinary("11", "1")).toBe("100");
  });

  test("addBinary('1010', '1011' should be '10101'", () => {
    expect(addBinary("1010", "1011")).toBe("10101");
  });
});
