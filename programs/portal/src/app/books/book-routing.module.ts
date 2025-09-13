import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BooksComponent } from "./books.component";
import { LoginGuardService } from "../login-guard.service";

const bookRoutes: Routes = [
    {path:"", component:BooksComponent, canActivate:[LoginGuardService]}
];

@NgModule({
    imports:[RouterModule.forChild(bookRoutes)],
    exports:[RouterModule]
})

export class BookRoutingModule{}