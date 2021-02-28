/*
Given an Iterator class interface with methods: next() and hasNext(), design and
implement a PeekingIterator that support the peek() operation -- it essentially
peek() at the element that will be returned by the next call to next().

Example:

Assume that the iterator is initialized to the beginning of the list: [1,2,3].

Call next() gets you 1, the first element in the list.
Now you call peek() and it returns 2, the next element. Calling next() after
that still return 2. 
You call next() the final time and it returns 3, the last element. 
Calling hasNext() after that should return false.
Follow up: How would you extend your design to be generic and work with all
types, not just integer?


*/

const Iterate = function (array) {
  Iterate.index = Iterate.index || 0;
  this.array = array;
};

Iterate.prototype.next = function () {
  return Iterate.index < this.array.length ? this.array[Iterate.index++] : null;
};

Iterate.prototype.hasNext = function () {
  return Iterate.index < this.array.length;
};

const PeekingIterator = function (iterator) {
  this.iter = iterator;
  this.queue = [];
};

PeekingIterator.prototype.peek = function () {
  if (!this.queue.length && this.iter.hasNext()) {
    this.queue.push(this.iter.next());
  }
  return this.queue.length ? this.queue[0] : null;
};

PeekingIterator.prototype.next = function () {
  let result = null;
  if (this.queue.length) {
    result = this.queue.pop();
  } else if (this.iter.hasNext()) {
    result = this.iter.next();
  }
  return result;
};

PeekingIterator.prototype.hasNext = function () {
  return this.queue.length > 0 || this.iter.hasNext();
};

module.exports = { Iterate, PeekingIterator };
