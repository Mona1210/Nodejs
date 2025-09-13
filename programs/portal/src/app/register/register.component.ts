import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() customEvent = new EventEmitter();
  isregistered : boolean = false;
  registerForm : FormGroup;

  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group ({
      name : ["", [Validators.required, this.nodigits]],
      dob : ["", [Validators.required, this.agelimit]],
      ssn : ["", [Validators.required, Validators.max(99999)]]
    });
    this.isregistered = false;
  }

  onRegister() {
    this.isregistered = true;
    this.customEvent.emit(this.isregistered);
    this.router.navigate(['/login']); 
  }
  nodigits(c:FormControl):any {
    let pattern=/^[0-9]+$/;
    if(!pattern.test(c.value)){
      return null;
    } else {
      return {nodigits:{message:"Name cannot have digits"}}
    }
  }
  agelimit(c:FormControl):any {
    let dob = new Date(c.value).setUTCHours(0,0,0,0);
    let curdate = new Date().setUTCHours(0,0,0,0);
    console.log(curdate-dob);
    let age = (curdate-dob)/(1000*3600*24*365);
    console.log (age);
    if (age>=18) {
      return null;
    } else {
      return {agelimit : {message : "You should be above 18 years to register"}};
    }
  }
}
