import { Component } from '@angular/core';
import {EventService} from '../services/event/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private eventService: EventService) {

  }
}
