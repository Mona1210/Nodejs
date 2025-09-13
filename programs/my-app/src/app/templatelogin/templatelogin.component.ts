import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatelogin',
  templateUrl: './templatelogin.component.html',
  styleUrls: ['./templatelogin.component.css']
})
export class TemplateloginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userName : any;
  password: any;
  birthDate : any;

  onLogin(loginData) {
    console.log("login data - ", loginData);
    console.log("userName - ", this.userName);
    console.log("password - ", this.password);
    console.log("DOB - ", this.birthDate);
  }
}
