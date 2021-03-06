import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {LoadingController, AlertController} from '@ionic/angular';
import {AuthService} from '../../services/user/auth.service';
import {ProfileService} from '../../services/user/profile.service';
import {EventService} from '../../services/event/event.service';
import {Router} from '@angular/router';

@Component({
   selector: 'app-login',
   templateUrl: './login.page.html',
   styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

   public loginForm: FormGroup;
   public loading: HTMLIonLoadingElement;

   constructor(
       public loadingCtrl: LoadingController,
       public alertCtrl: AlertController,
       private authService: AuthService,
       private profileService: ProfileService,
       private eventService: EventService,
       private router: Router,
       private formBuilder: FormBuilder) {
      this.loginForm = this.formBuilder.group({
         email: ['',
            Validators.compose([Validators.required, Validators.email])],
         password: [
            '',
            Validators.compose([Validators.required, Validators.minLength(6)]),
         ],
      });
   }

   // if inputs valid the users will login and navigate to the home page
   // if inputs invalid, user will be shown an alert message
   async loginUser(loginForm: FormGroup): Promise<void> {
      if (!loginForm.valid) {
         console.log('Form is not valid yet, current value:', loginForm.value);
      } else {
         this.loading = await this.loadingCtrl.create();
         await this.loading.present();

         const email = loginForm.value.email;
         const password = loginForm.value.password;

         this.authService.loginUser(email, password).then(
             () => {
                // console.log("navigating now");
                this.loading.dismiss().then(() => {
                   this.router.navigateByUrl('tabs/home');
                });
             },
             error => {
                this.loading.dismiss().then(async () => {
                   const alert = await this.alertCtrl.create({
                      message: error.message,
                      buttons: [{text: 'Ok', role: 'cancel'}],
                   });
                   await alert.present();
                });
             }
         );
      }
   }

   ngOnInit() {
   }
}

