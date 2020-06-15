import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Movie} from '../models/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  API_URI = "http://localhost:3000/api"

  constructor(private http : HttpClient) { 

  }

  getMovies(){
    return this.http.get(`${this.API_URI}/movies`);
  }

  getMovie(id: string) {
    return this.http.get(`${this.API_URI}/movies/${id}`);
  }

  deleteMovie(id: string) {
    return this.http.delete(`${this.API_URI}/movies/${id}`);
  }

  saveMovie(movie: Movie) {
    return this.http.post(`${this.API_URI}/movies`, movie);
  }

  updateMovie(id: string|number, updatedMovie: Movie){
    return this.http.put(`${this.API_URI}/movies/${id}`, updatedMovie);
  }
}
