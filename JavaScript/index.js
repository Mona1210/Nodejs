/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable spaced-comment */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-var */
/* eslint-disable max-len */
console.log('This content is from js file');
/* Identifiers can start with alphabet, _ or $. No other special characters
They are case-sensitive
Identifier - let, const, var
let - available only in teh block its declared in,
used to declare identifiers that change value overtime or for looping vars
const - fixed value, initialized while declaration, cannot change
var - identifiers that hold data that varies, available to the function,
can be declared multiple times in same function, used to declare globally available variables*/
const pi = 3.14;
console.log('pi- '+pi);
let radius = 5;
console.log('radius- '+radius);
radius = 6;
console.log('radius- '+radius);
var area = 20;
console.log('area- '+area);
var area = 30;
console.log('area- '+area);
/* data type is not defined, its determined at runtime
we can hace same variable of different types */
var age = 24;
console.log('age- '+age);
var age = 'twenty four';
console.log('age- '+age);
/** Primitive datatypes
 * number - can be integer, long, float or double.any other value is not considered legal eg - 0/0. This is NaN
 * string - can be declared with single/double quotes, index of char in string starts from 0 to n-1
 * boolean - any value evaluates to true (100, cat, 10*20). 0,"", NaN, undefined, null evaluate to false
 * undefined - when var is used to store no value
 * null - represent no object. used to assign to an object during declaration which will be later assigned value
 * BigInt - used for integers of random length. can be used by appending n to the end or by BigInt() 
 * which genertaes BigInt from strings, numbers etc
 * Symbol - this represents unique identifier.
 * 
 * Non Primitive
 * Objects - collection in key-value pairs
 * Array - for ordered collection
 */
let custName;// value and datatpe are undefined
custName = undefined; // same

const bigintvar = 99999999999999999999999999999999999999n;
const bigintliteral = BigInt('888888888888888888888888888');
const bigintnum = BigInt(10); //same as 10n
//alert (8n + 2); //cannot mix bigint and normal type
alert(Number(bigintvar)); //to convert to number

//numbers and bigint can be equal but not strictly equal
alert( 5 == 5n );//true
alert(5 === 5n);//false

let empid = Symbol();
let empno = Symbol("empnumber");// empnumber is description
empno = 650023;
let empnum = Symbol("empnumber");// even though des is same, they are different values

alert(empno == empnum); //false
//to display symbol you can convert to String using toString(), desc can be displayed as is

alert(empno);
alert(empno.toString);
alert(empnum.description);

//global symbol - can be defined and used using for
let empid1 = Symbol.for("empno");

//objects and arrays
let phone = {
    name: "iphone",
    brand: "apple",
    price: 5000
};

let digits = [1, 2, 3, "four"]; //arrays can have diiferent data types

/**
 * Operators
 * + - when used with a string and num value gives string
 * +=, -=, *= etc - increment(follow operation) then assign; num+=10 (num = num+10)
 * === - returns true when both value and datatype are equal
 * == - checks only value (null==undefined returns true)
 * typeof - to find data type of a variable ; typeof null returns object
 */

let num1 = 20;
let num2 = "20";
console.log(num1==num2);//true
console.log(num1===num2);//false

/**
 * Non conditional statements - comment, break, continue (used to terminate current iteration and continue execution
 * with next iteration)
 * Conditional statements - if-else, switch
 * Ternary operator - condition ? true : false;
 * 
 */
