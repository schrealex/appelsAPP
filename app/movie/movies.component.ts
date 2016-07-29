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
  title = '';

  constructor(private movieService: MovieService) { }

  ngOnInit() {

  }

  searchMovie() {
    this.movieService.getMovie(this.title).subscribe(response => this.movies = response.results);
  }
}
