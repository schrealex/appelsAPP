import { Component } from '@angular/core';
import {MovieService} from "./movie.service";
import {Movie} from "./movie";

@Component({
  selector: 'movies',
  templateUrl: 'app/movie/movies.component.html',
})
export class MoviesComponent {
  heading = "Movies"
  movies: Object[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    console.log(this.movies);

    this.movieService.getMovies()
        .subscribe(response => this.movies = response.results);

    console.log(this.movies);
  }
}
