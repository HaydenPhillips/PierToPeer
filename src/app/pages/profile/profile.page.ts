import {Component, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {AuthService} from '../../services/user/auth.service';
import {ProfileService} from '../../services/user/profile.service';
import {Router} from '@angular/router';
import * as firebase from 'firebase';

@Component({
   selector: 'app-profile',
   templateUrl: './profile.page.html',
   styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
   public userProfile: any;

   constructor(
       private alertCtrl: AlertController,
       private authService: AuthService,
       private profileService: ProfileService,
       private router: Router
   ) {
   }

   // Gets the users data associated with profile
   ngOnInit() {
      this.profileService
          .getUserProfile()
          .get()
          .then(userProfileSnapshot => {
             this.userProfile = userProfileSnapshot.data();
          });
   }

   logOut(): void {
      this.authService.logoutUser().then(() => {
         this.router.navigateByUrl('tabs/login');
      });
   }
}


// old way of getting user data
// firebase.auth().onAuthStateChanged(user => {
//   if (user) {
//     this.userProfile = firebase.firestore().doc(`/userProfile/${user.uid}`);
//   }
// });

// async updateName(): Promise<void> {
//   const alert = await this.alertCtrl.create({
//     subHeader: 'Your first name & last name',
//     inputs: [
//       {
//         type: 'text',
//         name: 'firstName',
//         placeholder: 'Your first name',
//         value: this.userProfile.firstName
//       },
//       {
//         type: 'text',
//         name: 'lastName',
//         placeholder: 'Your last name',
//         value: this.userProfile.lastName
//       }
//     ],
//     buttons: [
//       { text: 'Cancel' },
//       {
//         text: 'Save',
//         handler: data => {
//           this.profileService.updateName(data.firstName, data.lastName);
//         }
//       }
//     ]
//   });
//   await alert.present();
// }

// async updatePassword(): Promise<void> {
//   const alert = await this.alertCtrl.create({
//     inputs: [
//       { name: 'newPassword', placeholder: 'New password', type: 'password' },
//       { name: 'oldPassword', placeholder: 'Old password', type: 'password' }
//     ],
//     buttons: [
//       { text: 'Cancel' },
//       {
//         text: 'Save',
//         handler: data => {
//           this.profileService.updatePassword(
//               data.newPassword,
//               data.oldPassword
//           );
//         }
//       }
//     ]
//   });
//   await alert.present();
// }
