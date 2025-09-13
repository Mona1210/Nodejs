import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseFormComponent } from './course-form/course-form.component';
import { BookComponent } from './book/book.component';
import { ReactiveLoginComponent } from './reactive-login/reactive-login.component';
import { LoginGuardService } from './login-guard.service';

const routes: Routes = [
  {path : 'courses', component : CourseFormComponent},
  {path : 'books/:id', component:BookComponent /*canActivate:[LoginGuardService] */},
  {path : 'login', component:ReactiveLoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
