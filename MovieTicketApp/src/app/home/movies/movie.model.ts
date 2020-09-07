export class Movie{
    constructor(
        public id: string,
        public title: string,
        public synopsis: string,
        public imageUrl: string,
        public genre: string[],
        public duration: string,
        public showtimes: string[],
        public trailerId: string
      ) {}
}