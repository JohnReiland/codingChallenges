const { MinStack } = require("../155.MinStack");

describe("MinStack()", () => {
  const stack1 = new MinStack();
  stack1.push(1);
  test.skip(".push(1) should push 1 to MinStack object", () => {
    expect(stack1.top()).toBe(1);
  });
  stack1.push(2);
  test.skip(".push(2) should push 2 to MinStack object", () => {
    expect(stack1.top()).toBe(2);
  });
  stack1.push(-2);
  test.skip(".push(-2) should push -2 to MinStack object", () => {
    expect(stack1.top()).toBe(-2);
  });

  test.skip(".getMin() should return the minimum value of MinStack object", () => {
    expect(stack1.getMin()).toBe(-2);
  });
  stack1.pop();
  test(".pop() should pop the top value of MinStack object", () => {
    expect(stack1.top()).toBe(2);
    expect(stack1.getMin()).toBe(1);
  });
});
