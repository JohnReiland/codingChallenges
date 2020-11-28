/*
Given a non-empty array nums containing only positive integers, find if the
array can be partitioned into two subsets such that the sum of elements in both
subsets is equal.


Example 1:
Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].

Example 2:
Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.

Constraints:

1 <= nums.length <= 200
1 <= nums[i] <= 100
*/

/*
I can see the brute force method of solving this, but it has a terrible time
complexity. Namely, nth-triangle number. That means an input of length 200 will
have 20,100 potential combinations, each of them requiring 200 values to be
summed, and with potentially none of them resulting in an equal partition,
meaning all of them end up needing to be tested.

There might be a faster way to know that an array can't be equally partitioned.
I can imagine an array of 199 even numbers and one odd number. Without knowing
any of those numbers, I know that there's no way to balance that array. But if
there's two or more odd numbers, I think there's no longer anything I can say
about it being able to be balanced. That's not entirely true. If there's an odd
number of odd numbers, I also know that it can't be balanced. But the reverse
isn't true. An even number of odd numbers doesn't guarentee it can be balanced.

I'd love to find some way of using this quantity-of-odd-values analysis when
there are an even number of odd numbers, but I can't think of a way. With an
even number of odd numbers, there's no way of telling what grouping will
balance. Any number of them on either side could result in balance.

There seem to be two "causes" for balance to not be possible. One is that the
number of odd values makes it impossible to group them in such a way as to make
both sides have the same parity. The other is that the particular values can't
be added in such a way to return the same value. Parity is a quality that equal
numbers share. Maybe there are other qualities that can be tested for, besides
value.

Okay, while it's true that if an array contains an odd number of odd numbers,
it can't be balanced, there's an easier way of determining the same thing. If
the sum of all values of an array is odd, that array can't be balanced. If this
value is even, then half of this value is what each side must balance to (or
else the array can't be balanced). If any value in the array is greater than
half the value of the sum, the array can't be balanced. Moreover, if the sum of
the array is doubly even, the number of odd numbers must also be doubly even.
If it is singly even, must the number of odd numbers be single even?

50 is singly even. Must the number of odd numbers, divided by two, be odd? YES.
40 is doubly even. Must the number of odd numbers, divided by two, be even? NO. 
*/

/*
const countOdd = (nums) => {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      result++;
    }
  }
  return result;
};
*/

/*
const sumArray = (nums) => {
  return nums.length ? nums.reduce((acc, cur) => acc + cur) : 0;
};
*/

/*
const canMake = (nums, target) => {
  if (target === 0) {
    return true;
  }
  let made = new Set();
  made.add(0);
  for (let i = 0; i < nums.length; i++) {
    let madeArray = [];
    for (let value of made) madeArray.push(value);
    for (let j = 0; j < madeArray.length; j++) {
      let next = madeArray[j] + nums[i];
      if (next === target) {
        return true;
      } else if (next < target) {
        made.add(next);
      }
    }
  }
  return false;
};
*/

/*
const canPartition = (nums) => {
  const sum = nums.reduce((acc, cur) => acc + cur);
  if (sum % 2 === 0) {
    const half = sum / 2;
    nums.sort((a, b) => a - b);
    let made = new Set();
    made.add(0);
    for (let i = 0; i < nums.length; i++) {
      let madeArray = [];
      for (let value of made) madeArray.push(value);
      for (let j = 0; j < madeArray.length; j++) {
        let next = madeArray[j] + nums[i];
        if (next === half) {
          return true;
        } else if (next < half) {
          made.add(next);
        }
      }
    }
  }
  return false;
};
*/
/*
function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

Node.prototype.add = function (val) {
  if (val < this.val) {
    this.left = this.left ? this.left.add(val) : new Node(val);
  } else if (val > this.val) {
    this.right = this.right ? this.right.add(val) : new Node(val);
  }
  return this;
};

Node.prototype.output = function (array) {
  if (this.left) {
    this.left.output(array);
  }
  array.push(this.val);
  if (this.right) {
    this.right.output(array);
  }
  return array;
};
*/

/*
function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.add = function (val) {
  this.root = this.root === null ? new Node(val) : this.root.add(val);
};

BinarySearchTree.prototype.output = function () {
  let result = [];
  return this.root.output(result);
};
*/
/*
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  add(val) {
    if (val < this.val) {
      this.left = this.left ? this.left.add(val) : new Node(val);
    } else if (val > this.val) {
      this.right = this.right ? this.right.add(val) : new Node(val);
    }
    return this;
  }

  output(array) {
    if (this.left) {
      this.left.output(array);
    }
    array.push(this.val);
    if (this.right) {
      this.right.output(array);
    }
    return array;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(val) {
    this.root = this.root === null ? new Node(val) : this.root.add(val);
  }

  output() {
    let result = [];
    return this.root.output(result);
  }
}

const canPartition = (nums) => {
  const sum = nums.reduce((acc, cur) => acc + cur);
  if (sum % 2 === 0) {
    const half = sum / 2;
    let made = new BinarySearchTree();
    if (nums[0] === half) {
      return true;
    }
    made.add(nums[0]);
    for (let i = 1; i < nums.length; i++) {
      let madeArray = made.output();
      for (let j = 0; j < madeArray.length; j++) {
        let next = madeArray[j] + nums[i];
        if (next === half) {
          return true;
        } else if (next < half) {
          made.add(next);
        } else {
          break;
        }
      }
    }
  }
  return false;
};
*/

const canPartition = (nums) => {
  const sum = nums.reduce((acc, cur) => acc + cur);
  if (sum % 2 === 0) {
    nums.sort((a, b) => a - b);
    const half = sum / 2;
    let madeSet = new Set();
    madeSet.add(0);
    for (let i = 0; i < nums.length; i++) {
      let madeArray = [];
      for (let item of madeSet) madeArray.push(item);
      let nextArray = [];
      for (let j = 0; j < madeArray.length; j++) {
        let next = madeArray[j] + nums[i];
        if (next === half) {
          return true;
        } else if (next > half) {
          return false;
        } else if (!madeSet.has(next)) {
          nextArray.push(next);
        }
      }
      let nextSet = new Set();
      for (
        let k = 0, m = 0, n = 0;
        m < madeArray.length || n < nextArray.length;
        k++
      ) {
        if (!nextArray[n] || madeArray[m] < nextArray[n]) {
          nextSet.add(madeArray[m]);
          m++;
        } else if (!madeArray[m] || nextArray[n] < madeArray[m]) {
          nextSet.add(nextArray[n]);
          n++;
        }
      }
      madeSet = nextSet;
    }
  }
  return false;
};

module.exports = { canPartition };
