import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

// const routes: Routes = [

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      RouterModule.forChild([
          {
              path: '',
              component: HomePage
          }
      ])
  ],
    declarations: [HomePage]
})

export class HomePageModule {}
