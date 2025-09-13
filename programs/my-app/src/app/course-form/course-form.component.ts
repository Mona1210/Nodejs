import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})

export class CourseFormComponent {
  
  constructor(private router : Router) {}

  course = new Course(1, 'Angular', '5 days', 'xyz@email.com');
  submitted = false;
  onSubmit(courseData) {
    console.log("course details", courseData);
    console.log('course obj - ', this.course);
    this.submitted = true;
    console.log("submitted = ", this.submitted);
    this.router.navigate(['/books',courseData.id]);
  }

}
