import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }
  aboutUsDetail="Became a public company in 1987 and is well known for the high margin specialty generic formulations segment. The formulas are uniquely formulated and are very precise. The quality is unmatched when compared to other pharmacies present today";
  awards:string[]=["Oharmoficient award in 2010", "WPF crowns as Best pharmacy, 2016", "Indian chanber of commerce award in 2016", "IMA Citizen Awars 2019"];
  ngOnInit(): void {
  }

}
