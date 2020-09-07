import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProviders } from 'src/providers/post-providers';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  username: string;
  member: any;
  phone: string;
  balance: string;
  email: string;
  user_id: number;

  constructor(
    private router: Router,
    private postProv: PostProviders,
    public toastCtrl: ToastController,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.storage.get("session_storage").then((res)=>{
      this.member = res;
      this.user_id = this.member.user_id;
      this.username = this.member.username;
      this.phone = this.member.phone;
      this.balance = this.member.balance;
      this.email = this.member.email;
    })
    
  } 

    editProfile(user_id, username, phone, email){
  	this.router.navigate(['profile/edit/' + user_id + '/' + username + '/' + phone + '/' + email]);
  } 

}
