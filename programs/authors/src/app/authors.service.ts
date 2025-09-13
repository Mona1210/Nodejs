import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }

  getAuthors(){
    let authorsList = ['author1', 'author2', 'author3'];
    return authorsList;
  }
}
