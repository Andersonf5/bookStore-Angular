import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { BooksDetailsComponent } from './pages/books-details/books-details.component';

const routes: Routes = [{path:'',component:MainComponent}, {path:'details/:isbn13',component:BooksDetailsComponent},//passado com : é um parâmetros
{path:'Query/:search',component:MainComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
