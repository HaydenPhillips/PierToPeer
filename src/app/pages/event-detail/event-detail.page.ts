import {Component, OnInit} from '@angular/core';
import {EventService} from '../../services/event/event.service';
import {ActivatedRoute} from '@angular/router';
// import {ProfileService} from '../../services/user/profile.service';

@Component({
   selector: 'app-event-detail',
   templateUrl: './event-detail.page.html',
   styleUrls: ['./event-detail.page.scss']
})
export class EventDetailPage implements OnInit {
   // public userProfile: any;
   public currentEvent: any = {};

   constructor(private eventService: EventService, private route: ActivatedRoute) {}

   // Gets the event listing id form the current event
   ngOnInit() {
      const eventId: string = this.route.snapshot.paramMap.get('id');

      this.eventService.getSendDetail(eventId).get().then(eventSnapshot => {
         this.currentEvent = eventSnapshot.data();
         this.currentEvent.id = eventSnapshot.id;
      });
   }
}

// Could use this to get data from the users profile database
// userProfile can then be used to get their mobile number associated

// this.profileService
//     .getUserProfile()
//     .get()
//     .then(userProfileSnapshot => {
//          this.userProfile = userProfileSnapshot.data();
//     });
