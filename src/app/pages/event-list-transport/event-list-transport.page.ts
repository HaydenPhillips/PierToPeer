import {Component, OnInit} from '@angular/core';
import {EventService} from '../../services/event/event.service';
import {ActivatedRoute} from '@angular/router';

@Component({
   selector: 'app-event-list-transport',
   templateUrl: './event-list-transport.page.html',
   styleUrls: ['./event-list-transport.page.scss'],
})
export class EventListTransportPage implements OnInit {
   public transList: Array<any>;

   constructor(private eventService: EventService, private route: ActivatedRoute) {
   }

   ngOnInit() {
      this.eventService
          .getTransList()
          .get()
          .then(eventListSnapshot => {
             this.transList = [];

             eventListSnapshot.forEach(snap => {
                this.transList.push({
                   id: snap.id,
                   startLocation: snap.data().startLocation,
                   destination: snap.data().destination,
                   freightPrice: snap.data().freightPrice,
                   transDate: snap.data().transDate,
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
