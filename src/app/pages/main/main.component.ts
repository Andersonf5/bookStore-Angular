import { Component, OnInit } from '@angular/core';
import { ListBooks } from 'src/app/models/list-books';
import { BookService } from 'src/app/service/book.service';
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

}
