import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from '../../services/event/event.service';

@Component({
   selector: 'app-event-create',
   templateUrl: './event-create.page.html',
   styleUrls: ['./event-create.page.scss']
})
export class EventCreatePage implements OnInit {

   itemName: string;
   startLocation: string;
   destination: string;
   sendDate: Date;
   offerPrice: number;
   height: number;
   width: number;
   length: number;
   mobile: number;

   constructor(private router: Router, private eventService: EventService) {}

   ngOnInit() {}

   // Creates a sender listing event by sending data (user input) to EventService.
   // Once event has been created, system navigates to home page.
   // if any inputs are undefined when the user clicks create, the event is ignored.
   createEvent(
       itemName: string,
       startLocation: string,
       destination: string,
       sendDate: Date,
       offerPrice: number,
       height: number,
       width: number,
       length: number,
       mobile: number):
       void {
      if (itemName === undefined ||
          startLocation === undefined ||
          destination === undefined ||
          sendDate === undefined ||
          offerPrice === undefined ||
          height === undefined ||
          width === undefined ||
          length === undefined ||
          mobile === undefined) {
         return;
      }
      this.eventService
          .createEvent(
              itemName,
              startLocation,
              destination,
              sendDate,
              offerPrice,
              height,
              width,
              length,
              mobile
          ).then(() => {
         this.router.navigateByUrl('tabs/home');

      });
   }
}
