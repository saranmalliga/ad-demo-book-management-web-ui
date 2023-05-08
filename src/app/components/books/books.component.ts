import { AsyncPipe, DecimalPipe, NgFor, NgIf } from '@angular/common';

import { Component, QueryList, ViewChildren } from '@angular/core';
import { BookService  } from "src/app/services/book.service";
import { Book } from 'src/app/models/book';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
 
export class BooksComponent {
  books: Book[] = [];
  total: number = 0;
  filterBy: string = "all";
  filterValue: string = "";
  isLoading: boolean = true;

  constructor(private bookService: BookService){}

  ngOnInit(): void{
    this.loadBooks();
  }

  seach() {
    this.loadBooks();
  }
  loadBooks(){
    this.isLoading = true;
    this.bookService.getusers(this.filterBy, this.filterValue).subscribe((result) => {
      this.isLoading = false;
      if(result != null && result.data != null)
      {
        this.books = result.data.result;
        this.total =  result.data.totalRows;
      }
    });
  }
}
