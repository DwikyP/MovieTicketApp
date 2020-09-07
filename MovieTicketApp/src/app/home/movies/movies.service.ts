import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private _Movies: Movie[] = [
    new Movie(
      'm1',
      'Joker',
      "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.",
      'assets/joker.jpg',
      ['Crime','Drama','Thriller'],
      '2h 2min',
      ['10:00','13:00','17:00'],
      "zAGVQLHvwOY"
    ),
    new Movie(
      'm2',
      'Glass',
      'David Dunn tries to stay one step ahead of the law while delivering vigilante justice on the streets of Philadelphia. His special talents soon put him on a collision course with the Beast -- the psychotic madman who has superhuman strength and 23 distinct personalities. Their epic showdown leads them to an encounter with the mysterious Elijah Price, the criminal mastermind who holds critical secrets for both men.',
      'assets/glass.jpg',
      ['Sci-Fi','Drama','Thriller'],
      '2h 9min',
      ['10:30','12:45','16:00'],
      "95ghQs5AmNk"
    ),
    new Movie(
      'm3',
      'Ad Astra',
      'Thirty years ago, Clifford McBride led a voyage into deep space, but the ship and crew were never heard from again. Now his son -- a fearless astronaut -- must embark on a daring mission to Neptune to uncover the truth about his missing father and a mysterious power surge that threatens the stability of the universe.',
      'assets/adastra.jpg',
      ['Adventure','Drama','Mystery'],
      '2h 3min',
      ['10:15','12:30','15:45','19:00'],
      "BsCNKuB93BA"
    ),
    new Movie(
      'm4',
      'Parasite',
      'A poor family, the Kims, con their way into becoming the servants of a rich family, the Parks. But their easy life gets complicated when their deception is threatened with exposure. ',
      'assets/parasite.jpg',
      ['Comedy','Drama','Thriller'],
      '2h 12min',
      ['11:15','14:00','19:00','22:15'],
      "SEUXfv87Wpk"
    ),
    new Movie(
      'm5',
      '1917',
      'April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.',
      'assets/1917.jpg',
      ['Drama','War'],
      '1h 59min',
      ['12:00','15:15','18:30','21:00'],
      "YqNYrYUiMfg"

    )
  ];
  get movies(){
    return [...this._Movies];
  }
  constructor() { }

  getMovie(movieid: String){
    return {
      ...this.movies.find(movie => {
      return movie.id === movieid;
    })
  };
  }
}