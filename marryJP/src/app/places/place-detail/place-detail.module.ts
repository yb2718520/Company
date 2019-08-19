import { CreateBookingComponent } from './../../bookings/create-booking/create-booking.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlaceDetailPage } from './place-detail.page';
import { AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PlaceDetailPage
  },

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),

    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  declarations: [PlaceDetailPage, CreateBookingComponent],
  entryComponents: [CreateBookingComponent],
  exports: [RouterModule]

})
export class PlaceDetailPageModule {}
