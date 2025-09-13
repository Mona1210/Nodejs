import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titlecase',
  templateUrl: './titlecase.component.html',
  styleUrls: ['./titlecase.component.css']
})
export class TitlecaseComponent implements OnInit {
  name="";
  constructor() { 
  }

  ngOnInit(): void {
  }

  onKeyup(){
    console.log('Name - ', this.name);
    this.name = 'Test' + this.name;
  }

}
