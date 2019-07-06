import { MarryInfo } from './../../models/marryinfos.modal';
import { CreateBookingComponent } from './../../bookings/create-booking/create-booking.component';
import { Place } from './../place.model';
import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss']
})
export class PlaceDetailPage implements OnInit {
  place: Place;
  info: MarryInfo;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private modalCtrl: ModalController,
    private actionSheetController: ActionSheetController
  ) {}

  /**
   * OnInit Method.
   */
  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      // if no id then go to discover page.
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      // get info id from param
      console.log('id : ' + paramMap.get('placeId'));
      this.info = this.placesService.getInfo(paramMap.get('placeId'));
    });
  }

  onBookPlace() {

    this.actionSheetController.create({
      header: 'Choose an Action',
      buttons: [
        {
          text: 'Select Date',
          handler: () => {
            this.openBookingModal('Select');
          }
        },
        {
          text: 'Random Date',
          handler: () => {
            this.openBookingModal('Random');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    }).then(actioSheetEl => {
      actioSheetEl.present();
    });
    // this.router.navigateByUrl('/places/tabs/discover');
    // this.navCtrl.navigateBack('/places/tabs/discover');
  }

  openBookingModal(mode: 'Select' | 'Random') {
    console.log(mode);

    this.modalCtrl
    .create({
      component: CreateBookingComponent,
      componentProps: {
        selectedPlace: this.place,
        selectedMode: mode
      }
    })
    .then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
    .then(resultData => {
      console.log(resultData.data, resultData.role);
      if (resultData.role === 'confirm') {
        console.log('BOOKED!');
      }
    });
  }
}

