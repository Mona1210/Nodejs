import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlightBooking } from '../shared/FlightBooking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewDetailsService {

  constructor(private http: HttpClient) { }

  view():Observable<any> {
    return this.http.get('http://localhost:3020/FlightBooking');
  }

  delete(id): Observable<any> {
    const url = "http://localhost:3020/FlightBooking";
    return this.http.delete(`${url}/${id}`);
  }
}
