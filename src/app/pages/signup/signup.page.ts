import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/user/auth.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {
  public signupForm: FormGroup;
  public loading: any;

  constructor(
      private authService: AuthService,
      private loadingCtrl: LoadingController,
      private alertCtrl: AlertController,
      private formBuilder: FormBuilder,
      private router: Router ) {

    this.signupForm = this.formBuilder.group({
      email:      [ '', Validators.compose([Validators.required, Validators.email])  ],
      password:   [ '', Validators.compose([Validators.minLength(6), Validators.required])  ],
      firstName:  [ '', Validators.compose([Validators.required])  ],
      lastName:   [ '', Validators.compose([Validators.required])  ],
      licence:    [ '', Validators.compose([Validators.minLength(6), Validators.required])  ],
      mobile:     [ '', Validators.compose([Validators.required])  ],
      address:    [ '', Validators.compose([Validators.required])  ]
    });
  }

  // if inputs are invalid, an alert is shown to user
  ngOnInit() {}
  async signupUser(signupForm: FormGroup): Promise<void> {
    if (!signupForm.valid) {
      console.log('Need to complete the form, current value: ', signupForm.value);
    }
    else {
      const email:      string = signupForm.value.email;
      const password:   string = signupForm.value.password;
      const firstName:  string = signupForm.value.firstName;
      const lastName:   string = signupForm.value.lastName;
      const licence:    string = signupForm.value.licence;
      const mobile:     number = signupForm.value.mobile;
      const address:    string = signupForm.value.address;

      this.authService.signupUser(
          email,
          password,
          firstName,
          lastName,
          licence,
          mobile,
          address
      ).then(
          () => {

            this.loading.dismiss().then(() => {
              this.router.navigateByUrl('tabs/home');
            });
          },
          error => {
            this.loading.dismiss().then(async () => {
              const alert = await this.alertCtrl.create({
                message: error.message,
                buttons: [{ text: 'Ok', role: 'cancel' }]
              });
              await alert.present();
            });
          }
      );
      this.loading = await this.loadingCtrl.create();
      await this.loading.present();
    }
  }
}
