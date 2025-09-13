import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent {
course : any[] = [];
courseList : any[] = [
  {courseName: 'Angular', courseId: 1},
  {courseName:'Java', courseId: 2},
  {courseName: 'Dotnet', courseId: 3},
  {courseName: 'SpringMVC', courseId: 4},
  {courseName: 'HTML', courseId: 5}
];

@Input() set cName(name:string) {
  this.course = [];
  for (var i = 0; i < this.courseList.length; i++) {
    if (this.courseList[i].courseName === name) {
      this.course.push(this.courseList[i]);
    }
  }
}

}
