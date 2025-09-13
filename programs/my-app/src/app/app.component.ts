import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    /*template : 
  '<h1> Testing template </h1>',
  styles : ['h1 {color : blueviolet}'],*/
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  imageUrl = 'C:/Users/monap/OneDrive/Desktop/google.jpg';
  noOfColumns = 2;

  numArr : number[] = [1,2,3,4,5,6,7];

  onChangeNum(num) {
    console.log('Selected value - ', num);
  }
  // sort pipe
  sortOption : string = 'price';
  productsList : any = [
    {productName: 'Samsung', price: 18000},
    {productName: 'Apple iPhone', price: 50000},
    {productName: 'Motorola', price: 15000},
    {productName: 'Vivo', price: 25000},
    {productName: 'Nokia', price: 30000}
  ];
  applyClass = true;
  successClass = 'btn btn-success';
  primaryClass = 'btn btn-primary';
  name : string = 'Angular';

  changeName() {
    if (this.title == 'my-app') {
      this.title = 'your-app';
    } else {
      this.title = 'my-app';
    }
  }

  changeAppName(appName){
    if (appName){
      this.title = appName;
    } else {
      this.title = 'my-app';
    }
  }
  user = 'Angular';
  setValue(){
    this.user = 'John Doe'; 
  }

  userName : string;
  isAuthenticated: boolean = false;
  submitted : boolean = false;

  onSubmit(name : string, password : string){
    this.submitted = true;
    this.userName = name;
    if(name === "admin" && password === "admin")
      this.isAuthenticated = true;
    else
      this.isAuthenticated = false;
  }

  fruitsArray = ["Apple", "Mango", "Banana"];
  employeeArray = [
    { empId: 1, empName: "John", department: "ETA", gender: "Male", age:25 },
    { empId: 2, empName: "Mark", department: "FSADM", gender: "Male", age:30 },
    { empId: 3, empName: "Jack", department: "BI", gender: "Male", age:29 },
    { empId: 4, empName: "Robin", department: "DX", gender: "Female", age:38 },
    { empId: 5, empName: "Jill", department: "DX", gender: "Female", age:43 }
  ]

  displayStatus = false;
  //one component can have only one template/view but can have multiple stylesheets
  //templates or styles ==> two different ways to do it
  //External template usage ==> templateUrls, styleUrls
  //inline/internal template usage ==> template, styles

  backgroundColor = 'grey';
  textColor = 'green';
  styleToApply = {
    backgroundColor : 'yellow',
    color : 'black'
  }
  salary = 40000;
  today = new Date();
  employeeObj = {empId:1, empName: "John", department: "ETA"};
/*Transfer of data between parent and child components
comp1 ==> parent
<app-comp2></app-comp2>

comp2 ==> child
<app-comp1></app-comp1>

In property binding [property1]="property2"
property1 ==> value coming from child component
property2 ==> property present in parent component
Eg <img [src]="imgUrl"

<app-parent2Child [employeename]="empName"></app=parent2Child>
empName ==> app component
employeeName ==> parent2Child

Data transfer from Parent to Child
1. Need to use @Input() decorator ==> to be imported from @angular/core - in child
2. Need to use property binding always ==> This is done in parent component
3. [property1] = "property2" ==> property1 is variable in child component, property2 is property in parent
4. @Input will always be used in child component only and never in parent component*/
  empName = "Jane Doe";
  empId = 1001;
  empObj = {empId:1, empName: "John Doe", department:"ETA"};

  /*Data transfer from child to parent
  1. @Output() ==> In child component - Import from @angular/core
  2. eventName ==> customEvent ==> EventEmitter module imported from @angular/core  ==> In child component
  3. Event binding (eventName) = "functionName()" ==> In child component. html file 
  4. Get the emmitted data via customEvent => (customEvent) = "varInParent = $event" ==> In Parent component
  */
   
  myCarName = "";
  getCarData(carName){
    console.log("Car Name = ", carName);
    this.myCarName = carName;
  }
  /*Life cycle of a component
  - a series of stages that a component passes through from the time of creation till
  it gets removed from teh screen
  - Every stage ofa acomponent lifecycle is called a lifecycle hook
  -8 stages that an angular component goes under
  
  constructor
  ngOnChanges
  ngOnInit - variable initialization, if you want to trigger a function/logic on load
  ngDoCheck
  ngAfterContentInit
  ngAfterContentChecked
  ngAfterViewInit
  ngAfterViewChecked
  ngOnDestroy*/
  showComponentStatus = true;

}
