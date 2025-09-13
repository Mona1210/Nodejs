import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2parent',
  templateUrl: './child2parent.component.html',
  styleUrls: ['./child2parent.component.css']
})
export class Child2parentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //If youw ant the data to be sent directly without any trigger
    //this.customEvent.emit(this.carName);
  }
  carName = "Audi";
  @Output() customEvent = new EventEmitter();

  //On trigggering teh event the data will passed through custom event
  triggerEvent() {
    console.log("Inside trigger - ", this.carName);
    this.customEvent.emit(this.carName);
  }
}
