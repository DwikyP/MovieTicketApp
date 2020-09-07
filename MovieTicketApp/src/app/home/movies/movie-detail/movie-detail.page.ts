import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { PostProviders } from 'src/providers/post-providers';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {
  loadedMovies: Movie;
  member: any;
  userid: number;
  myDate = this.datePipe.transform(new Date(),"yyyy-MM-dd");
  showdate: string = "";
  showtime: string = "";
  cinema_name: string = "";
  seat: string = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private postProvider: PostProviders,
    private router: Router,
    private storage: Storage,
    private toastCtrl: ToastController,
    private datePipe: DatePipe

  ) {
   }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('moviesid')){
        return;
      }
      const movieId = paramMap.get('moviesid');
      this.loadedMovies = this.moviesService.getMovie(movieId);

    });
  }

  ionViewWillEnter(){
    this.storage.get("session_storage").then((res)=>{
      this.member = res;
      this.userid = this.member.user_id;
    })
  }
  
  async bookTicket(){
    this.showdate = new Date().toISOString().substring(0, 10);;
    console.log(this.showdate);
    console.log(this.showtime);
    console.log(this.cinema_name);
    console.log(this.seat);

    if(this.showdate==""){
      const toast = await this.toastCtrl.create({
        message: 'Choose the Showdate',
        duration: 2000
      });
      toast.present();
    }
    else if(this.showtime==""){
      const toast = await this.toastCtrl.create({
        message: 'Choose the Showtime',
        duration: 2000
      });
      toast.present();
    }
    else if(this.cinema_name==""){
      const toast = await this.toastCtrl.create({
        message: 'Choose the Cinema',
        duration: 2000
      });
      toast.present();
    }
    else if(this.seat==""){
      const toast = await this.toastCtrl.create({
        message: 'Choose the Seat',
        duration: 2000
      });
      toast.present();
    }
    else{
      return new Promise(resolve => {
        let body = {
          action: 'bookticket',
          moviename: this.loadedMovies.title,
          cinemaname: this.cinema_name,
          showdate: this.showdate,
          showtime: this.showtime,
          seat: this.seat,
          userid: this.userid
        };
  
        this.postProvider.postData(body,'proses-api.php').subscribe(async data => {
          if(data.success){
            const toast = await this.toastCtrl.create({
              message: "Booked Successfully",
              duration: 2000
            });
            toast.present();
            console.log("OK");
            console.log(this.userid);
          }
          else{
            const toast = await this.toastCtrl.create({
              message: "Failed To Book",
              duration: 2000
            });
            toast.present();
          } 
        });
      });
    }

  }

  async addWatchlist(){
    return new Promise(resolve => {
      let body = {
        action: 'addwatchlist',
        moviename: this.loadedMovies.title,
        movieimage: this.loadedMovies.imageUrl,
        userid: this.userid
      };

      this.postProvider.postData(body,'proses-api.php').subscribe(async data => {
        var alertmsg = data.msg;
        if(data.success){
          const toast = await this.toastCtrl.create({
            message: "Added to Watchlist",
            duration: 2000
          });
          toast.present();
          console.log("OK");
          console.log(this.userid);
        }
        else{
          const toast = await this.toastCtrl.create({
            message: alertmsg,
            duration: 2000
          });
          toast.present();
        }
        
      });
    });
    
  }

}
