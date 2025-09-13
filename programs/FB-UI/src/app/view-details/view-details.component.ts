import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormsModule } from '@angular/forms';
import {FlightBooking} from '../shared/FlightBooking';
import { ViewDetailsService } from './view-details.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css'],
  providers: [ViewDetailsComponent]
})
export class ViewDetailsComponent implements OnInit {

  constructor(private viewDetails:ViewDetailsService) { }

  flightDetails: FlightBooking[];
  successMessage: string;
  errorMessage: string;

  ngOnInit(): void {
    this.view();
  }

  view() {
    this.viewDetails.view().subscribe(
      data => {
        this.flightDetails = data;
        console.log('flight details - ', this.flightDetails);
      }
    );
  }

  delete(id) {
    this.viewDetails.delete(id).subscribe(
      data => {
        console.log('response from deletion service');
        this.successMessage = "Successfully deleted Id : "+id;
      },
      err => {
        this.errorMessage = "Service failure";
      }
    )
  }
}
