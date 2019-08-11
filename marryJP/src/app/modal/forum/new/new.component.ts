import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {

  // @Input() selectedPlace: Place;
  // @Input() selectedMode: 'select' | 'random';
  // // access form value, define in html
  // @ViewChild('f') form;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onClose() {
    // add form
    this.modalCtrl.dismiss({
      // date
    });

  }

}
