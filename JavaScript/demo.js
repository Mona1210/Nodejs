/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable arrow-parens */
/* eslint-disable quotes */
/* eslint-disable space-before-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable prefer-const */
/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/** 
 * 2 modes of execution - immediate (as soon as webpage loads js embedded is executed),
 * deferred (execution of script is delayed until a user action like click, input, select)
 *              Functions
 * They are first class objects - can be passed to other functions, can be assigned as value to a variable
 * 2 types - builtin, userdefined
 */

function multiply(num1, num2) {
    return num1*num2;
}
let product = multiply(5, 6);    
console.log('product - '+product);

// another way of defining a function
let sayHello = function() {
    console.log('Welcome');
};
sayHello();

// Arrow function with parameters
cost = (price, persons) => {
    return price*persons;
};
console.log(cost(500, 2));

// Arrow function without parameters
trip = () => "Let's go on a trip";
console.log(trip());

// Arrow function with 1 parameter - no need of ()
trip = place => "Trip to "+place;
console.log(trip("Paris"));

// Another way for 1 parameter
trip = _ => "Trip to "+_;
console.log(trip("India"));

// this keyword - in regular function. myObject defines this as an instance of itself line 62
// regular function used within foreach - this points to global object of window
// this within function in object - points to the object
//
const myObject = {
    items: [1],
    myMethod() {
        console.log('This keyword');
        console.log(this==myObject); //true
        console.log(this===myObject); //true
        this.items.forEach(function() {
            console.log(this===myObject);//false
            console.log(this===window); //true
        });
    }
};
myObject.myMethod();

// this keyword using arrow function - they dont have their own this. If this is accessed then its value is taken
// from outside arrow function. So value of this inside arrow function and outside are same.

const myObjectArrow = {
    items: [1],
    myMethod() {
        console.log(this==myObjectArrow); //true
        this.items.forEach(() => {
            console.log(this===myObjectArrow);//true
            console.log(this===window); //false
        });
    }
};
myObjectArrow.myMethod();

// Parameters and arguments - if the number of args dont match no error is thrown
// if more params are present then extra ones have undefined value

console.log(multiply(5, 6));
console.log(multiply(5)); // NaN

// setting default values
function add(num1, num2 = 1) {
    return num1+num2;
}
console.log(add(5, 10));
console.log(add(10));// default value used only when arg is not passed

// rest parameter syntax - to hold indefinite args
function shownums(x, y, ...z) {
    return z;
}
console.log(shownums(1, 2, 3, 4, 5));// [3,4,5]
console.log(shownums(1, 2, 3, 4, 5, 1, 2, 3, 4, 5));// [3, 4, 5, 1, 2, 3, 4, 5]

// destructuring array in functions
let myarray = ["Andrew", "Vhris", "John"];
function showdetails([arg1, , arg2]) {
    console.log(arg1);
    console.log(arg2);
}
showdetails(myarray);

/** Built in Functions 
 * parseInt() - convert string to int; second param optional - radix between 2 and 36 to represent numerical system
 * method stops when it encounters non numeric char
 * eval()- takes string which can be expression or statement
 * timer built in functions -
 * setTimeout() - function to be executed, time delay in ms
 * clearTimeout() - takes timeoutID which is identifier of timeout which is returned by setTimeout
*/

parseInt("10");// 10
parseInt("10 years"); // 10
parseInt("years 10"); // NaN as first char is non numeric

eval("let num1=2; let num2=3; let result=num1*num2;console.log(result)");

let timerId = setTimeout(sayHello, 3000);
clearTimeout(timerId);

setInterval(sayHello, 3000); //executes function after every 3 sec

/**Scope of variables
 * Global - outside functions, available globally; variable declared in function without using "var" is also global
 * local - declared inside function; 
 * block - variables declared with let and const
 */

function fullname(){
    lastname = "Parveez";
}
fullname();// function has to be called first, only after that var inside can be accessed globally
console.log('lastname - '+lastname);

function testvar(){
    if(10==10){
        var flag="true";
        //let flag2 = "true";
    }
    console.log(flag); //var is accessible outside the block
    //console.log(flag2); //let is not accessible
}
testvar();

//Hoisting - all variables(var) and function declarations wherever they are present get lifted and declared at top of program
// this way reference error is not thrown for var but its thrown for let and const

console.log("first name - "+fname);
var fname = "Mark"; // comes as undefined but no reference error

/**
 * Classes - constructor method is called each time class is created and initialized
 * static methods in class have to be accessed using classname.method() and not using this.method()
 * reusable functions can be created using static keyword and can be accessed without creating instance of declared class
 * inheritance - can be done using extends, the class inherits all static and non static methods
 * 
 */
/** var this.carname is directly set without defining it first like in java
 * cannot access carname directly in parent class or child class as its not defined. Use only this.carname
 * this.carname is accessible in child and ths.model is accessible in parent though not defined in them
 */
 class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname+' of model - '+this.model;
    }
    static hello() {
        return "Hello from static class!!";
      }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model+this.carname;
    }
  }
  
  let myCar = new Model("Ford", "Mustang");
  console.log(myCar.show());
 // myCar.hello();//gives error because static methods cannot be accessed using object name
  console.log(Model.hello());


/** InBuilt events & handlers
 * onclick, onkeypress, onkeyup, onload (when html doc is loaded in browser)
 * onkeydown(), onkeypress(), onkeyup() -> order of execution on entering a character
 * onblur (when element loses focus), onchange(when selection for checked state changes for text-area, input, select etc)
 */
// eg - <p onclick="excute();">para</p>
// eg - <p onclick="alert('Click is triggered');">para</p> - inline scriptiong but this approach is not suggested