import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-parent',
  templateUrl: './child-parent.component.html',
  styleUrls: ['./child-parent.component.css']
})
export class ChildParentComponent {

  courseList : any[] = [
    {courseName: 'Angular', courseId: 1},
    {courseName:'Java', courseId: 2},
    {courseName: 'Dotnet', courseId: 3},
    {courseName: 'SpringMVC', courseId: 4},
    {courseName: 'HTML', courseId: 5}
  ];

  @Output() customEvent = new EventEmitter();

  register(courseName:string) {
    this.customEvent.emit(courseName);
  }

}
