import { Component, OnInit } from '@angular/core';
import { PostProviders } from 'src/providers/post-providers';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.page.html',
  styleUrls: ['./watchlist.page.scss'],
})
export class WatchlistPage implements OnInit {
  watchlist: any[];
  member: any;
  userid: number;
  constructor(
    private router: Router,
    private postProvider: PostProviders,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.storage.get("session_storage").then((res)=>{
      this.member = res;
      this.userid = this.member.user_id;
      this.watchlist = [];
      this.loadWatchlist();
    })
  }

  deleteWatchlist(id){
    let body = {
      action : 'delete',
      watchlist_id : id
    };

    this.postProvider.postData(body, 'proses-api.php').subscribe(data => {
      this.ionViewWillEnter();
    });
  }

  loadWatchlist(){
    return new Promise(resolve => {
      let body = {
        action: 'getwatchlist',
        userid: this.userid
      };
      this.postProvider.postData(body,'proses-api.php').subscribe(data=>{
        for(let movie of data.result){
          this.watchlist.push(movie);
        }
        resolve(true);
      });
    });
  }

}
