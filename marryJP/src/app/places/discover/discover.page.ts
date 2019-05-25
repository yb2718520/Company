import { PlacesService } from './../places.service';
import { Place } from '../place.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  loadePlaces: Place[];

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.loadePlaces = this.placesService.places;
  }

}
