import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from '../../services/event/event.service';

@Component({
   selector: 'app-event-create-transport',
   templateUrl: './event-create-transport.page.html',
   styleUrls: ['./event-create-transport.page.scss'],
})
export class EventCreateTransportPage implements OnInit {

   startLocation: string;
   destination: string;
   height: number;
   width: number;
   length: number;
   freightPrice: number;
   transDate: Date;
   mobile: number;

   constructor(private router: Router, private eventService: EventService) {
   }

   ngOnInit() {
   }

   createTransportEvent(
       startLocation: string,
       destination: string,
       transDate: Date,
       freightPrice: number,
       height: number,
       width: number,
       length: number,
       mobile: number):
       void {
      if (startLocation === undefined ||
          destination === undefined ||
          transDate === undefined ||
          freightPrice === undefined ||
          height === undefined ||
          width === undefined ||
          length === undefined ||
          mobile === undefined) {
         return;
      }
      this.eventService
          .createTransportEvent(
              startLocation,
              destination,
              transDate,
              freightPrice,
              height,
              width,
              length,
              mobile
          ).then(() => {
         this.router.navigateByUrl('tabs/home');  //sending the data to EventService, as soon as event is created,
         // this.router.navigateByUrl(''); goes back to HomePage
      });
   }

}
