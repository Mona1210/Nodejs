import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['./reactive-login.component.css']
})
export class ReactiveLoginComponent implements OnInit {
  user : any;
  passwd : any;
  birthDate: any;
  isAuthenticated: boolean;
  credsInvalid : boolean = false;
  
  loginForm : FormGroup;
  constructor(private formBuilder : FormBuilder, private router: Router,
     private userService:UserService) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group ({
      uname : ["", [Validators.required, Validators.pattern("^[a-zA-Z0-9]+$")]],
      pwd: ["", [Validators.required,]],
      dob: ["", [Validators.required, this.dobcheck]]
    });
    /*var a :[string, number];
    a=["Strange", null, "Tony", 2, 6];
    a=["Strange", undefined, "Tony", 2, 6];
    a=[undefined,"Tony", 2, "Strange"];
    a=[null, null,4, "Tony", 2, 6];*/
  }

  onLogin(loginData) {
    console.log("login data - ", loginData);
    console.log("user -", this.user);
    console.log("pwd -", this.passwd);
    console.log("dob -", this.birthDate);
    this.userService.authenticate(this.user,this.passwd).subscribe(
      authenticated => {
        if(authenticated) {
          console.log('Authenticated');
          this.router.navigate(['/courses']);
        } else {
          this.credsInvalid = true;
        }
      });
  }

  dobcheck(data : FormControl): any {
    let dob = new Date(data.value).setUTCHours(0,0,0,0);
    let today = new Date().setUTCHours(0,0,0,0);
    console.log(dob);
    console.log(today);
    if(dob > today) {
      console.log("inside error");
      return {dobinvalid: {message:"The DOB cannot be future date"}};
    } else {
      return null;
    }
  }
}
