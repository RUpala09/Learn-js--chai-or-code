//  let score = 30;

//  console.log(typeof score);
//  console.log(typeof(score)); // these 2 way we define and used typeof
 
// Basic conversion 
// let score = "33"; => 33 
// let score = "33abcdef" =>NaN (Not a Number)
// let score = null; => 0
// let score = undefined; => NaN
// let score = true; => 1
// let score = false; => 0

// console.log(typeof(score));

// let valueInNumber = Number(score); //conversion happend this way...
// console.log(valueInNumber);
// console.log(typeof(valueInNumber));


// let isLoggedIn = 1; => true
// let isLoggedIn = ""; => false
// let isLoggedIn = "raj"; => true

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);
// console.log(typeof(booleanIsLoggedIn));

//conversion of number to string
let someNumber = 35; 

let stringNumber = String(someNumber);
// console.log(typeof(stringNumber)); //=>string
// console.log(stringNumber); // => 35 

///////////////////Operations///////////////////

let value = 5;
let negValue = -value;
// console.log(negValue);
// console.log(-value);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3);
// console.log(2%2);

let str1 = "Hello,";
let str2 = " Raj";
let str3 = str1 + str2;
// console.log(str3);


// console.log("1" + 2);//12
// console.log(1 + 1 + "2");//22
// console.log("1" + 2 + 2);//122
// console.log(1 + 2 + "2"); // 1+2 = 3 and 2 as it is come.... o/p => 32

// console.log(3 + 4 * 6 % 5 ); // In these type of cases use () to seperate the conversion so it's not look like complex, and it's easy to read. like this way ((3 + 4) * (6 % 5) )


let gameCounter = 100;
// ++gameCounter; Prefix
gameCounter++; // Postfix
// console.log(gameCounter);
 