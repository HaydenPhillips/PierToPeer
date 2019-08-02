import { Component } from '@angular/core';
// import {create} from "domain";
import {AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
    controller = document.querySelector('ion-alert-controller');
    firstName;
    lastName;
    Street;
    Email;
    Phone;
    City;
    PostCode;
    private alertCont: any;
  constructor() {}
 processForm = async () => {
     const alert = await this.alertCont.create({
         header: 'Account Created',
         message: `Created account for: <b>${this.firstName} ${this.lastName}</b>`,
         buttons: [{
             text: 'OK'
         }]
     });
     await alert.present();
 }
  handleFirstNameValue(event) {
    this.firstName = event.target.value;
  }
   handleLastNameValue(event) {
       this.lastName = event.target.value;
   }
    handleEmailValue(event) {
      this.Email = event.target.value;
    }
    handleStreetValue(event) {
        this.Street = event.target.value;
    }
    handlePhoneValue(event) {
        this.Phone = event.target.value;
    }
    handleCityValue(event) {
        this.City = event.target.value;
    }
    handlePostCodeValue(event) {
        this.PostCode = event.target.value;
    }
}
// const controller = document.querySelector('ion-alert-controller');

// function processForm(event) {
//     event.preventDefault();
//     controller.create({
//         header: 'Account Created',
//         message: `Created account for: <b>${firstName} ${lastName} ${Street} ${Phone} ${Email}</b>`,
//         buttons: [{
//             text: 'OK'
//         }]
//     }).then(alert => alert.present());
// }
// function handleFirstNameValue(event) {
//     firstName = event.target.value;
// }
// function handleLastNameValue(event) {
//     lastName = event.target.value;
// }
// function handleEmailValue(event) {
//     Email = event.target.value;
// }
// function handleStreetValue(event) {
//     Street = event.target.value;
// }
// function handlePhoneValue(event) {
//     Phone = event.target.value;
// }
// function handleCityValue(event) {
//     City = event.target.value;
// }
// function handlePostCodeValue(event) {
//     PostCode = event.target.value;
// }
