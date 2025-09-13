import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }

  getBooks() {
    return this.http.get('http://localhost:3500/Books');
  }

  addBook(book) {
    return this.http.post('http://localhost:3500/Books', book);
  }

  deleteBook(book) {
    let id = book.id;
    let url = 'http://localhost:3500/Books';
    return this.http.delete(`${url}/${id}`);
  }
}
