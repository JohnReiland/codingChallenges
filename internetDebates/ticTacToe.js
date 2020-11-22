/*
Design a program able to monitor an ongoing game of tic tac toe, and, with each
update, detect whether a player has won, or whether the game is a draw, or which
player's turn it is.
*/

/*
There are a lot of different ways to handle keeping track of a boardstate, each
with their own advantages and disadvantages. I'm choosing a way that gives a lot
of weight to clarity, at some cost of increased data exchange. Rather than only
sending a players move, the entire boardstate will be sent with each move. This
removes the need for logic to create and maintain a boardstate server-side.

A boardstate can likewise be described in a number of ways. There are a finite
number of possible boardstates, and so each one could be assigned by a number,
with logic to determine the associated number for a given boardstate and
subsequent actions determined by that number. Again, however, I'm choosing a
way that emphasizes clarity
*/

const checkBoardstate = (boardState) => {};

module.exports = { checkBoardstate };
