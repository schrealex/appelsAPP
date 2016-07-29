import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Movie} from "./movie";

@Injectable()
export class MovieService {

  constructor(private http: Http) { }

  getMovies() {

    let apiKey = 'f16bfeb0210b43f1f12d8d4ccc114ee9';

    var url = "http://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&query=" + 'The Matrix';

    console.log(url);
    var response = this.http.get(url).map(response => response.json());
    console.log("response: ");
    console.log(response);
    return response;
  }

  getMovie(title: string) {

    let apiKey = 'f16bfeb0210b43f1f12d8d4ccc114ee9';

    var url = "http://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&query=" + title;

    console.log(url);
    var response = this.http.get(url).map(response => response.json());
    console.log("response: ");
    console.log(response);
    return response;
  }
}
