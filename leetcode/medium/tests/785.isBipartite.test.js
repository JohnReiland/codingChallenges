const { isBipartite } = require("../785.isBipartite");

describe("isBipartite()", () => {
  const graph1 = [
    [1, 2, 3],
    [0, 2],
    [0, 1, 3],
    [0, 2],
  ];
  test("isBipartite(graph1) should be false", () => {
    expect(isBipartite(graph1)).toBe(false);
  });

  const graph2 = [
    [1, 3],
    [0, 2],
    [1, 3],
    [0, 2],
  ];
  test("isBipartite(graph2) should be true", () => {
    expect(isBipartite(graph2)).toBe(true);
  });

  test.skip("isBipartite(graph) should be result", () => {
    expect(isBipartite(graph)).toBe(result);
  });
});
