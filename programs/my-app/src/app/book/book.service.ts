import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { Book } from './book';
import { Books } from './book-data';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

constructor(private http:HttpClient) {}
  getBooks(): Observable<Book> {
    return this.http.get<Book>('http://localhost:3000/Books').pipe(
      tap(data => console.log('Data is ready to use', data)),
      catchError(this.handleError));
  }
  /*getBooks(): Observable<Book> {
    let userobservable = of(Book);
    userobservable = (this.http.get<>('http://localhost:3000/Books'));
    return userobservable
  }*/
  
  addBooks(book:Book):Observable<any> {
    const options = new HttpHeaders({'Content-Type' : 'application/json'});
    return this.http.post('http://localhost:3000/Books',book, {headers : options}).pipe(
      retry(3),
      tap(data =>console.log('Added a book - complete')),
      catchError(this.handleError)
    );
  }

  updateBooks(book:Book):Observable<any> {
    const options = new HttpHeaders ({'Content-Type': 'application/json'});
    return this.http.put('http://localhost:3000/Books', book,{headers: options}).pipe (
      tap( data => console.log('Updating of book complete')),
      catchError(this.handleError)
    );
  }

    private handleError(err:HttpErrorResponse) {
      let errMsg: string = '';
      if(err.error instanceof Error) {
        errMsg = err.error.message;
      } else {
        errMsg = err.error.status;
      }
      return throwError(errMsg);
    }
}
