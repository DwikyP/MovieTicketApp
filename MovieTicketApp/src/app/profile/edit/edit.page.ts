import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProviders } from 'src/providers/post-providers';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  user_id: number;
  username: string = "";
  email: string ="";
  phone: string = "";
  constructor(
    private router: Router,
    private postProv: PostProviders,
    private toastCtrl: ToastController,
    private actRoute: ActivatedRoute,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
  		this.user_id = data.user_id;
  		this.username = data.username;
      this.email = data.email;
      this.phone = data.phone;
  	});
  }

  async updateProfile(){
    if(this.username==""){
      const toast = await this.toastCtrl.create({
        message: 'Username is Required',
        duration: 2000
      });
      toast.present();
    }
    else if(this.email==""){
      const toast = await this.toastCtrl.create({
        message: 'Email is Required',
        duration: 2000
      });
      toast.present();
    }
    else if(this.phone==""){
      const toast = await this.toastCtrl.create({
        message: 'Phone Number is Required',
        duration: 2000
      });
      toast.present();
    }
    else{
      let body = {
        user_id: this.user_id,
        username: this.username,
        email: this.email,
        phone: this.phone,
        action: 'editprofile'
      };
      this.postProv.postData(body, 'proses-api.php').subscribe(async data =>{
        var alertmsg = data.msg;
        if(data.success){
          this.storage.clear();
          this.storage.set("session_storage", data.result)
          this.router.navigate(['/profile']);
          const toast = await this.toastCtrl.create({
            message: 'Update Success',
            duration: 2000
          });
          toast.present();
        }else{
          const toast = await this.toastCtrl.create({
            message: alertmsg,
            duration: 2000
          });
          toast.present();
        }
      });
    }
  }
}
