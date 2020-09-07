import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CinemasPageRoutingModule } from './cinemas-routing.module';

import { CinemasPage } from './cinemas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CinemasPageRoutingModule
  ],
  declarations: [CinemasPage]
})
export class CinemasPageModule {}
