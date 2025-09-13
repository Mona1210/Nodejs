import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksComponent } from './books/books.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { LoginGuardService } from './login-guard.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'home', component:AppComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[LoginGuardService]},
  {path:'register', component:RegisterComponent},
  //{path:'books', component:BooksComponent, canActivate:[LoginGuardService]},
  {path:'books', loadChildren:() => 
  import('./books/book.module').then(m => m.BookModule)},
  {path:'electronics', component:ElectronicsComponent, canActivate:[LoginGuardService]},
  {path:'books/:id', component:BookDetailsComponent, canActivate:[LoginGuardService]},
  {path:'', redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
