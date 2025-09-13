import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Flights } from '../shared/Flight';
import{BookFlightService} from "./book-flight.service";

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css'],
  providers: [BookFlightService]
})
export class BookFlightComponent implements OnInit {

  errorMessage: string;
  successMessage : string;
  bookingForm: FormGroup;
  
  constructor(private fb: FormBuilder, private bookFlightService: BookFlightService) { }

  ngOnInit(): void {
    this.bookingForm = this.fb.group ({
      passengerName: ["",[Validators.required]],
      noOfTickets : ["",[Validators.required, Validators.min(1)]],
      flightId : ["", [Validators.required, this.validateFlight]]
    })
  }

  book() {
    console.log("Inside book");
    console.log(this.bookingForm.value);
    this.bookFlightService.getData(this.bookingForm.value).subscribe(
      data => {

      },
      err => {
        this.errorMessage = err;
      }
    )
  }

  validateFlight(c:FormControl): any {
    // use flightError as property
    let patternN = /^([A-Z]{3,3})\-([0-9]{3,3})$/;
    console.log(patternN.test(c.value));
    if(c.value.length != 7 || !patternN.test(c.value)) {
      console.log("Inside error");
      return {flightError: {flightErrorMsg: "Enter Valid FlightId"}};
    } else {
    return null;
    }
  }
}


