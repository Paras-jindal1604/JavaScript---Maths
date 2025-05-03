
//? The math object has various methods - 


//* Math.floor()  -  returns the value of x "rounded down" to its nearest integer.

console.log(Math.floor(3.4));
console.log(Math.floor(9.8));
console.log(Math.floor(1.9));
console.log(Math.floor(-2.3));
console.log(Math.floor(-6.8));
console.log(Math.floor(0));


//* Math.ceil(x)  -  returns the value of x "rounded up" to its nearest integer.

console.log(Math.ceil(3.4));
console.log(Math.ceil(9.8));
console.log(Math.ceil(1.9));
console.log(Math.ceil(-2.3));
console.log(Math.ceil(-6.8));
console.log(Math.ceil(0))



//* Math.random()  -  returns a random number between 0 (inclusive), and 1 (exclusive).
//  0 <= value < 1
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());



//^ ---------------------------------------------------------------------------------------------------------------



//!  How to generate a random number b/w 0 and 9 ???

console.log(Math.floor(Math.random()*10));
// Math.random()*10 returns a random number as 1.2/6.9/5.3  and taking floor value generates number from 0-9.


//! How to generate a random number b/w 1 and 10 ???

console.log(Math.floor(Math.random()*10) + 1);
// Math.floor(Math.random()*10) generate random no. b/w 0 and 9. After adding 1 to it range becomes 1-10;


//! How to generate a random number b/w 11 and 20 ???

console.log(Math.floor(Math.random()*10) + 11);
// Math.floor(Math.random()*10) generate random no. b/w 0 and 9. After adding 11 to it range becomes 11-20.


//^ How to generate a random number between a maximum and minimum range ???
//^ Formula -->   Math.floor(Math.random()*(max-min+1)+min);

// e.g. - generate a random number b/w 40 and 50
console.log(Math.floor(Math.random()*(50-40+1)+40));

// The multiplying factor is the total number of different numbers in given range.
// and from here the formula is derived as max-min+1.
// and if we want to shift range then we add +min at end.

//! How to generate a random number b/w 0 and 11 ???
console.log(Math.floor(Math.random()*11));

//! How to generate a random number b/w 0 and 12 ???
console.log(Math.floor(Math.random()*12));



//! LUDO DICE - How to generate a random number b/w 1 and 6 ???
console.log(Math.floor(Math.random()*(6-1+1) +1));





//^ NOTE - Math.random() is not used to generate OTP because Hackers can predict its output.
// It uses an algorithm that perform some operation on system clock number and generate output.
// If hacker got the access to algorithm and system clock number then he can also predict OTP.
// Math.random() seems to be random but is not fully random as it uses pre-defined number to generate value.



//^ ---------------------------------------------------------------------------------------------------------------------





//* Math.trunc(x) -  returns the integer part of x.

console.log(Math.trunc(4.56));
console.log(Math.trunc(4.8));
console.log(Math.trunc(4.99));
console.log(Math.trunc(-4.23));
console.log(Math.trunc(-4.90));




//* Math.pow(x, y) -  returns the value of x to the power of y.

console.log(Math.pow(2,3));
console.log(Math.pow(4,5));
console.log(Math.pow(5,0));
console.log(Math.pow(-1,9));
console.log(Math.pow(2,-2));



//* Math.sqrt(x)  -  returns the square root of x.

console.log(Math.sqrt(25));
console.log(Math.sqrt(12.25));



//* Math.abs(x)  - returns the absolute (positive) value of x.

console.log(Math.abs(-4.8));
console.log(Math.abs(9.2));




