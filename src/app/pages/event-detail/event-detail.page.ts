import {Component, OnInit} from '@angular/core';
import {EventService} from '../../services/event/event.service';
import {ActivatedRoute} from '@angular/router';
import {ProfileService} from '../../services/user/profile.service';

@Component({
   selector: 'app-event-detail',
   templateUrl: './event-detail.page.html',
   styleUrls: ['./event-detail.page.scss']
})
export class EventDetailPage implements OnInit {
   // public userProfile: any;
   public currentEvent: any = {};

   constructor(private eventService: EventService, private route: ActivatedRoute) {
   } //handles navigation parameters (like the eventID sent to this page)

   ngOnInit() {
      const eventId: string = this.route.snapshot.paramMap.get('id');

      this.eventService.getEventDetail(eventId).get().then(eventSnapshot => {
         this.currentEvent = eventSnapshot.data();
         this.currentEvent.id = eventSnapshot.id;
      });

      // this.profileService
      //     .getUserProfile()
      //     .get()
      //     .then(userProfileSnapshot => {
      //          this.userProfile = userProfileSnapshot.data();
      //     });
   }
}
