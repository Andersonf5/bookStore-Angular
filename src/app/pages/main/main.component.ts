import { Component, EventEmitter, OnInit } from '@angular/core';
import { ListBooks } from 'src/app/models/list-books';
import { BookService } from 'src/app/service/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable, Output } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
listBooks: Array<ListBooks>= [];
query:string = "";
EventLastUrl= new EventEmitter();

constructor(private bookService:BookService,
            private actRoute: ActivatedRoute,
            private router:Router,) { }

  ngOnInit(): void {

  this.actRoute.paramMap.subscribe(params =>{
    if(params.get('query')) {
      this.query = params.get('query')!.toString();
      this.getBooksQuery(this.query);
    }else{
      this.getBooks();
    }     
  });
      
   
   
  }


getBooks(){
  this.bookService.getBooksFromServe().subscribe(booksFromServer =>{
    this.listBooks=booksFromServer.books;
  //  console.log(this.listBooks);
  })
}

getBooksQuery(query:string){
  this.bookService.searchBooksFromServer(query).subscribe(searchBooks =>{
    this.listBooks=searchBooks.books;
    //console.log(this.listBooks);
  })
} 

getbookDetailsMain(isbn13:number):void{
 this.bookService.getBookDetails(isbn13);
}

saveLastUrl():string{
 return this.router.url.toString();     
    }


}

