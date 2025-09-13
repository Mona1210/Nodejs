import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


/*Services in Angular
They are used tomake API calls and managing data across multiple components

HttpClientModule should be imported to app.module.ts
GET - Fetching all or selected data
POST - Use for saving some data over database
PUT - For updating existing data in database
DELETE - To remove some or all the data from DB

How to handle async code is Javascript?
callbacks
promises
async wait

const fs = requires('fs'); //node package that enables file operations
console.log('Hello');
fs.writeFile('./demo.txt', 'My name is Mona', (err) => {
  if(err) console.log('Error occured');
  else console.log('data written successfully');
})
console.log('World');
*/

export class UserService {

  constructor(private http:HttpClient) { }
  userData = {};
  auth : boolean = false;
  

  getAllUsers(): Observable<any>{
    //fetch all users form DB
    return this.http.get("http://localhost:4000/users"); //async code
    //blocking operation - db interaction ==> api call file operation (reading, writing,appending)
  }

  getUserById(userId): Observable<any>{
    return this.http.get('http://localhost:4000/users/${userId}');
  }

  registerUser(userData): Observable<any>{
    return this.http.post("http://localhost:4000/users", userData);
    //2 params ==> 1. URL, 2. Data to be added in teh server
  }

  authenticate(user, pwd): Observable<boolean> {
    console.log('Inside authenticate');
    if(user === 'admin' && pwd === 'admin') {
      this.auth = true;
      const userObservable = of(this.auth);
      return userObservable;
    } else {
      this.auth = false;
      const userObservable = of(this.auth);
      return userObservable;
    }
  }
}
