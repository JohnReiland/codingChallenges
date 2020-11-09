/*
Three boxes exist, the first containing three gold balls, the second containing
one gold ball and one silver ball, and the third containing three silver balls.

A participant chooses a box at random and, from that box, draws a random ball.
It is gold.

A spectator wants to know the probability that another ball, drawn from the same
box, is gold. Form a hypothesis about the probability, then build a program to
perform the experiment 10,000,000 times and compare your hypothesis to the result.
*/

let experiment = (number) => {
  let boxes = [
    ["gold", "gold", "gold"],
    ["gold", "silver"],
    ["silver", "silver", "silver"],
  ];
  let trials = 0;
  let result = 0;
  while (trials < number) {
    let currentBox = boxes[Math.floor(Math.random() * 3)];
    let drawnBall = currentBox.splice(
      Math.floor(Math.random() * currentBox.length),
      1
    );
    if (drawnBall === "gold") {
      trials++;
      let newDrawnBall = currentBox.splice(
        Math.floor(Math.random() * currentBox.length),
        1
      );
      if (newDrawnBall === "gold") {
        result++;
      }
    }
  }
  return `${number} trials performed, ${result} resulted in success.
  Success rate: ${result / number}`;
};
