import { ModalController } from '@ionic/angular';
import { Place } from './../../places/place.model';
import { OnInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {

  @Input() selectedPlace: Place;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onBookClicked() {
    this.modalCtrl.dismiss({
      message: 'this is dummy message'
    },
    'confirm');
  }

  onCancelBook() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

}
