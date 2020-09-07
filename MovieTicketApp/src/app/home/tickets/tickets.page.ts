import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProviders } from 'src/providers/post-providers';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.page.html',
  styleUrls: ['./tickets.page.scss'],
})
export class TicketsPage implements OnInit {
  tickets: any[];
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
      this.tickets = [];
      this.loadMyTickets();
    })
  }

  loadMyTickets(){
    return new Promise(resolve => {
      let body = {
        action: 'getticket',
        userid: this.userid
      };
      this.postProvider.postData(body,'proses-api.php').subscribe(data=>{
        for(let ticket of data.result){
          this.tickets.push(ticket);
        }
        resolve(true);
      });
    });
  }

}
