import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Output() profileEvent = new EventEmitter();
  //@Input() authenticated;
  auth:boolean;
  @Input() set authenticated(auth:boolean) {
    console.log('auth ', auth);
    this.auth = auth;
    console.log('set', this.authenticated);
  }

  changeProfile : boolean =false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log('ngoninit ',this.authenticated);
  }
  ngOnChanges(): void {
    console.log('ngonichaneg ',this.authenticated);
  }

  onSelect(id) {
    console.log('id in dashboard',id);
    switch(id) {
      case'books': {
        this.router.navigate(['/books']);
        break;
    }
      case 'electronics': {
        this.router.navigate(['/electronics']);
        break;
    }
      case 'profile': {
        this.changeProfile = true;
        this.profileEvent.emit(this.changeProfile);
        this.router.navigate(['/login']);
        break;
      }
      default:
        this.router.navigate(['/dashboard']);
        break;
    }
  }

}
