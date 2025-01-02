//! Math.round(): Round to the nearest integer
//! Math.Floor(): Always rounds down to the nearest integer.
//! Math.ceil(): Always round up to the nearest integer.

//* Math: The Math namespace object contains static properties and methods for mathematical constants and functions.
//! 1. Math works with the Number type. It doesn't work with BigInt.
// const piValue=Math.PI;
// console.log(piValue); //* 3.141592653589793

//! 2. (i) Math.abs(): The Maths.abs() static method return the absolute value of a number.
// simply how far the number from 0, it will be always positive
//? console.log(Math.abs(-3.5));//3.5
//* always give positive value

//! (ii) Math.round(x): Round a number to the nearest integer.
//? console.log(Math.round(-6.7));// -7(basic round off math)

//! (iii) Math.ceil(x): Round the value of x rounded up to its nearest integer:
// console.log(Math.ceil(-3.7));//3 
// console.log(Math.ceil(3.7));//*4 (right always)

//! (iv) Math.floor(x): Returns the values of x rounded down to its nearest integer.
//console.log(Math.floor(-3.7));//*-4 (left always)
// console.log(Math.floor(3.7));//3

//! (ES2015) (v) Math.trunc(x):Return the integer part of x:
//console.log(Math.trunc(-3.7));//* always return integer part of x

//? Math.trunc(x) and Math.floor(x) work diff for negative value.

//! 3. Exponential and logarithmic Functions:

//! (i) Math.pow(x.y): Returns the value of x to the power of y.
// console.log(Math.pow(2,5));
//? console.log(2 ** 5);

//! (ii) Math.sqrt(): Math.sqrt(x) returns the square root of x.
// console.log(Math.sqrt(25));

//! (iii) Math.log(x) returns the natural logarithm of x.
// console.log(Math.log(1));
// console.log(Math.log(2));

//! (iv) console.log(Math.log2(8));

//* Interview Question:

//! Generate Random number:
//? Math.random(): Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)

//console.log(Math.random()); //* we have saw project in which random gradient was generating on each click made through this.
//! Number btw 1 to 100 only 
// console.log(Math.round(Math.random()*100)); //*guess the number made through this 
// console.log((Math.random()*100).toFixed(3));//! At e-commerce we prefer this
