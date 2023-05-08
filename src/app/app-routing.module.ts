import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {BooksComponent} from './components/books/books.component';

const routes: Routes = [
  { path: '', component: DashboardComponent  },
  { path: 'dashboard', component: DashboardComponent  },
  { path: 'books', component: BooksComponent }
  // other routes...
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
