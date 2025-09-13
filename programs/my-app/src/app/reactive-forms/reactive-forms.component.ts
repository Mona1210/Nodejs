import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  registerForm: FormGroup;
  isRegistered : boolean;
  
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      //key:value==> key - the field name, value - [default value - '',[validations]]
      userName: ['', [Validators.required, Validators.pattern("^[A-z]+$")]],
      password: ['', [Validators.required]],
      dateOfBirth: ['', Validators.required, this.validateDateOfBirth]
      //Validators.min(), Validators.max() ==> for number based fields
      //Validators.minLength, Validators.maxLength
    })
  }

  registerUser() {
    console.log(this.registerForm.value);
    this.isRegistered = true;
  }

  validateDateOfBirth(data: FormControl) : any{
    let dob = new Date(data.value).setUTCHours(0, 0, 0, 0);
    let today = new Date().setUTCHours(0, 0, 0, 0);
    if (today < dob) {
      return {birthDayError: {message: "Date of birth cannot be future date"}}
    } else {
      return null;
    }

  }
  /*Reactive Forms/Model-Driven forms
  ==> medium to large sized forms
  ==> in this case most of the code lies in the ts part
  
  ngForm ==> form group ==> FormGroup
  Instead of [(ngModel)] & #var="ngModel" name we need to use only one thing - form control 
  */

}
