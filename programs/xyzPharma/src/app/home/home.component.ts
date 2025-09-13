import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  whyUs:string="Good health is indeed the most valuable asset and we are the pioneers in this industry. Our producst are of top notch quality with extensive trials and testing backing it iup";
  vision:string="To be one of the worlds most innovative and successful pharmaceutical comapany. To be the pioneers and fron runners in this industry and provide medicines of top notch quality";
  mission: string="To provide teh best quality products and keep going formward in imprving the lives of people thtough our medicines"
  constructor() { }

  ngOnInit(): void {
  }

}
