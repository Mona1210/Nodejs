import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flights } from '../shared/Flight';
import { ThrowStmt } from '@angular/compiler';
import { FlightBooking } from '../shared/FlightBooking';

@Injectable({
  providedIn: 'root'
})
export class BookFlightService {
  errorMessage: string;
  flightDetails:Flights[];
  passengerData : FlightBooking;
  constructor(private http:HttpClient) { }

  getData(data:any):Observable<any> {
    this.getFlightData().subscribe(
      data => {
        this.flightDetails = data;
        console.log('Flight data - ',this.flightDetails);
      }
    );
    console.log('Flight data - ',this.flightDetails);
    for(var i=0; i<this.flightDetails.length; i++) {
      if(this.flightDetails[i].flightId = data.flightId && 
        this.flightDetails[i].availableseats>= data.noOfTickets){
          console.log("Inside post");
          this.passengerData.bookingId = "2008";
          this.passengerData.flightId = data.flightId;
          this.passengerData.noOfTickets = data.noOfTickets;
          this.passengerData.passengerName = data.passengerName;
          this.passengerData.totalAmount = 1870;
          console.log("Passenger data - ", this.passengerData);
          const options = new HttpHeaders({"Content-type": "application/json"});
          return this.http.post('http://localhost:3000/FlightBooking',this.passengerData,{headers: options});
        }
    }
    
    return null;
  }

  getFlightData(): Observable<any>{
    return this.http.get('http://localhost:3000/Flight');
  }
}
