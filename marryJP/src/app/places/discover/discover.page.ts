import { MarryInfo } from './../../models/marryinfos.modal';
import { PlacesService } from './../places.service';
import { Place } from '../place.model';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  loadePlaces: Place[];

  // initialize marry info list.
  marryInfo: MarryInfo[];

  constructor(private placesService: PlacesService, private menuCtrl: MenuController) { }

  /**
   * OnInit.
   */
  ngOnInit() {
    this.marryInfo = this.placesService.marryInfoListByflag;
  }

  /**
   * open & close side menu.ß
   */
  onOpenMenu() {
    if (this.menuCtrl.isOpen) {
      this.menuCtrl.close('m1');
    }
    this.menuCtrl.open('m1');
  }

  /**
   * when tab is clicked.
   * filter value and update list.
   */
  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {

    // empty marry info list.
    this.initMarryInfoList();

    // update marry info list
    switch (event.detail.value) {
      case 'all': {
        this.marryInfo = this.placesService.marryInfoListByflag;
        break;
      }
      case 'male': {
        this.marryInfo = this.placesService.marryInfoIfMale;
        break;
      }
      case 'female': {
        this.marryInfo = this.placesService.marryInfoIfFemale;
        break;
      }
    }
  }

  /**
   * empty marry info list.
   */
  private initMarryInfoList() {
    this.marryInfo = [];
  }

}
