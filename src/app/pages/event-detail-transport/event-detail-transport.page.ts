import {Component, OnInit} from '@angular/core';
import {EventService} from '../../services/event/event.service';
import {ActivatedRoute} from '@angular/router';
// import {ProfileService} from '../../services/user/profile.service';

@Component({
   selector: 'app-event-detail-transport',
   templateUrl: './event-detail-transport.page.html',
   styleUrls: ['./event-detail-transport.page.scss'],
})
export class EventDetailTransportPage implements OnInit {
   // public userProfile: any;
   public currentEvent: any = {};

   constructor(private eventService: EventService, private route: ActivatedRoute) {}

   ngOnInit() {
      const eventId: string = this.route.snapshot.paramMap.get('id');

      this.eventService.getTransDetail(eventId)
          .get()
          .then(eventSnapshot => {
             this.currentEvent = eventSnapshot.data();
             this.currentEvent.id = eventSnapshot.id;
          });

      // this.profileService
      //     .getUserProfile()
      //     .get()
      //     .then(userProfileSnapshot => {
      //       this.userProfile = userProfileSnapshot.data();
      //     });
   }

}
