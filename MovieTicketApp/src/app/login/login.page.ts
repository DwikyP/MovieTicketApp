import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProviders } from 'src/providers/post-providers';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = "";
  password: string = "";
  constructor(
    private router: Router,
    private postProv: PostProviders,
    public toastCtrl: ToastController,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  processRegister(){
    this.router.navigate(['/register']);
  }

  async processLogin(){
    if(this.username !="" && this.password !=""){
      let body = {
        username: this.username,
        password: this.password,
        action: 'login'
      };
      this.postProv.postData(body, 'proses-api.php').subscribe(async data =>{
        var alertmsg = data.msg;
        if(data.success){
          this.storage.set("session_storage", data.result)
          this.router.navigate(['/home']);
          const toast = await this.toastCtrl.create({
            message: 'Login Success',
            duration: 2000
          });
          toast.present();
          this.username = "";
		      this.password = "";
          console.log(data);
        }else{
          const toast = await this.toastCtrl.create({
            message: alertmsg,
            duration: 2000
          });
          toast.present();
        }
      });
    }
    else{
      const toast = await this.toastCtrl.create({
        message: "Username or Password Cannot Left Blank",
        duration: 2000
      });
      toast.present();
    }
  }
}
