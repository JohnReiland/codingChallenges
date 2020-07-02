/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

*/


/*
Upon reading the prompt I immediately had the impulse to solve this by brute-forcing
products of all 3-digit number combinations and using a palindrome-checker to verify
whether the result is a palindrome.

Some work will need to be done to be able to know when the largest possible palindrome
has been found, preferably by checking in descending order such that the first one found
is guarenteed to by the largest.

At any rate there will be one function generating factors in the proper order, the product
of these factors will be fed into the palindrome checker, and the first one that hits is
the largest palindrome.

It turns out it's complicated to know the order of the products. There's a higher math
solution I'm sure, but it's not obvious to me. A quick-and-dirty workaround is to calculate
the products methodically into an array, not caring about the order, and then sort the array.
Once the array is sorted, feed them into the palidrome tester.
*/

/*
Palindrome Tester
The easiest way to do this is to convert into a string first. Then, if the length is odd,
ignore the middlemost char; it doesn't matter. For what remains, start at the ends and work to the middle.
If characters don't match, return false. Else return true
*/

/*
let isPalindrome = (number) => {
  let validate = number.toString();
  let i = 0;
  while (i < Math.floor(validate.length / 2)) {
    if (validate[i] !== validate[validate.length - (1 + i)]) {
      return false;
    }
    i++;
  }
  return true;
}

isPalindrome(1);
>true

isPalindrome(12);
>false

isPalindrome(121);
>true

isPalindrome(1221);
>true

isPalindrome(9009);
>true

*/


/*
let largestPalindromeProduct = (num) => {
  let isPalindrome = (number) => {
    let validate = number.toString();
    let i = 0;
    while (i < Math.floor(validate.length / 2)) {
      if (validate[i] !== validate[validate.length - (1 + i)]) {
        return false;
      }
      i++;
    }
    return true;
  }
  let products = [];
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      products.push(i * j);
    }
  }
  products.sort((a,b) => b - a);
  for (let i = 0; i < products.length; i++) {
    if (products[i] === products[i - 1]) {
      continue;
    }
    if (isPalindrome(products[i])) {
      return products[i];
    }
  }
}

largestPalindromeProduct(99);
>9009

largestPalindromeProduct(99);
>906609
*/