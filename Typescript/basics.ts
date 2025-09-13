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
for (let i = 1; i < 5; i++) {
    //console.log(i);
}
//console.log('after loop - ', i); this gives reference error

for(var i=0; i<10; i++) {
    //setTimeout(function(){console.log(i)}, 100*i);
}// function() gets executed after i = 10 and for loop stops. So i will be 10 and it will be executed 10 times

for(let j=0; j<10; j++) { //let keyword introduces new environment per iteration 
    //setTimeout(function(){console.log(j)}, 100*j);// So for each j value setTimeout() gets executed
}

const products: string[] = ["Gadgets", "Furniture", "Accessories"];
products[3] = "Books"; //new items can be added in case of const array
products.push("Appliances");//new items can be pushed or deleted in case of const array

//Template strings - they can have multiple lines and embedded expressions. They are within backticks(``)and
//expression is of form ${expr}

let product = "Radio";
let msg = `The product category is ${product}`;
console.log(msg);

//use of any 
let size:any;
size = 13.5;
size = '15 inch';
console.log(size);

//void type represents undefined value 
let voidex :void = undefined; //mainly used for functions declaration, if return type is not declared then default is void

//typeof returns teh data type
console.log(typeof product); //returns string

//enum - used to give friendly names to set of numeric values. By default first value of enum is 0, incremented by 1
enum mobilePrice{Black, Gold, White};
//to get the enum value wither of below can be used
console.log(mobilePrice.Black); //returns 0
console.log(mobilePrice["White"]);//returns 2

enum mobile{Black=25000, Gold, White}; //Gold- 25001, White - 25002 or each value can be assigned

//Arrays
let company: string[] = ['Samsung', 'Apple', 'Motorola'];// declaration using data type
let manufacturer: Array<string> = ['Samsung', 'Apple', 'Motorola'];// declaration using Array<type>
let productsNew: any[] = ['Samsung', 25000, true]; // can have data of any data type
company.splice(1, 2); //removes 2 elements from index position 1
console.log(company);
manufacturer.splice(1,1,'Asus', 'Blackberry'); //remove 1 element from index 1 and add these
console.log(manufacturer);
console.log(manufacturer.pop());// returns removed element and not the array

/*Tuple - array type that accepts more than one predefined type of data; a collection of different objects
Tuple can be used instead of defining class for simpler operations
var customerCreditInfo: [string, Customer, number];
customerCreditInfo = ['I090', new Customer("I090"), 2000];
Error will be thrown if you try to define multiple entries in first initialization, use push() instead
*/
let productAvailable: [string, boolean];
productAvailable = ['Samsung Galaxy', true];
//productAvailable = ['Samsung Galaxy', false, 'Moto G5', true]; cannot define multiple entries
productAvailable.push('Moto G5', false);
productAvailable.push(true, 'Iphone 6S'); //order of data doesnt matter while pushing, will be saved in same order
console.log(productAvailable); //[ 'Samsung Galaxy', true, 'Moto G5', false, true, 'Iphone 6S' ]

//test
var var1 = 100;
if(true) {
    var var1 = 200;
    console.log(var1);
}
console.log(var1);
var var2 = 200;
if(true) {
    var var2 = 100;
    console.log(var2);
}
console.log(var2);

/** Functions
 * TS support function overloading but it cannot have 2 functions with same name and different number of input args
 */

function getMobileList(company:string): string[] {
    let mobList: string[];
    if(company === 'Samsung') {
        mobList = ['Samsung Pro', 'Samsung Galaxy'];
        return mobList;
    } else if(company === 'Apple') {
        mobList = ['Iphone 6S', 'Iphone X'];
        return mobList
    } else {
        mobList = ['Nokia 105', 'Nokia Lumia'];
        //return mobList
    }
}
console.log(getMobileList('Nokia')); // returns undefined

//Arrow funstion with this keyword

class Product {
    productName: string = "Mobile";
    getProductDetails():string {
        return 'Product - '+this.productName;
    }
    testFunction() {
        setTimeout(function() {
            console.log(this.productName);
        }, 100); //throws error as its used within call back functiona nd not actual class function

        setTimeout(
            ()=>{console.log(this.productName);},100); // this has product class scope as => is used. No error
    }
}

//Optional parameter eg getProduct(name:string, prodId?:number) - it comes after all mandatory params
//Default param - if no value is passed or value is undefined, default value is considered
//If default param comes before mandatory, pass undefined to get default value
// If return type is not defined we can return any value
function getProduct(name:string='Clothing', prodId:number) {
    return 'Prod details - '+name+prodId;
}
console.log(getProduct(undefined, 101)); // have to specifically pass undefined
function getProductNew(prodId:number, name:string='Clothing') {
    return 'Prod details - '+name+prodId;
}
console.log(getProductNew(101)); // can pass only mandatory one and skip undefined

//Rest parameter will by default have array type declaration
function getProductRest(prodId:number, ...prodName:string[]) {
    return 'Prod Det Rest - '+prodId+' '+prodName;
}
console.log(getProductRest(101)); //result - 101 we can skip passing rest param- no error occurs
console.log(getProductRest(101, 'Phone', 'Laptop'));
// function can have only rest param as input eg getProductRest(...prodName:string[])

//test
function add(num1=10, num2?:number) {
    if(num2) {
        return num1+num2
    }
    return num1;
}
console.log(add(3,5)+add(5)+add(3)); //num1 = 10 gets overriden by the value passed ie 3
function addNew(num1=10, num2:number) {
    return num1+num2;
}
//console.log(addNew(3,5)+addNew(5)+addNew(3)); //throws error - no of arguments do not match

/** Interfaces
 * Any class that implements interface should implement ALL required members of that interface
 * Interfaces are used to achieve flexibility and loosely coupling in application
 * Used to enforce type checking  and to identify issues upfront 
 * Interface has properties and methods but they dont have access modifiers
 * eg interface Product{
 *      prodid: numver;
 *      prodname?: string; - optional property
 *      getproddetails(prodid:number) : string;
 *      displayproddetails(prodid:number) => string;
 * }
 * If iphone class implements Mobile then object of iphone can be passed as parameter to function whose param type
 * is declared as Mobile
 * Interfaces are not supported by JS and get removed from generated JS
 */

interface ProductNew {
    prodId : number;
    prodName : string;
}
function getProdName(prodobj : ProductNew) : string {
    return 'Product Name - '+prodobj.prodName;
}
//let prodObj = {prodId:1001, prodName:'Mobile'};// gives result - Mobile
//let prodObj = {prodPrice:10000, prodName:'Mobile'};// gives Error as prodId is missing, if decalared as ?, no error
let prodObj = {prodId:1001, prodPrice:10000, prodName:'Mobile'};// Duck Typing ; gives result - Mobile, so extra paras can be passed
const prodDet : string = getProdName(prodObj);
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
function CreateCustomerID(name:string, id:number){
}
interface StringGenerator {
    (chars:string, nums:number);//interface with function declaration, only params and return type is given
    //(chars:string, nums:number):string; gives error in line 210 as return tpe doesnt match of both
}

let idgenerator:StringGenerator;//declaring variable with interface type
idgenerator = CreateCustomerID;//assigning function to interface type variableto enforce type on function
idgenerator('Infy', 650023);

//Interface can be extended from already existing one
interface Category{
    category:string;
}
interface ProductList extends ProductNew, Category {
    list:Array<string>;
}
let prodlistobj : ProductList = {
    prodId: 1001,
    prodName: 'Mobile',
    category: 'Appliances',
    list:['Samsung','moto','asus']
}
/**
 * Class
 * Class that implemenst interface - all functions declared in interface should be defined in class
 * function keyword is not needed when function is defined in any class or interface
 * Access modifiers - 
 * public - these properties are accessible outide teh class using instance of class eg product.productId  
 * private - only accessible within the class
 * protected - accessible within class and inherited classes
 */
interface InterfaceA {
    getId(id:number): string;
    //getId(id:number, price:number):number; function overloading is possible in interface
    getName:(name:string)=> string;
}
class ClassA implements InterfaceA {
    //getId(id:number);//wont throw error because the other definition has the correct return type declared
    getId(id:number): string { return}
    getName:(name:string)=> string;
}
/** Class can have one constructor only, optional params can be used in constructor
 * The inherited class uses the parent constructor even if its not specifically defined
 * If a constructor is defined in inherited class then super() has to be used within to call parent constructor
 *
 */

class mainClass {
    protected id : number;
    constructor(id:number){
        this.id = id;
    }
}
class inheritedClass extends mainClass { // no constructor, uses teh constructor of main class
    getId(): void {
        console.log('id value - ', this.id);
    }
}
//var inheritedObj = new inheritedClass(104); - this works as well
var inheritedObj:inheritedClass = new inheritedClass(104); //suggested
inheritedObj.getId();// result - 104, protected property can be accessed in inherited class

/** Static - Can be used to declare class, variables or method
 * 1. Static variable belongs to class and not instance of class
 * 2. They are initialized only once at the start of teh execution
 * 3. A single copy of static variables will eb shared by all instances of teh class
 * 4. Static variable can be accessed insode static and non static function
 * 5. Static function can access only static variables and other static functions
 */

class StaticExample {
    static property1:string = 'Mobile';
    property2:string = 'Non Static property';
    static getProperty1Static(): string {
        //return 'property1 - '+this.property1;
        return 'property1 - '+StaticExample.property1;
        //return 'property1 - '+StaticExample.property2; // error because of 5
        //return 'property2 - '+this.property2;//error because of 5
    }
    getProperty1(): string {
        return 'property1 - '+StaticExample.property1; //eg of 4
        //return 'property1 - '+this.property2; non static prop is accessed as usual using this
    }
}

class ChildClass extends StaticExample {
    static property1:string = 'Property1';
    getProperty1fromParent(): string {
        //return 'property1 - '+StaticExample.property1; This can be used tpp
        return 'property1 in child - '+ChildClass.property1;
    }
    static getPropert1StaticFromParent():void {
        //super.getProperty1Static() - error - static methods of parent cannot be accessed by normal method ininherited class
        super.getProperty1Static(); // to access static method make the child method also static
    }
}

StaticExample.property1 = 'Tablet';
console.log(StaticExample.property1);
console.log(StaticExample.getProperty1Static());
var childClass : ChildClass = new ChildClass();
console.log(childClass.getProperty1fromParent());// returns the variable in childclass
//console.log(childClass.getPropert1StaticFromParent()); error - cannot use instance of class to access static()

/**
 * Access modifiers can be used in constructors to reduce initialization within
 * Eg class Product {
 *         private id: number;
 *         constructor(id:number) {
 *              this.id = id;
 *         }
 * }
 * can be replaced by below - 
 * class Product {
 *         constructor(private id:number) {
 *         }
 * }
 * 
 */

/** Abstract Classes
 * They cannot be instantiated
 * Abstract methods in abstract class does not contain implementation, they must be imlemented in derived classes
 * Abstarct classes may contain abstract methods and their implementations
 * Abstract classes can have abstract method which will be implemented in the child classes
 * Abstract method cannot be private
 */

/**
 * Namespaces
 * Content of namespace is hidden by default unless exported
 * Nested namespaces can be used
 * Eg - Nested namespace and export the inner namespace
 * namespace namespacename {
 *  export namespace namespacename {
 *      export function functionname {}
 * }
 * }
 * Namespace can be imported using ///<reference path = 'file_containing_namepsace_def.ts"/>
 */

/** Modules
 * Used to group functionalities under common name
 * Content of modules cannot be accessed outside unless exported
 */

/**
 * Generics - to avoid writing same code again for different data types
 */

function printString (stringData : string ) : string {
    return stringData;
}
function printNumber (numData : number ) : number {
    return numData;
}
//We can avoid writing the same code again by using generics
//<T> - type parameter. Same code works for any type of param
function printData<T>(data : T): T {
    return data;
}
let data = printData<string>('Hello'); //returns string
let data1 = printData('Hello');// returns string
//generic array<T> - we can use same array declaration for different types of data

function orderDetails<T>(arg: Array<T>):Array<T> {
    return Array<T>
}