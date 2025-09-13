import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Custom pipe imports happen automatically if done using ng generate pipe
import { SalutationPipe } from './salutation.pipe';
import { LoginComponent } from './login/login.component';
import { Parent2ChildComponent } from './parent2-child/parent2-child.component';
import { Child2parentComponent } from './child2parent/child2parent.component';
import { LifecycleHooksExComponent } from './lifecycle-hooks-ex/lifecycle-hooks-ex.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { SortPipe } from './sort.pipe';
import { CourseFormComponent } from './course-form/course-form.component';
import { EmailValidator } from './course-form/email.validator';
import { TemplateloginComponent } from './templatelogin/templatelogin.component';
import { DobValidator } from './templatelogin/dob.validator';
import { ReactiveLoginComponent } from './reactive-login/reactive-login.component';
import { BookComponent } from './book/book.component';
import { LoginGuardService } from './login-guard.service';
import { UserService } from './user.service';
import { DaysPipe } from './days.pipe';

@NgModule({
  //components, directives, pipes
  declarations: [
    AppComponent,
    SalutationPipe,
    LoginComponent,
    Parent2ChildComponent,
    Child2parentComponent,
    LifecycleHooksExComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    SortPipe,
    CourseFormComponent,
    EmailValidator,
    TemplateloginComponent,
    DobValidator,
    ReactiveLoginComponent,
    BookComponent,
    DaysPipe
  ],
  //Modules - Forms
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  //Specify service class
  providers: [
    LoginGuardService,
    UserService

  ],
  //starting point of teh app
  bootstrap: [AppComponent]
})
export class AppModule { }
