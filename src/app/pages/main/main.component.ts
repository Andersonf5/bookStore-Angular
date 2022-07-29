import { Component, OnInit } from '@angular/core';
import { ListBooks } from 'src/app/models/list-books';
import { BookService } from 'src/app/service/book.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
listBooks: Array<ListBooks>= [];

constructor(private bookService:BookService) { }

  ngOnInit(): void {
   this.getBooks();
   
  }


getBooks(){
  this.bookService.getBooksFromServe().subscribe(booksFromServer =>{
    this.listBooks=booksFromServer.books;
    console.log(this.listBooks);
  })
}

getbookDetailsMain(isbn13:number):void{
 this.bookService.getBookDetails(isbn13);
}

/* getBooksQuery(){
  this.bookService.searchBooksFromServer(query).subscribe(searchBooks =>{
    this.listBooks=searchBooks.books;
    console.log(this.listBooks);
  })
} */

}

