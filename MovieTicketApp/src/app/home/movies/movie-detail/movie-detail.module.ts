import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieDetailPageRoutingModule } from './movie-detail-routing.module';

import { MovieDetailPage } from './movie-detail.page';
import { YouTubePlayerModule } from '@angular/youtube-player';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieDetailPageRoutingModule,
    YouTubePlayerModule
  ],
  declarations: [MovieDetailPage],
  providers: [DatePipe]
})
export class MovieDetailPageModule {}
