var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** Declarations
 * var - has function scope, can be reassigneda nd redefined. If declared outside function - has global scope and
 *      automatically attaches itself to window object
 * let - block level scope, can be reassigned but not re defined
 * const - block level scope, cannot be reassigned or redefined
 */
//var has function scope, even if declared insode loop it willhave function scope
for (var count = 1; count < 5; count++) {
    //console.log(count);
}
console.log('after loop - ', count); //count is defined in for loop, still accessible outside due to global scope nature of var data type declaration
for (var i_1 = 1; i_1 < 5; i_1++) {
    //console.log(i);
}
//console.log('after loop - ', i); this gives reference error
for (var i = 0; i < 10; i++) {
    //setTimeout(function(){console.log(i)}, 100*i);
} // function() gets executed after i = 10 and for loop stops. So i will be 10 and it will be executed 10 times
for (var j = 0; j < 10; j++) { //let keyword introduces new environment per iteration 
    //setTimeout(function(){console.log(j)}, 100*j);// So for each j value setTimeout() gets executed
}
var products = ["Gadgets", "Furniture", "Accessories"];
products[3] = "Books"; //new items can be added in case of const array
products.push("Appliances"); //new items can be pushed or deleted in case of const array
//Template strings - they can have multiple lines and embedded expressions. They are within backticks(``)and
//expression is of form ${expr}
var product = "Radio";
var msg = "The product category is " + product;
console.log(msg);
//use of any 
var size;
size = 13.5;
size = '15 inch';
console.log(size);
//void type represents undefined value 
var voidex = undefined; //mainly used for functions declaration, if return type is not declared then default is void
//typeof returns teh data type
console.log(typeof product); //returns string
//enum - used to give friendly names to set of numeric values. By default first value of enum is 0, incremented by 1
var mobilePrice;
(function (mobilePrice) {
    mobilePrice[mobilePrice["Black"] = 0] = "Black";
    mobilePrice[mobilePrice["Gold"] = 1] = "Gold";
    mobilePrice[mobilePrice["White"] = 2] = "White";
})(mobilePrice || (mobilePrice = {}));
;
//to get the enum value wither of below can be used
console.log(mobilePrice.Black); //returns 0
console.log(mobilePrice["White"]); //returns 2
var mobile;
(function (mobile) {
    mobile[mobile["Black"] = 25000] = "Black";
    mobile[mobile["Gold"] = 25001] = "Gold";
    mobile[mobile["White"] = 25002] = "White";
})(mobile || (mobile = {}));
; //Gold- 25001, White - 25002 or each value can be assigned
//Arrays
var company = ['Samsung', 'Apple', 'Motorola']; // declaration using data type
var manufacturer = ['Samsung', 'Apple', 'Motorola']; // declaration using Array<type>
var productsNew = ['Samsung', 25000, true]; // can have data of any data type
company.splice(1, 2); //removes 2 elements from index position 1
console.log(company);
manufacturer.splice(1, 1, 'Asus', 'Blackberry'); //remove 1 element from index 1 and add these
console.log(manufacturer);
console.log(manufacturer.pop()); // returns removed element and not the array
/*Tuple - array type that accepts more than one predefined type of data; a collection of different objects
Tuple can be used instead of defining class for simpler operations
var customerCreditInfo: [string, Customer, number];
customerCreditInfo = ['I090', new Customer("I090"), 2000];
Error will be thrown if you try to define multiple entries in first initialization, use push() instead
*/
var productAvailable;
productAvailable = ['Samsung Galaxy', true];
//productAvailable = ['Samsung Galaxy', false, 'Moto G5', true]; cannot define multiple entries
productAvailable.push('Moto G5', false);
productAvailable.push(true, 'Iphone 6S'); //order of data doesnt matter while pushing, will be saved in same order
console.log(productAvailable); //[ 'Samsung Galaxy', true, 'Moto G5', false, true, 'Iphone 6S' ]
//test
var var1 = 100;
if (true) {
    var var1 = 200;
    console.log(var1);
}
console.log(var1);
var var2 = 200;
if (true) {
    var var2 = 100;
    console.log(var2);
}
console.log(var2);
/** Functions
 * TS support function overloading but it cannot have 2 functions with same name and different number of input args
 */
function getMobileList(company) {
    var mobList;
    if (company === 'Samsung') {
        mobList = ['Samsung Pro', 'Samsung Galaxy'];
        return mobList;
    }
    else if (company === 'Apple') {
        mobList = ['Iphone 6S', 'Iphone X'];
        return mobList;
    }
    else {
        mobList = ['Nokia 105', 'Nokia Lumia'];
        //return mobList
    }
}
console.log(getMobileList('Nokia')); // returns undefined
//Arrow funstion with this keyword
var Product = /** @class */ (function () {
    function Product() {
        this.productName = "Mobile";
    }
    Product.prototype.getProductDetails = function () {
        return 'Product - ' + this.productName;
    };
    Product.prototype.testFunction = function () {
        var _this = this;
        setTimeout(function () {
            console.log(this.productName);
        }, 100); //throws error as its used within call back functiona nd not actual class function
        setTimeout(function () { console.log(_this.productName); }, 100); // this has product class scope as => is used. No error
    };
    return Product;
}());
//Optional parameter eg getProduct(name:string, prodId?:number) - it comes after all mandatory params
//Default param - if no value is passed or value is undefined, default value is considered
//If default param comes before mandatory, pass undefined to get default value
// If return type is not defined we can return any value
function getProduct(name, prodId) {
    if (name === void 0) { name = 'Clothing'; }
    return 'Prod details - ' + name + prodId;
}
console.log(getProduct(undefined, 101)); // have to specifically pass undefined
function getProductNew(prodId, name) {
    if (name === void 0) { name = 'Clothing'; }
    return 'Prod details - ' + name + prodId;
}
console.log(getProductNew(101)); // can pass only mandatory one and skip undefined
//Rest parameter will by default have array type declaration
function getProductRest(prodId) {
    var prodName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        prodName[_i - 1] = arguments[_i];
    }
    return 'Prod Det Rest - ' + prodId + ' ' + prodName;
}
console.log(getProductRest(101)); //result - 101 we can skip passing rest param- no error occurs
console.log(getProductRest(101, 'Phone', 'Laptop'));
// function can have only rest param as input eg getProductRest(...prodName:string[])
//test
function add(num1, num2) {
    if (num1 === void 0) { num1 = 10; }
    if (num2) {
        return num1 + num2;
    }
    return num1;
}
console.log(add(3, 5) + add(5) + add(3)); //num1 = 10 gets overriden by the value passed ie 3
function addNew(num1, num2) {
    if (num1 === void 0) { num1 = 10; }
    return num1 + num2;
}
function getProdName(prodobj) {
    return 'Product Name - ' + prodobj.prodName;
}
//let prodObj = {prodId:1001, prodName:'Mobile'};// gives result - Mobile
//let prodObj = {prodPrice:10000, prodName:'Mobile'};// gives Error as prodId is missing, if decalared as ?, no error
var prodObj = { prodId: 1001, prodPrice: 10000, prodName: 'Mobile' }; // Duck Typing ; gives result - Mobile, so extra paras can be passed
var prodDet = getProdName(prodObj);
console.log(getProdName(prodObj));
/**
 * Duck typing - to check type compatibility for complex variable types
 * TS compiler uses duck typing to compare one object with the other by comparing if both objs have same properties with
 * same data types
 * If an obj of an interface has more properties than teh interface as in above eg , it will be accepted as interface type
 * and extra properties will be ignored for type checking
 *
*/
//Function type interface used to enforce same number and type of params to any function declared with function type interface
function CreateCustomerID(name, id) {
}
var idgenerator; //declaring variable with interface type
idgenerator = CreateCustomerID; //assigning function to interface type variableto enforce type on function
idgenerator('Infy', 650023);
var prodlistobj = {
    prodId: 1001,
    prodName: 'Mobile',
    category: 'Appliances',
    list: ['Samsung', 'moto', 'asus']
};
var ClassA = /** @class */ (function () {
    function ClassA() {
    }
    //getId(id:number);//wont throw error because the other definition has the correct return type declared
    ClassA.prototype.getId = function (id) { return; };
    return ClassA;
}());
/** Class can have one constructor only, optional params can be used in constructor
 * The inherited class uses the parent constructor even if its not specifically defined
 *
 */
var mainClass = /** @class */ (function () {
    function mainClass(id) {
        this.id = id;
    }
    return mainClass;
}());
var inheritedClass = /** @class */ (function (_super) {
    __extends(inheritedClass, _super);
    function inheritedClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    inheritedClass.prototype.getId = function () {
        console.log('id value - ', this.id);
    };
    return inheritedClass;
}(mainClass));
//var inheritedObj = new inheritedClass(104); - this works as well
var inheritedObj = new inheritedClass(104); //suggested
inheritedObj.getId(); // result - 104, protected property can be accessed in inherited class
/** Static - Can be used to declare class, variables or method
 * 1. Static variable belongs to class and not instance of class
 * 2. They are initialized only once at the start of teh execution
 * 3. A single copy of static variables will eb shared by all instances of teh class
 * 4. Static variable can be accessed insode static and non static function
 * 5. Static function can access only static variables and other static functions
 */
var StaticExample = /** @class */ (function () {
    function StaticExample() {
        this.property2 = 'Non Static property';
    }
    StaticExample.getProperty1Static = function () {
        //return 'property1 - '+this.property1;
        return 'property1 - ' + StaticExample.property1;
        //return 'property1 - '+StaticExample.property2; // error because of 5
        //return 'property2 - '+this.property2;//error because of 5
    };
    StaticExample.prototype.getProperty1 = function () {
        return 'property1 - ' + StaticExample.property1; //eg of 4
        //return 'property1 - '+this.property2; non static prop is accessed as usual using this
    };
    StaticExample.property1 = 'Mobile';
    return StaticExample;
}());
var ChildClass = /** @class */ (function (_super) {
    __extends(ChildClass, _super);
    function ChildClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChildClass.prototype.getProperty1fromParent = function () {
        //return 'property1 - '+StaticExample.property1; This can be used tpp
        return 'property1 in child - ' + ChildClass.property1;
    };
    ChildClass.property1 = 'Property1';
    return ChildClass;
}(StaticExample));
StaticExample.property1 = 'Tablet';
console.log(StaticExample.property1);
console.log(StaticExample.getProperty1Static());
var childClass = new ChildClass();
console.log(childClass.getProperty1fromParent());
