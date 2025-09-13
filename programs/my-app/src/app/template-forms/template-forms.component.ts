import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  /*Template driven forms
  ==> creating comparitively smaller forms
  ==> most of the code lies in teh HTML part of the component
  ==>form creation, capturing form data
  ngForm ==> template variable which gives control of all the form inputs 
  [(ngModel)]="varName" ==> we add this to control the value of teh input field individually
  name = "user" ==> this is field with which data for that input field gets stored in the form instance
  #variableName="ngModel"==>controlling the validity states of an input field
  
  Different states of an input field in angular
  1. Pristine ==> pure (on load)
  2. Dirty ==> as soon as teh user types something in the input field
  3. Touched ==> focusing on an input field and then leaving without typing makes it touched but not dirty
  4. Untouched
  5. Valid
  6. Invalid ==> if any invalid data is entered into input field
  
  fieldName.errors?.errorName ==> for displaying different error message sfor different validations
  
  On Load ==> States of an input field ==> Pristine, Untouched, Invalid */

  userName = "";
  password = "";

  registerUser(registrationData){
    console.log(registrationData);
  }
}
