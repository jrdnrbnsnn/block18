// Jordan Robinson
// Block 18 Workshop1

// Unit Tests:

// Test 1:  A function called "multiplication" that returns the product of the two input numbers.

/* 
Happy Path:
1. Happy Path: Multiplication with Integers -
 Expect multiplication(4,5) to be equal to 20.

2. Happy Path: Multiplication with Decimals - 
Expect multiplication(2.4,3.1)) to be equal to 7.44.

3. Happy Path: Multiplication with negative sign - 
Expect mulitplication(10,-2) to be equal to -20.

Unhappy path: 

1. Unhappy path: Multiplication with strings
 Expect("5", 6) to be an error: 
 String * number = error

2. Unhappy path: Multiplication with empty input 
Expect multiplication ("", 8) to be an error: 
empty input * number = error

*/

// Test 2: A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays

// Example: concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])

/*
1. Happy Path: Both arrays contain odd numbers with multiple of same odd numbers.
Expect concatOdds(array1, array 2) to be an arrayt equal to [-1, 1, 3, 9, 15]

1. Unhappy Path: One of the inputs is an empty array [], [1,3,5,7,9]
Expect concatOdds(array1, array2) to be an empty array []

2. Unhappy path: Both inputs only contain even numbers [2,4,6,8], [10,12,14,16] 
Expect concatOdds(array1, array2) to be an empty array

3. Unhappy path: Input conatins strings [1,3,5,7, yes], [9,11]
Expect concatOdds(array1, array2) to return [1,3,5,7,9,11]
*/
