import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CinemasPage } from './cinemas.page';

const routes: Routes = [
  {
    path: '',
    component: CinemasPage
  },
  {
    path: 'cinema-detail',
    loadChildren: () => import('./cinema-detail/cinema-detail.module').then( m => m.CinemaDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CinemasPageRoutingModule {}
