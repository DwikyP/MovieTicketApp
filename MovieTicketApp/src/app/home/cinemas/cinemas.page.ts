import { Component, OnInit } from '@angular/core';
import { Cinemas } from './cinemas.model';
import { CinemasService } from './cinemas.service';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.page.html',
  styleUrls: ['./cinemas.page.scss'],
})
export class CinemasPage implements OnInit {
  loadedCinemas: Cinemas[]
  constructor(
    private cinemaService: CinemasService
  ) { }

  ngOnInit() {
    this.loadedCinemas = this.cinemaService.cinemas
  }

}
