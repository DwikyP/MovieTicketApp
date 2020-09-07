import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProviders } from 'src/providers/post-providers';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username: string;
  phone: string;
  member: any;
  email: string;
  constructor(
    private router: Router,
    private postProv: PostProviders,
    public toastCtrl: ToastController,
    private storage: Storage
  ) { 
  }

  ionViewWillEnter(){
    this.storage.get("session_storage").then((res)=>{
      this.member = res;
      this.username = this.member.username;
      this.phone = this.member.phone;
      this.email = this.member.email;
    })
  }  

  async processLogOut(){
    this.storage.clear();
    this.router.navigate(['/login']);
    const toast = await this.toastCtrl.create({
      message: "Logout Success",
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

}
