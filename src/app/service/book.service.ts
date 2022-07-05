import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookdetails } from '../models/bookdetails';
import { Books } from '../models/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

apiURL = 'https://api.itbook.store/1.0'
httpOptions = {
  headers: new HttpHeaders({
    'content-type':'application/json',
  })
}
// Necessário instanciar no serviço o modulo de requisições http

  constructor(private httpClient:HttpClient) { }

//retorna a lista de usuarios READ


getBooksFromServe():Observable<Books>{

  return this.httpClient.get<Books>(`${this.apiURL}/new`);
}


 //Buscar detalhes do livro
 
getBookDetails(isbn13:number):Observable<Bookdetails>{
  return this.httpClient.get<Bookdetails>(`${this.apiURL}/books/${isbn13}`);
}


//
//
////salva usuario no banco de dados CREATE
//createUserServe(userCreate:Users):Observable<Users>{
//  return this.httpClient.post<Users>(this.apiURL,userCreate, this.httpOptions)
//}
//
//// Exclui o usuário do banco DELETE
//
//deleteUserServe(id:number):Observable<Users> {
//  return this.httpClient.delete<Users>(`${this.apiURL}/id/${id}`)
//}
//
//
////atualiza o usuário no banco UPDATE
//
//updateUser(id:string, user:Users):Observable<Users>{
//  return this.httpClient.put<Users>(`${this.apiURL}/id/${id}`,user,this.httpOptions);
//}
//
////lista usuário único

}
