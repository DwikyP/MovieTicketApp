import { Component, OnInit } from '@angular/core';
import { Cinemas } from '../cinemas.model';
import { ActivatedRoute } from '@angular/router';
import { CinemasService } from '../cinemas.service';
import { Movie } from '../../movies/movie.model';
import { MoviesService } from '../../movies/movies.service';

@Component({
  selector: 'app-cinema-detail',
  templateUrl: './cinema-detail.page.html',
  styleUrls: ['./cinema-detail.page.scss'],
})
export class CinemaDetailPage implements OnInit {
  loadedCinema: Cinemas;
  loadedMovies: Movie[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private cinemaService: CinemasService,
    private movieServices: MoviesService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('cinemasid')){
        return;
      }
      const cinemaId = paramMap.get('cinemasid');
      this.loadedCinema = this.cinemaService.getMovie(cinemaId);
    });

    this.loadedMovies = this.movieServices.movies;
  }

}
