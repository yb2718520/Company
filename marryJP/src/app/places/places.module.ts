import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PlacesPage } from './places.page';
import { PlacesRoutingModule } from './places-routing.module';
import { DetailPageModule } from './offers/detail/detail.module';
import { SubDetailPageModule } from './offers/detail/sub-detail/sub-detail.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PlacesRoutingModule,
    DetailPageModule,
    SubDetailPageModule
  ],
  declarations: [PlacesPage]
})
export class PlacesPageModule {}
