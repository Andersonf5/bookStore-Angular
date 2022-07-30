import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {
query = "";




  constructor(private bookService:BookService,
              private actRoute: ActivatedRoute) {

   }

  ngOnInit(): void {

  }

  clearSearchField(){
    this.query = "";
  }

}
