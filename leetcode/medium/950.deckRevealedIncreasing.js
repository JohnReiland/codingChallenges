/*
In a deck of cards, every card has a unique integer.  You can order the deck in
any order you want.

Initially, all the cards start face down (unrevealed) in one deck.

Now, you do the following steps repeatedly, until all cards are revealed:

Take the top card of the deck, reveal it, and take it out of the deck.
If there are still cards in the deck, put the next top card of the deck at the
bottom of the deck.
If there are still unrevealed cards, go back to step 1.  Otherwise, stop.
Return an ordering of the deck that would reveal the cards in increasing order.

The first entry in the answer is considered to be the top of the deck.

Example 1:

Input: [17,13,11,2,3,5,7]
Output: [2,13,3,11,5,17,7]
Explanation: 
We get the deck in the order [17,13,11,2,3,5,7] (this order doesn't matter), and
reorder it.
After reordering, the deck starts as [2,13,3,11,5,17,7], where 2 is the top of
the deck.

We reveal 2, and move 13 to the bottom.  The deck is now [3,11,5,17,7,13].
We reveal 3, and move 11 to the bottom.  The deck is now [5,17,7,13,11].
We reveal 5, and move 17 to the bottom.  The deck is now [7,13,11,17].
We reveal 7, and move 13 to the bottom.  The deck is now [11,17,13].
We reveal 11, and move 17 to the bottom.  The deck is now [13,17].
We reveal 13, and move 17 to the bottom.  The deck is now [17].
We reveal 17.
Since all the cards revealed are in increasing order, the answer is correct.

Note:

1 <= A.length <= 1000
1 <= A[i] <= 10^6
A[i] != A[j] for all i != j
*/

/*
const deckRevealedIncreasing = (deck) => {
  let sorted = deck.sort(function (a, b) {
    return b - a;
  });
  let bottom = 0;
  let stage = [];
  for (let i = 0; i < sorted.length; i++) {
    stage.push(sorted[i]);
    stage.push(stage[bottom]);
    bottom++;
  }
  bottom--;
  let result = [];
  for (let j = stage.length - 2; j >= bottom; j--) {
    result.push(stage[j]);
  }
  return result;
};
*/

const deckRevealedIncreasing = (deck) => {
  let sorted = deck.sort(function (a, b) {
    return a - b;
  });
  let result = [sorted[0]];
  let running = 0;
  let power = 0;
  let index = 0;

  for (let i = 1; i < sorted.length; i++) {
    running += Math.pow(2, power + 1);
    index = running - difference;
    while (index > deck.length - 1) {}
    result[index] = sorted[i];
  }
  return result;
};

/*
(length - 1) = 15
2^n     : 1                           2               3       4   5
running : 0, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 64
over    :                             1               1       1   1
index   : 0, 2, 4, 6, 8, 10, 12, 14,  1,  5,  9, 13,  3, 11,  7, 15

length = 16
2^n     : 1                           2               3       4   5
running : 1, 3, 5, 7, 9, 11, 13, 15, 17, 21, 25, 29, 33, 41, 49, 65
over    :                             1               1       1   1
index   : 1, 3, 5, 7, 9, 11, 13, 15,  2,  6, 10, 14,  4, 12,  8, 16

length = 15
2^n     : 1                          
running : 1, 3, 5, 7, 9, 11, 13, 15, 17
over    :                             
index   : 1, 3, 5, 7, 9, 11, 13, 15,  4,  8, 12,  2, 10,  6, 14    

length = 7
2^n     : 1           
running : 1, 3, 5, 7, 9, 13, 17
over                  2       3
index   : 1, 3, 5, 7, 4,  2,  6

*/

module.exports = { deckRevealedIncreasing };
