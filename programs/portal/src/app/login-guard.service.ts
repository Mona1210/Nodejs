import { Injectable } from '@angular/core';
import { CanActivate , Router} from '@angular/router';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate{

  constructor(private loginservice:LoginService, private router:Router) { }
  ngOnInit() :void {

  }
  canActivate(): boolean{
    let isauth = true;
    console.log(isauth);
    return isauth;
  }
}
