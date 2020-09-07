import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'movies',
        children: [
          {
            path: '',
            loadChildren: './movies/movies.module#MoviesPageModule'
          },
          {
            path: ':moviesid',
            loadChildren: './movies/movie-detail/movie-detail.module#MovieDetailPageModule'
          }
        ]
      },
      {
        path: 'cinemas',
        children: [
          {
            path: '',
            loadChildren: './cinemas/cinemas.module#CinemasPageModule'
          },
          {
            path: ':cinemasid',
            loadChildren: './cinemas/cinema-detail/cinema-detail.module#CinemaDetailPageModule'
          }
        ]
      },
      {
        path: 'tickets',
        children: [
          {
            path: '',
            loadChildren: './tickets/tickets.module#TicketsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/tabs/movies',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/tabs/movies',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
