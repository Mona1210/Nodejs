import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  auth : any;
  resp : any;
  authenticate():Observable<any> {
    return this.http.get('http://localhost:3000/Login');
  }
  isUserLoggedIn(){
    console.log("isUserLoggedIn");
  }

}
