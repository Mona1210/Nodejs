
import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private bookservice : BookService, private activatedRoute: ActivatedRoute) { }
  bookList : Book[];
  book : Book;
  errMsg : string;
  success : boolean;
  id: any;
  ngOnInit(): void {
    this.getBookList();
    this.id = this.activatedRoute.paramMap.pipe(
      (switchMap((param:ParamMap) =>
      this.bookservice.getBooks()
    ))

    )
  }

  getBookList() {
    this.bookservice.getBooks().subscribe(
      data => {
        this.bookList.push(data);
      },
      err => {
        this.errMsg = err;
      }
    )
  }

  addBook (id: number, name: string) {
    console.log(id);
    console.log(name);
    this.bookservice.addBooks({'id':id, 'name':name}).subscribe (
      data => {
        this.bookList.push(data);
        this.success = true;
      },
      err => this.errMsg = err
    );
  }

  updateBook(id:number, name:string) {
    this.bookservice.updateBooks({'id':id, 'name':name}).subscribe(
      data => {
        this.bookList.push = data;
        this.success = true;
      },
      err => this.errMsg = err
    );
  }
}
