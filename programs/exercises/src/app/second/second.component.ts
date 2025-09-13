import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  //encapsulation: ViewEncapsulation.None
  encapsulation: ViewEncapsulation.ShadowDom //the styles will be placed within the <app-second> instead of head
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
