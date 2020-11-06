/*
takes positive int

returns *name* of column in excel spreadsheet of that int's index.

703 = 1 * 26^2 + 1 * 26^1 + 1 * 26^0 => AAA
704 = 1 * 26^2 + 1 * 26^1 = 2 * 26^0 => AAB


let e = 0
let p = 26
let raw = [];
let conversion = {1: "A"}
let result = "";
let pointer

705
[3, 1, 1]
AAC

26^0 = 1.   1   * 26 = 26         705 > 26? Y. 705 - 1 = 704
26^1 = 26.  26  * 26 = 676        704 > 676? Y. 704 - 26 = 678
26^2 = 676. 676 * 26 = 17576      678 > 17576? N.
            676 * 1  = 676        678 > 676? Y.
            676 * 2  = 1352       678 > 1352? N. 678 - 676 = 2
            26  * 1  = 26         2   > 26? N.
            1   * 1  = 1          2   > 1?  Y.
            1   * 2  = 2          2   > 2?  N.  

while (n > p * Math.pow(26, e)) {
  raw.unshift(1);
  n -= 1 * Math.pow(26, e)
  e++;
}
while (n > 0) {
  p = 1;
  while () {

  }
}

n > 26 * 26^0 
n -= 26 * 26^0  
n > n 26 * 26^1 


e = 1;
while n > 26^e
  e++

e--

1 * 26^e +

n - 26^e = 27

e--


convert base 10 to binary

8 = 1000



one-indexed

base 27

26 = 26 => Z
27 =  26 * 1 + 1 =>  AA

701 = 26 * 26 + 25 => ZY
702 = 26 * 26 + 26 => ZZ
703 = 26 *  (1 *  26)  + (1 * 26)   + (1) => AAA

6542 = 26 * 251 + 16 => 

27 - 52 => AA - AZ


1 - 26 => A - Z

27 - 702 => AA - ZZ 
703 => AAA 

Constant-time solution



*/
