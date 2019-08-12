import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

@Injectable({
   providedIn: 'root'
})
export class EventService {
   public senderList: firebase.firestore.CollectionReference;
   public transportList: firebase.firestore.CollectionReference;

   constructor() {
      firebase.auth().onAuthStateChanged(user => {
         if (user) {
            this.senderList = firebase
                .firestore()
                .collection(`/userProfile/${user.uid}/sendList`);
         }
      });

      firebase.auth().onAuthStateChanged(user => {
         if (user) {
            this.transportList = firebase
                .firestore()
                .collection(`/userProfile/${user.uid}/transList`);
         }
      });
   }

   createEvent(
       itemName: string,
       startLocation: string,
       destination: string,
       sendDate: Date,
       offerPrice: number,
       height: number,
       width: number,
       length: number,
       mobile: number
   ): Promise<firebase.firestore.DocumentReference> {
      return this.senderList.add({
         itemName: itemName,
         startLocation: startLocation,
         destination: destination,
         sendDate: sendDate,
         offerPrice: offerPrice,
         height: height,
         width: width,
         length: length,
         mobile: mobile
      });
   }

   createTransportEvent(
       startLocation: string,
       destination: string,
       transDate: Date,
       freightPrice: number,
       height: number,
       width: number,
       length: number,
       mobile: number
   ): Promise<firebase.firestore.DocumentReference> {
      return this.transportList.add({
         startLocation: startLocation,
         destination: destination,
         transDate: transDate,
         freightPrice: freightPrice,
         height: height,
         width: width,
         length: length,
         mobile: mobile
      });
   }

   getSendList(): firebase.firestore.CollectionReference {
      return this.senderList;
   }

   getTransList(): firebase.firestore.CollectionReference {
      return this.transportList;
   }

   getSendDetail(eventId: string): firebase.firestore.DocumentReference {
      return this.senderList.doc(eventId);
   }

   getTransDetail(eventId: string): firebase.firestore.DocumentReference {
      return this.transportList.doc(eventId);
   }
}
