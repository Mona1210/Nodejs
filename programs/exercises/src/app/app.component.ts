import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //encapsulation: ViewEncapsulation.None - .cmp in app will be overwritten by .cmp in second. 
  //No ngcontent marker will be set for app and second due to ViewEncapsulation. Only .cmp in First will have _ngcontent set.
})
export class AppComponent {
  title = 'exercises';
  name = '';
  message = '';
  data : Observable<number> = new Observable;
  myArray: number[] = [];
  errors: boolean = false;
  finished: boolean = false;

  tweet = {
    isLiked : true,
    likesCount : 10
  }

  displayMessage(courseName : string) {
    this.message = 'You have successfully registered to ' + courseName;
  }

  //Observables
  fetchData() {
    this.data = new Observable( observer => {
      setTimeout(() => {observer.next(11);}, 1000),
      setTimeout(() => {observer.next(22);}, 2000),
      setTimeout(() => {observer.next(33);}, 3000),
      setTimeout(() => {observer.complete();}, 4000)
    });
    console.log("data - ", this.data);
    const sub = this.data.subscribe((value) => this.myArray.push(value),
      error => this.errors = true,
      () => this.finished = true
    );
  }
}
