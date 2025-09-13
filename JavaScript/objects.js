/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable prefer-const */
/* eslint-disable linebreak-style */
/**
 * Types of objects
 * - Userdefined and built in
 * -Built in divided into - Global (primitive type, miscellaneous) and browser
 * primitive - number, string, boolean; misc - objects by js like Date, Array
 * Browser - allow js code to talk to browser and manipulate HTML DOM eg BOM, DOM
 * 
 * ways of creating objects - object literals and by constructors
 */
$('.myclass').hide();
$('#divid').hide();
let myCar = {
    name: "Fiat",
    model: "VX",
    speed: 45,
    function(speedconter) {
        this.speed = this.speed + speedconter;
        return this.speed;
    }
};

console.log(myCar.model);
//console.log(myCar[model]); This gives error
console.log(myCar["model"]);
console.log(myCar['model']);

//object creation using literal
let name1="arnold";
let age=65;
let place="USA";
let obj={name1, age, place};

// dynamic property addition - before in js
let dynamicProperty = 'occupation';
obj[dynamicProperty] = 'actor';

// this keyword - if used inside object points to object; if used inside
// function it points to obj that owns function
// Retrieving variables/methods - using . or []
obj.age; //or
obj['age'];

// accessing using for loop - special loop
let user = {
    name: 'Rekha',
    age: 24,
    isConfirmed: true
};

for (let key in user) {
    console.log(key);
    console.log(user[key]);
}

/**Built in object
 * Date, String, Regex, Math, JSON
 */
let mystring = 'Hello world of javascript';
console.log('substring - ' +mystring.substring(0, 4));//start and endindex(excluded)
console.log('substring - ' +mystring.substr(0, 4));// start index and length of string

// Regex objwct can be constructed using regexp constructor or using value in forward slash /
// let pattern1 = new RegExp(pattern, modifiers); modifiers - i, g(global match - find all matches), m(multiline)
// pattern - [] denotes range of characters eg [abc]
var str = "Visit W3Schools";
var n = str.search(/w3schools/i);//i - modifier to denote case insensitive search; returns position of match - 6
var str = "Is this all there is?";
var patt1 = /[sth]/g; 
var result = str.match(patt1);
console.log(result);// returns array - ["s", "t", "h", "s", "t", "h", "s"]
console.log(result[0]);
let email = new RegExp('(?=.@*)(?=.+.com)');//to check for @ and .com
var str="mona_parveez@infosys.com"
var result=str.search(email);
console.log(result);
let mobno = new RegExp('[0-9]{10}');//to check for digits and maxlength = 10
let pwd = new RegExp('(?=.*[0-9])(a-zA-Z)');

Math.PI;
Math.SQRT2;
Math.max(10, 20, 30);//returns 30
Math.ceil(20.4);//retuens 21
Math.floor(20.4);//20
Math.random();//returns random number between 0 to 1
Math.round(30.5);//return 31 - rounds of to nearest integer

//parse() - converts string to json; stringify() - converts json to string

/**
 * BOM
 * Window - History, Navigator, Location, Document
 * Document - DOM - tree structure of html page
 * 
 */
let height = window.innerHeight;// height and width of windows content area
let width = window.innerWidth;
console.log('height ' + height + ' width '+width);
// outerheight and width - including toolbars and scroll bars
// localStorage - obj that stores data without expiration date
// Sessionstorage - valid for current session
// window.open("url"), window.close()

// Navigation - appname, appversion (browser version), useragent (string equal to HTTP user agent req header),
// platform - browser platform
console.log('appname ' +window.navigator.appName);
console.log('appversion ' +window.navigator.appVersion);
console.log('platform ' +window.navigator.platform);

// Location - href(contains url), hostname, port, pathname, assign("url") - opens this url, reload - same page reloaded

console.log('url ' +window.location.href);

/**DOM API
 * document.body.parentNode - returns parent node
 * document.body.childNodes - retuens child nodes
 * document.getElementId("id").firstChild - returns firstchild; lastChild; nextSibling; previousSibling
 * createElement() - create new element, createTextNode(); appendChild() - add newly created element to existing one
 * removeChild()
 * 
 * Event handling using DOM
 * document.getElementId("id").onclick=function(){
 *    alert('Para clicked');
 * }
 * 
 * Event object - properties include target, type
 * target - html elememt that fired teh event
 */

/** Arrays */
// destructuring
let emparr = ['Shaan', 24, 'Mysore'];
let [empname, ,emplocation] = emparr;
console.log(empname);
console.log(emplocation);
let [empsname, ...z] = emparr;
console.log(z);

// iterating array - special for loop
// for (let color of colors){
/** Array methods
 * push - add element at end, pop - remove last element
 * shift - remove first element, unshift - adds new element at start
 * splice - change content of array splice(index, deletecount, items)=>
 * index for new item, delcount - no of items to be removed, items - items to be added
 * slice(start, end) - returns new array obj with all the items from start to end index(end is exclusive)
 * concat() - joins 2 or more arrays; indexof() - returns index else -1 if element absent
 * find() - returns the first hit which passes condition specified as function
 * filter() - creates new array with ele that pass condition provided as function
 * forEach() - iterates over array to access each indexed element
 * map() - creates new array from results of calling function for each element of array
 * arr=[2, 4, 6]; result = arr.map(num=>num/2) ==> [1, 2, 3]
 * join() - returns a string with all elements seperated by ,(default)
 * reduce() - executes a defined function for each element of array and return single value
 * array.reduce(callback(accumulator, currentvalue, index, array), initialvalue)
 */
 var fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.copyWithin(2, 0); // 2- index value where the element is copied, 0 - index which should be copied
 console.log(fruits);
 fruits.push("Pear", "Kiwi", "Melon");
 console.log(fruits);
 fruits.pop(); // takes no parameters
 console.log(fruits);
 fruits.shift();
 console.log(fruits);
 fruits.unshift("Berry");
 console.log(fruits);
 fruits.splice(2, 3, "MuskMelon", "Grapes", "Pineapple");// 2 index at which to be added, 3 - no of elemenst to be deleted
 console.log(fruits);
 var newFruits = fruits.slice(2, 5);
 console.log(newFruits);
 var allfruits = fruits.concat(newFruits);
 console.log(allfruits);
 console.log(allfruits.indexOf("MuskMelon")); //returns teh first occurence


const numarr1 = [1, 2, 3, 4];
console.log(numarr1.reduce((accumulator, currentval) => accumulator+currentval)); // 10
console.log(numarr1.reduce((accumulator, currentval) => accumulator + currentval, 5)); // 15
console.log(newFruits.reduce((accumulator, currentval) => accumulator + currentval));

//test problem - result 333
let myarr = [];
for(i=0; i<3; i++){
    myarr.push(function(){
        console.log(i);
    })
}
console.log(myarr);
for(j=0; j<3; j++) {
    myarr[j]();
}

/** Asynchronous programming
 * callback function - func passed as argument to another func
 * promise - holder for result/error that will be available in future. It has replaced callback functions
 * Promise(function(resolve, reject){
 * resolve if success, reject if failure
 * }) 3 states - pending, resolved, rejected
 * Async/Await - can be used instaed of prmises
 * async function - always returns a promise, if not then js will wrap the value in resolved promise
 * await - makes js wait till promise returns result, works only inside async; syntax error if await used inside 
 * normal functions. It pauses async function and resumes once promise is settled
 */
var mypromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("success");
    }, 2000);
}); // execute the function in timeout after 2 sec
mypromise.then(function(data){
    console.log(data+" recieved in 2 se");
}, function(error){
    console.log(error);
});// prmise obj is handled using then; chaining - async code can be chained using multiple then

/** Fetch API
 * fetch() - takes one param url /path to resource; it returns a promise
 */

/** Modules
 * export - to export functions, objects from module so it can be available in other modules
 * 2 types - named exports (more than 1 export per module) and default(1 export per mod)(eg export default name)
 * 2 ways of exporting - 
 * individually - export let var1, var2;
 * list - export {functionx, var1, var2};
 * 
 * import - eg import {var1, var2} from 'jsfile';
 * import * as mymodule from 'jsfile';
 * 
 */
//tests
var temp="8080";
if(true){
    const temp = 8080;
    console.log('type -' +typeof(temp));
}

employeelist = [
    {id:"I1001", name:"tom"}
];


/** Spread Operator (...)
 * When used in function call it expands the iterable object into list of arguments
 * We can combine arrays with other arrays or normal values using this
 * 
 */

let numarr = [10, 5, 20];
console.log(Math.max(...numarr));// in function array gets converted to list of args
// result is 20

let arr1 = [2, 5, 1];
let arr2 = [8, 2, 6];
let newarr = [...arr1, ...arr2];
console.log(newarr);// combines the 2 arrays - result is [2, 5, 1, 8, 2, 6]

let newarr1 = [0, ...arr1, 4, ...arr2]; // result is [0, 2, 5, 1, 4, 8, 2, 6 ]

// spread operator to create copy of an array
let arrcopy = [...arr1];
arrcopy.push(4); // arrcopy = [2, 5, 1, 4];

let score='';
let a=0;
do{
    a=a+1;
    result=score+a;
}while(a<5);
console.log('result is  - ', result);

let b=3;
b**=3; // b*b*b

console.log('b - ', b);


