import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventCreateTransportPage } from './event-create-transport.page';

const routes: Routes = [
  {
    path: '',
    component: EventCreateTransportPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EventCreateTransportPage]
})
export class EventCreateTransportPageModule {}
