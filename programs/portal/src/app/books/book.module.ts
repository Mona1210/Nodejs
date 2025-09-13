import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BooksComponent } from "./books.component";
import { BookRoutingModule } from "./book-routing.module";

@NgModule({
    imports:[CommonModule, BookRoutingModule]
    //declarations: [BooksComponent]
})

export class BookModule {}