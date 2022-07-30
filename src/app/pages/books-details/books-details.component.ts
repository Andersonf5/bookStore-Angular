import { Component, OnInit, Input } from '@angular/core';
import { Bookdetails } from 'src/app/models/bookdetails';
import { BookService } from 'src/app/service/book.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.css']
})
export class BooksDetailsComponent implements OnInit {
bookDetails:Bookdetails={
  error: 0,
  title: '',
  subtitle: '',
  authors: '',
  publisher:'',
  language: '',
  isbn10: 0,
  isbn13:0,
  pages:0,
  year: 0,
  rating: 0,
  desc:'',
  price:'',
  image:'',
  url:'',
  pdf: {        },
};

routerIsbn13:number = 0;
lastUrl:string ="";

  constructor(private bookService:BookService,
              private actRoute: ActivatedRoute,) {
      
     }



  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params =>{
      this.routerIsbn13 = Number(params.get('isbn13'));
     // console.log(this.routerIsbn13);
        }) ;
         
        this.getBooksDetailsLocal(this.routerIsbn13);

        this.actRoute.queryParams.subscribe(params =>{
          this.lastUrl = params['lastUrl'];
         // console.log(this.lastUrl[0])
            return this.lastUrl[0];
        })
        
      }
 

  getBooksDetailsLocal(isbn13:number){
    this.bookService.getBookDetails(isbn13).subscribe(booksDetailsFromServer =>{
      this.bookDetails=booksDetailsFromServer;
      //console.log(this.bookDetails);
    })
  }


}
