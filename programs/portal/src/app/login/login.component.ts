
import { Component, OnInit, Output } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  isAuthenticated:boolean;
  errorMessage:string;
  registrationMsg: string;
  profileMsg: string;

  //@Output() customEvent = new EventEmitter();
  constructor(private fb:FormBuilder, private loginservice:LoginService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group ({
      uname : ["", [Validators.required]],
      pwd : ["", [Validators.required, this.passwordcheck]]
      //pwd2 : ["", [Validators.required, this.passwordcheck]]
    });
    //this.customEvent.emit(this.isAuthenticated);
  }

  onLogin() {
    console.log('login data - ', this.loginForm.value);
    this.loginservice.authenticate().subscribe(
      resp => {
        this.isAuthenticated = resp.isAuthenticated;
        //this.isAuthenticated = false;
        console.log(this.isAuthenticated);
        if(this.isAuthenticated) {
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = "Invalid credentials";
        }
      },
      err => {
        this.errorMessage = err;
      }
    );
   // this.customEvent.emit(this.isAuthenticated);
  }

  
  passwordcheck(pwd:FormControl):any{
    let pattern = /^([a-z][A-Z]{6,8})$/;
    if (pattern.test(pwd.value)) {
      return {passworderror:{message:'Password should have 4 to 8 characters'}}
    } else {
      return null;
    }
  }

  set(isregistered) {
    console.log("Inside set(msg)");
    if(isregistered == true) {
      this.registrationMsg = "You have regisetered successfully! Please login to continue.";
    }
  }

  setProfile(changeProfile:boolean) {
    console.log("Inside profilemsg");
    console.log(changeProfile);
    if(changeProfile == true) {
      this.profileMsg = "You can change your profile details here!";
    }
  }
}
