import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() count : any;
  @Input() isClicked : any;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isClicked? this.count-- : this.count++;
    this.isClicked = !this.isClicked
  }

}
