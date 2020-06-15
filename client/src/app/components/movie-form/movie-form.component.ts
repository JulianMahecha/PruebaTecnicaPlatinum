import { Component, OnInit, Host, HostBinding } from '@angular/core';
import { Movie } from 'src/app/models/movies';
import { MoviesService } from '../../services/movies.service'
import { Genre } from 'src/app/models/genre';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  movie: Movie = {
    id: 0,
    title:'',
    description: '',
    image: '',
    id_genre: 0,
    created_at: new Date()
  };

  genre: Genre = {
    id: 0,
    name:'',
    description: '',
  }

  moviesGeneral: any = [];
  genres: any = [];

  constructor(private moviesService: MoviesService) { 

  }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(
      res => {
        this.moviesGeneral = res;
        this.genres = this.moviesGeneral.genres;
        console.log(this.genres);
      },
      err => console.log(err)
    )
  }

  saveNewMovie(){
    this.moviesService.saveMovie(this.movie)
    .subscribe(
      res => {
        console.log(res);
      },
      err =>{
        console.log(err);
      }
    );
  }

}
