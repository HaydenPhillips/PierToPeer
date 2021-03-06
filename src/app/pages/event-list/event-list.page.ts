import {Component, OnInit} from '@angular/core';
import {EventService} from '../../services/event/event.service';
// import {ActivatedRoute} from '@angular/router';

@Component({
   selector: 'app-event-list',
   templateUrl: './event-list.page.html',
   styleUrls: ['./event-list.page.scss']
})
export class EventListPage implements OnInit {
   public sendList: Array<any>;

   constructor(private eventService: EventService) {}

   // goes through all sender listings and gets details (snaps) of a the events
   ngOnInit() {
      this.eventService
          .getSendList()
          .get()
          .then(eventListSnapshot => {
             this.sendList = [];

             eventListSnapshot.forEach(snap => {
                this.sendList.push({
                   id: snap.id,
                   itemName: snap.data().itemName,
                   offerPrice: snap.data().offerPrice,
                   sendDate: snap.data().sendDate,
                   startLocation: snap.data().startLocation,
                   destination: snap.data().destination,
                   height: snap.data().height,
                   length: snap.data().length,
                   width: snap.data().width,
                   mobile: snap.data().mobile
                });
                return false;
             });
          });
   }
}
