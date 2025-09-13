//all lifecycle hooks need to be imported if being used
import { Component, OnInit, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, Input, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks-ex',
  templateUrl: './lifecycle-hooks-ex.component.html',
  styleUrls: ['./lifecycle-hooks-ex.component.css']
})
export class LifecycleHooksExComponent implements OnInit, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy {

  constructor() {
    console.log("constructor");
   }

  ngOnInit(): void {
    console.log("ngOnInit");
  }
  ngOnChanges(){
    console.log("ngOnChanges");
  }
  ngDoCheck(){
    console.log("ngDoCheck");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy");
  }
  counter = 0;
  @Input() employeeName;
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }

}
