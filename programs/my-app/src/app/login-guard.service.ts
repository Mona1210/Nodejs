import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor(private router: Router, private userService : UserService) { }

  canActivate() : boolean {
    console.log('Inside canActivate');
    if (this.userService.auth) {
      console.log('this.logincomp.isAuthenticated', this.userService.auth);
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
 }
