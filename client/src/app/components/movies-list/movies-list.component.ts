import { Component, OnInit, HostBinding } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from 'src/app/models/movies';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  
  @HostBinding('class') classes = 'row';

  moviesGeneral: any = [];
  movies: any = [];

  constructor(private moviesService: MoviesService) { 

  }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(
      res => {
        this.moviesGeneral = res;
        this.movies = this.moviesGeneral.movies;
        console.log(this.movies);
      },
      err => console.log(err)
    )
  }

}
