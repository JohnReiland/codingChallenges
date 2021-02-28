const { Iterate, PeekingIterator } = require("../284.PeekingIterator");

describe.skip("iterate()", () => {
  const trial0 = new Iterate([1, 2, 3]);
  test("trial0.next() to be 1", () => {
    expect(trial0.next()).toBe(1);
  });

  test("trial0.next() to be 2", () => {
    expect(trial0.next()).toBe(2);
  });

  test("trial0.next() to be 3", () => {
    expect(trial0.next()).toBe(3);
  });

  test("trial0.next() to be null", () => {
    expect(trial0.next()).toBe(null);
  });

  test.skip("Iterate.next() to be result", () => {
    expect(Iterate.next()).toBe(result);
  });
});

describe("PeekingIterator()", () => {
  const trial0 = new Iterate([1, 2, 3]);
  const trial1 = new PeekingIterator(trial0);
  test("trial1.next() should be 1", () => {
    expect(trial1.next()).toBe(1);
  });

  test("trial1.peek() should be 2", () => {
    expect(trial1.peek()).toBe(2);
  });

  test("trial1.hasNext() should be true", () => {
    expect(trial1.hasNext()).toBe(true);
  });

  test("trial1.next() should be 2", () => {
    expect(trial1.next()).toBe(2);
  });

  test("trial1.next() should be 3", () => {
    expect(trial1.next()).toBe(3);
  });

  test("trial1.hasNext() should be false", () => {
    expect(trial1.hasNext()).toBe(false);
  });
});
