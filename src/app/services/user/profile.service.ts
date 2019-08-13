import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public userProfile: firebase.firestore.DocumentReference;
  public currentUser: firebase.User;
  public userDefined: boolean;

  constructor() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
        this.currentUser = user;
        this.userProfile = firebase.firestore().doc(`/userProfile/${user.uid}`);
      }
    });
  }

  getUserProfile(): firebase.firestore.DocumentReference {
      return this.userProfile;
  }
}



// isUser(): boolean {
//   this.userDefined = false;
//   if (this.currentUser !== undefined) {
//     this.userDefined = true;
//   }
//   return this.userDefined;
// }

// updateName(firstName: string, lastName: string): Promise<any> {
//   return this.userProfile.update({ firstName, lastName });
// }
