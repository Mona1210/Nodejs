import { Component, DoCheck, OnInit } from '@angular/core';
import { Books } from './book';
import { BooksService } from './books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{

  constructor(private bookService : BooksService, private router:Router) { }
  //book : Books;
  bookList : any;
  id : number;
  name : string;
  add : any;
  delete : any;
  book : Books = null;
  errMessage : string;
  hideform : boolean;

  ngOnInit(): void {
    this.getBooks();
  }

  refresh(): void {
    this.getBooks();
  }
  /*ngDoCheck() {
    this.getBooks();
  }*/
  getDetails(id) {
    console.log('id - ', id);
    this.router.navigate(['/books',id]);
  }

  getBooks() {
    this.bookService.getBooks().subscribe(
      data => {
        this.bookList = data;
        console.log('booklist - ', this.bookList);
      },
      err => {
        console.log('Error in retrieving books');
      }
    )
  }
  modifyBook(formData){
    this.hideform = true;
    console.log(formData);
    this.book = formData;
    console.log(this.book); 
    let modbook = new Books(); 
    modbook.id = this.book.id;
    modbook.name = this.book.name;
    let modparam = formData.book;
    console.log(modbook, modparam)
    switch(modparam) {
      case 'add': {
        this.addBook(modbook);
        this.router.navigate(['/books']);
        break;
      }
      case 'delete': {
        this.deleteBook(modbook);
        this.router.navigate(['/books']);
        break;
      }
      default : {
        this.errMessage = "This operation cannot be performed";
        break;
      }

    }
    
  }

  addBook(book) {
    this.bookService.addBook(book).subscribe(
      data => {
        this.bookList.push(book);
        console.log("post - ",data);
      },
      err => {
        this.errMessage = "service failed";
      }
    )
  }

  deleteBook(book) {
    this.bookService.deleteBook(book).subscribe(
      data => {
        this.bookList.pop(book);
        console.log("post - ",data);
      },
      err => {
        this.errMessage = "Service failed";
      }
    )
  }
}
