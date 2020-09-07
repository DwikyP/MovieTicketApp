import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  loadedMovies: Movie[];
  constructor(private movieServices: MoviesService) { }

  ngOnInit() {
    this.loadedMovies = this.movieServices.movies;
  }
}
