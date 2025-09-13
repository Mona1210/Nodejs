import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookdetailsService } from './bookdetails.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  bookid : any;
  message : string;
  details:any;
  constructor(private activatedroute:ActivatedRoute, private bookdetails:BookdetailsService) {
    const id = activatedroute.params.pipe(map(p => p.id));
    this.bookid = id;
    //console.log(this.bookid);
   }

  ngOnInit(): void {
    const url = window.location.href;
    let urlSplit : any[] = url.split('/');
    console.log('url - ', url);
    console.log('urlSplit - ', urlSplit);
    this.bookid = new Number(urlSplit[4]);
    console.log(this.bookid);
    this.bookdetails.getBookDetails(this.bookid).subscribe(
      data => {
        this.details = data;
        this.message = this.details.desc;
        console.log(this.message);
      },
      err => {
        this.message = "Service failed"
      }
    )
  }

}
