import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MoviesListComponent} from './components/movies-list/movies-list.component';
import {MovieFormComponent} from './components/movie-form/movie-form.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  {
    path:'movies',
    component: MoviesListComponent
  },
  {
    path:'movies/add',
    component: MovieFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
