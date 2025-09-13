import { Component, ViewChild } from '@angular/core';
import { AuthorsService } from './authors.service';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(TimerComponent)

  timerComponent: TimerComponent;

  mainTitle: 'Angular';
  subTitle: 'Authors';
  authorsList: any;

  constructor(authorsService: AuthorsService){
    this.authorsList = authorsService.getAuthors();
  }

  startTimer() {
    this.timerComponent.begin();
  }

  stopTimer(){
    this.timerComponent.end();
  }


}
