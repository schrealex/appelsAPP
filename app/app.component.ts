import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

import {MovieService} from './movie/movie.service';
import {MoviesComponent} from "./movie/movies.component";

@Component({
    selector: 'appelsAPP',
    template: `<h1>AppelsAPP</h1>
               <movies></movies>
    `,
    directives: [MoviesComponent],
    providers: [MovieService, HTTP_PROVIDERS]
})
export class AppComponent { }