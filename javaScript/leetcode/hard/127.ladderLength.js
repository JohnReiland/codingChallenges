/*
Given two words beginWord and endWord, and a dictionary wordList, return the
length of the shortest transformation sequence from beginWord to endWord, such
that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list.
Return 0 if there is no such transformation sequence.

Example 1:

Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation:
As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.

Example 2:
Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation:
The endWord "cog" is not in wordList, therefore no possible transformation.

Constraints:
1 <= beginWord.length <= 100
endWord.length == beginWord.length
1 <= wordList.length <= 5000
wordList[i].length == beginWord.length
beginWord, endWord, and wordList[i] consist of lowercase English letters.
beginWord != endWord
All the strings in wordList are unique.
*/

/*
I feel this is, in a way, a pathing problem. Starting in one location, I need to
find the shortest route to another location. The locations are words, and the
terrain is the wordList. Solving it as a pathing problem should be
straightforword in design, if perhaps tricky in practice to build.
For the startWord and each element in wordList, identify the shape of all
psuedo-words it could transform to, and use these psuedo-words as properties
in an object literal, with an array as the value and pushing the current index
to that array. Lastly, and only for elements in wordList, test wether the
current element is the endWord. If it is, set a target variable to that index.
If that variable is -1 after all of wordList is processesd, set result to 0.
Else, push any/all indicies from startWord's psuedo-words to a test array and
set distance to 1.
  While test array is not empty
    Pop a value from the test array
    if that value is the target value
      set result to distance
      break
    else
      push any/all indicies NOT ALREADY SEEN from that index value's
      psuedo-words to a next array
    if test array is empty
      set test array to next array
      set next array to empty array 
    incremenet distance
Return the result.

*/

const psuedoWords = (string) => {
  const result = [];
  for (let i = 0; i < string.length; i++) {
    result.push(string.substr(0, i) + "*" + string.substr(i + 1));
  }
  return result;
};

const ladderLength = (beginWord, endWord, wordList) => {
  let result = 0;
  let canTransform = false;
  for (let i = 0; !canTransform && i < wordList.length; i++) {
    canTransform = wordList[i] === endWord ? true : canTransform;
  }
  if (canTransform) {
    const chart = {};
    const psuedos = [];
    for (let i = 0; i < wordList.length; i++) {
      psuedos[i] = psuedoWords(wordList[i]);
      for (let j = 0; j < psuedos[i].length; j++) {
        if (!chart[psuedos[i][j]]) {
          chart[psuedos[i][j]] = [];
        }
        chart[psuedos[i][j]].push(i);
      }
    }
    let stack = [];
    const tried = [];
    const startWords = psuedoWords(beginWord);
    for (let i = 0; i < startWords.length; i++) {
      if (chart[startWords[i]]) {
        for (let j = 0; j < chart[startWords[i]].length; j++) {
          if (tried[chart[startWords[i]][j]] !== true) {
            tried[chart[startWords[i]][j]] = true;
            stack.push(chart[startWords[i]][j]);
          }
        }
      }
    }
    let next = [];
    let distance = 2;
    while (stack.length) {
      let current = stack.pop();
      if (wordList[current] === endWord) {
        result = distance;
        break;
      } else {
        for (let i = 0; i < psuedos[current].length; i++) {
          for (let j = 0; j < chart[psuedos[current][i]].length; j++) {
            if (tried[chart[psuedos[current][i]][j]] !== true) {
              tried[chart[psuedos[current][i]][j]] = true;
              next.push(chart[psuedos[current][i]][j]);
            }
          }
        }
      }
      if (!stack.length) {
        stack = next;
        next = [];
        distance++;
      }
    }
  }
  return result;
};

module.exports = { psuedoWords, ladderLength };
