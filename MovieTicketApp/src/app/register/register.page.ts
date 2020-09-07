import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProviders } from 'src/providers/post-providers';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username: string = "";
  email: string ="";
  phone: string = "";
  password: string = "";
  cpassword: string = "";

  constructor(
    private router: Router,
    private postProv: PostProviders,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  processLogin(){
    this.router.navigate(['/login']);
  }

  async processRegister(){
    if(this.username==""){
      const toast = await this.toastCtrl.create({
        message: 'Username is Required',
        duration: 2000
      });
      toast.present();
    }
    else if(this.password==""){
      const toast = await this.toastCtrl.create({
        message: 'Password is Required',
        duration: 2000
      });
      toast.present();
    }
    else if(this.password!=this.cpassword){
      const toast = await this.toastCtrl.create({
        message: 'Invalid Password',
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
        username: this.username,
        email: this.email,
        phone: this.phone,
        password: this.password,
        cpassword: this.cpassword,
        action: 'register'
      };
      this.postProv.postData(body, 'proses-api.php').subscribe(async data =>{
        var alertmsg = data.msg;
        if(data.success){
          this.router.navigate(['/login']);
          const toast = await this.toastCtrl.create({
            message: 'Register Success',
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
