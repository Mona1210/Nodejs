import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookdetailsService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:4000/BookDetails';
  getBookDetails(id): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }
}
