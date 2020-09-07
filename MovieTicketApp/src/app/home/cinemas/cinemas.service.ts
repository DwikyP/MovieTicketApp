import { Injectable } from '@angular/core';
import { Cinemas } from './cinemas.model';

@Injectable({
  providedIn: 'root'
})
export class CinemasService {

  private _Cinemas: Cinemas[] = [
    new Cinemas(
      'c1',
      'CGV Living Plaza Jababeka',
      'Living Plaza Jababeka, Mekarmukti, Kec. Cikarang Utara, Bekasi, Jawa Barat 17530',
      'assets/cgv.jpg',
      'CGV'

    ),
    new Cinemas(
      'c2',
      'Chadstone XXI',
      'Mall Chadstone Lantai 2. Jln. Raya Industri Cikarang . Bekasi.',
      'assets/xxi_chadstone.jpg',
      'XXI'
    ),
    new Cinemas(
      'c3',
      'Cinepolis Distrik 1 Meikarta',
      'District 1 Meikarta. Jl. Orange County Boulevard, Cikarang Selatan,. Bekasi, Jawa Barat 17530',
      'assets/cinepolis_distrik1.jpg',
      'Cinepolis'
    ),
    new Cinemas(
      'c4',
      'Cinepolis Mall Lippo Cikarang',
      'Mall Lippo Cikarang, Lantai 1 No 46, Jalan MH. Thamrin Desa Cibatu, Kecamatan Cikarang Selatan, Kabupaten Bekasi.',
      'assets/cinepolis_lippo.jpg',
      'Cinepolis'
    ),
    new Cinemas(
      'c5',
      'Cinepolis MaxxBox Orange County',
      'Maxx Box Orange County Unit A no:02, Desa Cibatu, kecamatan Cikarang selatan, kabupaten Bekasi',
      'assets/cinepolis_oc.jpg',
      'Cinepolis'
    ),
    new Cinemas(
      'c6',
      'Sentra Grosir Cikarang XXI',
      'Sentra Grosir Cikarang Lt.5. Jln. RE. Martadinata No. 95. Cikarang Utara, Bekasi. Jawa Barat',
      'assets/xxi_sgc.jpg',
      'XXI'
    ),
  ];
  get cinemas(){
    return [...this._Cinemas];
  }

  constructor() { }

  getMovie(cinemaid: String){
    return {
      ...this.cinemas.find(cinema => {
      return cinema.id === cinemaid;
    })
  };
  }
}
